import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {BreadCrumb} from './breadcrumb.model';
import {ActivatedRoute, NavigationEnd, PRIMARY_OUTLET, Router} from '@angular/router';
import {distinctUntilChanged, filter, map, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbsService {

  private breadcrumbs: any = {};
  private _breadcrumbs$: BehaviorSubject<BreadCrumb[]> = new BehaviorSubject([]);

  public breadcrumbs$: Observable<BreadCrumb[]> = this._breadcrumbs$.asObservable();

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .pipe(map(() => this.activatedRoute))
      .pipe(map((route) => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }))
      .pipe(filter(route => route.outlet === PRIMARY_OUTLET))
      .subscribe(route => {

        this._breadcrumbs$.next(this.breadcrumbs[this.router.url] ? this.breadcrumbs[this.router.url] : []);
      });
  }

  public set(lastUrl: string, breadcrumbs: BreadCrumb[]) {
    this.breadcrumbs[lastUrl] = breadcrumbs;
    this._breadcrumbs$.next(this.breadcrumbs[lastUrl]);
  }

  public append(lastBreadcrumbs: BreadCrumb[], replace = false) {
    this.breadcrumbs$.pipe(
      take(1),
    ).subscribe(breadcrumbs => {
      if (!replace) {
        breadcrumbs.concat(lastBreadcrumbs);
        this._breadcrumbs$.next(breadcrumbs);
      } else {
        if (breadcrumbs.length === 0) {
          return;
        }

        const breadcrumb = lastBreadcrumbs[0];

        breadcrumbs[breadcrumbs.length - 1].label = breadcrumb.label;
        breadcrumbs[breadcrumbs.length - 1].url =
          breadcrumb.url ? breadcrumb.url : breadcrumbs[breadcrumbs.length - 1].url;
        this._breadcrumbs$.next(breadcrumbs);
      }
    });
  }
}
