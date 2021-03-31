import {
  AfterViewChecked,
  AfterViewInit, ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit
} from '@angular/core';
import {Store} from '@ngrx/store';
import {
  actionChangeTheme,
  actionChangeViewport,
  selectTheme,
  selectViewport,
  State, Viewport, Theme
} from '@arenaops/arena.ux/store';
import {BehaviorSubject, Subject} from 'rxjs';

@Component({
  selector: 'aux-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked {

  private _theme: any;

  private _viewport: any;

  @HostBinding('class')
  styles: string;

  stylesSubject: Subject<string> = new BehaviorSubject('');

  prefix = 'is-';
  sizes = [
    {
      id: Viewport.XS, name: 'xs', css: `d-block d-vs-none`
    },
    {
      id: Viewport.VS, name: 'vs', css: `d-none d-vs-block d-sm-none`
    },
    {
      id: Viewport.SM, name: 'sm', css: `d-none d-sm-block d-md-none`
    },
    {
      id: Viewport.MD, name: 'md', css: `d-none d-md-block d-lg-none`
    },
    {
      id: Viewport.LG, name: 'lg', css: `d-none d-lg-block d-vl-none`
    },
    {
      id: Viewport.VL, name: 'vl', css: `d-none d-vl-block d-xl-none`
    },
    {
      id: Viewport.XL, name: 'xl', css: `d-none d-xl-block`
    },
  ];

  theme$ = this.store$.select(selectTheme);
  viewport$ = this.store$.select(selectViewport);

  constructor(private elementRef: ElementRef,
              private store$: Store<State>,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.theme$.subscribe(theme => this.theme = theme);
    this.viewport$.subscribe(viewport => this.viewport = viewport);
    this.stylesSubject.subscribe(styles => {
      setTimeout(() => {
        this.styles = styles;
      }, 1);
      this.cdr.detectChanges();
    });
  }

  ngAfterViewInit() {
    this.detectScreenSize();
  }

  ngAfterViewChecked(): void {
  }

  @HostListener('window:resize', [])
  public onResize() {
    this.detectScreenSize();
  }

  private detectScreenSize() {
    const currentSize = this.sizes.find(x => {
      const el = this.elementRef.nativeElement.querySelector(`.${this.prefix}${x.id}`);
      return window.getComputedStyle(el).display !== 'none';
    });

    this.store$.dispatch(actionChangeViewport({viewport: currentSize.id}));
    this.updateStyles();
  }

  @Input() set theme(theme) {
    this._theme = theme;
    this.store$.dispatch(actionChangeTheme({theme}));
    this.updateStyles();
  }

  set viewport(viewport) {
    this._viewport = viewport;
    // this.updateStyles();
  }

  updateStyles() {
    const currentSize = this.sizes.find(x => {
      return x.id === this._viewport;
    });

    this.stylesSubject.next(`${this._theme} viewport-${currentSize?.name}`);
  }

}
