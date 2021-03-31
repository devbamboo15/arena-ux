import {AfterViewInit, ChangeDetectorRef, Component, HostBinding, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {
  selectLeftSidebarEnabled,
  selectLeftSidebarState,
  selectRightSidebarState,
  selectViewport,
  State,
  Viewport,
  SidebarState
} from '@arenaops/arena.ux/store';

import brain from '../../brain.json';
import {BehaviorSubject, combineLatest, Subject} from 'rxjs';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'aux-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit, AfterViewInit {

  leftSidebarState$ = this.store$.select(selectLeftSidebarState);
  rightSidebarState$ = this.store$.select(selectRightSidebarState);
  leftSidebarEnabled$ = this.store$.select(selectLeftSidebarEnabled);
  stylesSubject: Subject<string> = new BehaviorSubject('');
  viewport$ = this.store$.select(selectViewport);

  viewportBrain = brain.panels.xs;
  leftSidebarState = SidebarState.HIDDEN;
  leftSidebarEnabled = false;
  rightSidebarState = SidebarState.HIDDEN;
  viewport = Viewport.XS;

  @HostBinding('class')
  styleClasses: string;

  constructor(private store$: Store<State>,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    combineLatest([
      this.leftSidebarState$,
      this.leftSidebarEnabled$,
    ]).subscribe(([leftSidebarState, enabled]) => {
      this.leftSidebarState = leftSidebarState;
      if (!enabled) {
        this.leftSidebarState = SidebarState.HIDDEN;
      }

      this.rebuildClass();
    });

    this.rightSidebarState$.subscribe(rightSidebarState => {
      this.rightSidebarState = rightSidebarState;
      this.rebuildClass();
    });

    this.viewport$.subscribe(viewport => {
      this.viewport = viewport;
      this.viewportBrain = brain.panels[viewport];

      this.rebuildClass();
    });
  }

  rebuildClass() {
    let ls = this.viewportBrain.left.ifCollapsed;
    if (this.leftSidebarState === SidebarState.EXPANDED) {
      ls = this.viewportBrain.left.ifExpanded;
    }

    let rs = this.viewportBrain.right.ifCollapsed;
    if (this.rightSidebarState === SidebarState.EXPANDED) {
      rs = this.viewportBrain.right.ifExpanded;
    }

    this.stylesSubject.next(`left-${this.leftSidebarState}-${ls} right-${this.rightSidebarState}-${rs} content-${this.viewport}`);
  }

  ngAfterViewInit(): void {
    this.stylesSubject
      .pipe(delay(0))
      .subscribe(styles => {
        this.styleClasses = styles;
        this.cdr.detectChanges();
      });
  }
}
