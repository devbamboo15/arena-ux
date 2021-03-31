import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {select, Store, StoreModule as NGRXModule} from '@ngrx/store';
import {JWT_OPTIONS, JwtModule} from '@auth0/angular-jwt';
import {metaReducers, reducers, State} from './state';
import {AuthGuard} from './guards/auth.guard';
import {StoreConfiguration, StoreConfigurationParams} from './store-configuration';
import {HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {AuthEffects, selectGetToken} from './features/auth';
import {EffectsModule} from '@ngrx/effects';
import {RouterEffects} from './features/router';
import {ApiInterceptor} from './interceptors/api.interceptor';
import {SupportDeskEffects} from './features/support-desk';
import {AuthService, LocalStorageService, ProfileService, SupportService} from './services';
import {first, map} from 'rxjs/operators';
import {ProfileInfoEffects} from './features/profileInfo';

export function jwtOptionsFactory(store$: Store<State>) {
  // IoT Compiler does not support Lambda function
  function tokenGetter() {
    return store$.pipe(
      select(selectGetToken),
      map(token => token?.auth.access_token),
      first()
    ).toPromise();
  }

  return {
    tokenGetter,
    whitelistedDomains: ['develop.core.api.arena.com', 'staging.core.api.arena.com', 'core.api.arena.com'],
  };
}

@NgModule({
  imports: [
    CommonModule,
    NGRXModule.forRoot(reducers, {metaReducers}),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([
      AuthEffects,
      RouterEffects,
      SupportDeskEffects,
      ProfileInfoEffects
    ]),
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [Store],
      },
    }),
  ],
  exports: [],
  providers: [
    // Services
    LocalStorageService,
    AuthService,
    SupportService,
    ProfileService,

    AuthGuard,
    {provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true},
  ]
})
export class StoreModule {
  static forRoot(params: StoreConfigurationParams): ModuleWithProviders<StoreModule> {
    return {
      ngModule: StoreModule,
      providers: [
        {
          provide: StoreConfiguration,
          useValue: params
        }
      ]
    };
  }

  constructor(
    @Optional() @SkipSelf() parentModule: StoreModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('StoreModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
        'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
