import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input, OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import {delay, map, withLatestFrom} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {
  actionLeftChangeSidebarState,
  actionLeftSidebarEnabled,
  actionRightChangeSidebarState,
  actionRightSidebarEnabled,
  selectLeftSidebarState,
  selectRightSidebarState,
  selectViewport,
  SidebarContext,
  SidebarState,
  State,
  Viewport
} from '@arenaops/arena.ux/store';
import {PanelsService} from '../../services/panels.service';

import brain from '../../brain.json';
import {BehaviorSubject, Subject} from 'rxjs';

@Component({
  selector: 'aux-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnDestroy, AfterViewInit {

  leftSidebarsState$ = this.store$.select(selectLeftSidebarState);
  rightSidebarsState$ = this.store$.select(selectRightSidebarState);
  viewport$ = this.store$.select(selectViewport);
  stylesSubject: Subject<string> = new BehaviorSubject('');
  viewportBrain$: Subject<any> = new BehaviorSubject(brain.panels.xs.left);

  viewportBrain: any;

  screenSize: Viewport;

  @HostBinding('class')
  styleClasses: string;

  protected _state: any;
  protected _context: SidebarContext = SidebarContext.LEFT;

  @Output()
  stateChanged = new EventEmitter<string>();

  @Input()
  set context(context) {
    this._context = context;

    this.rebuildStyles();
  }

  get context() {
    return this._context;
  }

  get state() {
    return this._state;
  }

  @Input()
  set state(state) {
    // if (this._context === SidebarContext.LEFT) {
    //   this.store$.dispatch(actionLeftChangeSidebarState({panelState: state}));
    // } else {
    //   this.store$.dispatch(actionRightChangeSidebarState({panelState: state}));
    // }
    this.stateChanged.emit(state);
    this._state = state;

    this.rebuildStyles();
  }

  constructor(private store$: Store<State>,
              private eRef: ElementRef,
              private cdr: ChangeDetectorRef,
              public panelsService: PanelsService) {
  }

  ngAfterViewInit(): void {
    this.stylesSubject
      .pipe(delay(0))
      .subscribe(styles => {
        this.styleClasses = styles;
        this.cdr.detectChanges();
      });
  }

  ngOnInit() {
    this.viewportBrain$.subscribe(viewportBrain => this.viewportBrain = viewportBrain);

    let sidebarState = this.rightSidebarsState$;

    if (this._context === SidebarContext.LEFT) {
      this.store$.dispatch(actionLeftSidebarEnabled({enabled: true}));
      sidebarState = this.leftSidebarsState$;
    } else {
      this.store$.dispatch(actionRightSidebarEnabled({enabled: true}));
    }

    sidebarState.pipe(
      withLatestFrom(this.viewportBrain$),
      map(([state, viewportBrain]) => {

        if (state !== SidebarState.RESET) {
          this.state = state;
          return;
        }

        // @todo change this
        let s = viewportBrain.defaultMode;
        if (s === SidebarState.HIDDEN) {
          s = SidebarState.COLLAPSED;
        }

        if (this._context === SidebarContext.LEFT) {
          this.store$.dispatch(actionLeftChangeSidebarState({panelState: (s as any)}));
        } else {
          this.store$.dispatch(actionRightChangeSidebarState({panelState: (s as any)}));
        }
      }),
    ).subscribe();

    this.viewport$.pipe(
      map(size => {
        this.screenSize = size;

        const viewportBrain = brain.panels[size][this.context] as any;
        this.viewportBrain$.next(viewportBrain);

        this.state = viewportBrain.defaultMode;
        if (this._context === SidebarContext.LEFT) {
          this.store$.dispatch(actionLeftChangeSidebarState({panelState: this.state}));
        } else {
          this.store$.dispatch(actionRightChangeSidebarState({panelState: this.state}));
        }
      })
    ).subscribe();
  }

  @HostListener('document:click', ['$event'])
  clickOut(event) {
    // if (!this.eRef.nativeElement.contains(event.target)) {
    //   if (event.target.attributes.role?.value === 'toggle') {
    //     return;
    //   }
    //   this.resetStates();
    // }
  }

  rebuildStyles() {
    this.stylesSubject.next(`aux-sidebar-${this._context} aux-sidebar-${this._state}`);
  }

  resetStates() {
    const state = this.viewportBrain.defaultMode;

    if (this.state !== SidebarState.HIDDEN) {
      if (this._context === SidebarContext.LEFT) {
        this.store$.dispatch(actionLeftChangeSidebarState({panelState: (state as any)}));
      } else {
        this.store$.dispatch(actionRightChangeSidebarState({panelState: (state as any)}));
      }
    }
  }

  setState(state) {
    if (this._context === SidebarContext.LEFT) {
      this.store$.dispatch(actionLeftChangeSidebarState({panelState: state}));
    } else {
      this.store$.dispatch(actionRightChangeSidebarState({panelState: state}));
    }
  }

  ngOnDestroy(): void {
    if (this._context === SidebarContext.LEFT) {
      this.store$.dispatch(actionLeftSidebarEnabled({enabled: false}));
    } else {
      this.store$.dispatch(actionRightSidebarEnabled({enabled: false}));
    }
  }

}
