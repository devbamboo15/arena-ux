import {
  ApplicationRef,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  ElementRef,
  EmbeddedViewRef,
  Injector,
  Input,
  OnInit
} from '@angular/core';
import {Store} from '@ngrx/store';

import {
  SidebarState,
  State,
  selectLeftSidebarEnabled,
  selectLeftSidebarState,
  selectRightSidebarEnabled,
  selectRightSidebarState,
  actionLeftChangeSidebarState,
  actionRightChangeSidebarState,
  selectViewport,
  Viewport,
  actionLeftSidebarEnabled,
  SidebarContext
} from '@arenaops/arena.ux/store';

import {PanelsService} from '../../services/panels.service';
import {SidebarComponent} from '../sidebar';
import {NavMenuItem} from '../nav';


@Component({
  selector: 'aux-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.scss'],
})
export class NavigationPanelComponent implements OnInit {

  @Input()
  haveExternalLinks = true;

  leftSidebar: ComponentRef<SidebarComponent>;

  viewport$ = this.store$.select(selectViewport);

  leftSidebarState$ = this.store$.select(selectLeftSidebarState);
  leftSidebarEnabled$ = this.store$.select(selectLeftSidebarEnabled);
  rightSidebarState$ = this.store$.select(selectRightSidebarState);
  rightSidebarEnabled$ = this.store$.select(selectRightSidebarEnabled);

  leftSidebarState = SidebarState.HIDDEN;
  leftSidebarEnabled = undefined;
  rightSidebarState = SidebarState.HIDDEN;
  rightSidebarEnabled = false;

  isLeftSidebarInjected = false;

  @Input()
  set items(items: NavMenuItem[]) {
    this.panelsService.items = items;
  }

  get items() {
    return this.panelsService.items;
  }

  constructor(public panelsService: PanelsService,
              private store$: Store<State>,
              private componentFactoryResolver: ComponentFactoryResolver,
              private applicationRef: ApplicationRef,
              private elRef: ElementRef,
              private injector: Injector) {
  }

  ngOnInit() {
    // @todo tech debt, remove setTimeouts
    this.leftSidebarState$.subscribe(state => {
      setTimeout(() => {
        this.leftSidebarState = state;
      }, 10);
    });
    this.rightSidebarState$.subscribe(state => this.rightSidebarState = state);
    this.leftSidebarEnabled$.subscribe(enabled => {
      setTimeout(() => {
        this.leftSidebarEnabled = enabled;
      }, 10);
    });
    this.rightSidebarEnabled$.subscribe(enabled => this.rightSidebarEnabled = enabled);

    // @todo fix this
    setTimeout(() => {
      const sidebar = document.querySelector('.aux-sidebar-left') as HTMLElement;

      if (sidebar !== null) {
        return;
      }

      this.viewport$.subscribe((viewport) => {

        const showList = [Viewport.XS, Viewport.VS, Viewport.SM, Viewport.MD];

        if (showList.includes(viewport)) {
          if (!this.isLeftSidebarInjected) {
            this.isLeftSidebarInjected = true;
            this.createLeftSidebar();
          }
        } else {
          if (this.isLeftSidebarInjected) {
            this.isLeftSidebarInjected = false;
            this.destroyLeftSidebar();

            this.store$.dispatch(actionLeftChangeSidebarState({panelState: SidebarState.HIDDEN}));
            this.store$.dispatch(actionLeftSidebarEnabled({enabled: false}));

          }
        }
      });
    }, 500);

  }

  createLeftSidebar() {
    const factory = this.componentFactoryResolver
      .resolveComponentFactory(SidebarComponent);

    const component = factory
      .create(this.injector);

    component.instance.context = SidebarContext.LEFT;

    const domElem = (component.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    this.elRef.nativeElement.parentElement.insertBefore(domElem,
      this.elRef.nativeElement.nextSibling);
    this.applicationRef.attachView(component.hostView);

    this.leftSidebar = component;
  }

  destroyLeftSidebar() {
    if (!this.leftSidebar) {
      return;
    }
    this.applicationRef.detachView(this.leftSidebar.hostView);
    this.leftSidebar.destroy();
  }

  resetLeftPanelState() {
    this.store$.dispatch(
      actionLeftChangeSidebarState({panelState: SidebarState.RESET}));
  }

  resetRightPanelState() {
    this.store$.dispatch(
      actionRightChangeSidebarState({panelState: SidebarState.RESET}));
  }
}
