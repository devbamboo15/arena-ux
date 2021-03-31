import {Component, Input, OnInit} from '@angular/core';
import {NavMenuItem} from './nav-menu-item';
import {Store} from '@ngrx/store';
import {
  State,
  selectLeftSidebarState,
  selectRightSidebarState
} from '@arenaops/arena.ux/store';
import {combineLatest} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'aux-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {

  @Input()
  context = 'left';

  @Input()
  items: NavMenuItem[] = [];

  @Input()
  subMode: 'dropdown' | 'expand' | 'flyout' = 'dropdown';

  collapsedNavItems = [];
  isCollapsed = false;

  flyoutNavItems = [];

  leftSidebarsState$ = this.store$.select(selectLeftSidebarState);
  rightSidebarsState$ = this.store$.select(selectRightSidebarState);

  sidebarState: string;

  constructor(private store$: Store<State>) {
  }

  ngOnInit() {
    combineLatest([
      this.leftSidebarsState$,
      this.rightSidebarsState$
    ]).pipe(
      map(([left, right]) => this.context === 'left' ? left : right),
    ).subscribe((state) => {
      this.sidebarState = `${state}`;
    });
  }

  onTooltip(event) {
    // const tooltip = document.querySelector(`.sidebarNavTooltip#${event.id}`) as HTMLElement;
    // tooltip.style.left = `103px`
  }

}
