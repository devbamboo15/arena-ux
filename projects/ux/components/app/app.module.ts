import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AppComponent
  ]
})
export class AppModule {

  constructor(@Optional() @SkipSelf() parentModule?: AppModule) {
    if (parentModule) {
      throw new Error(
        'Arena AppModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(config?: any): ModuleWithProviders<BsDropdownModule> {
    return {
      ngModule: BsDropdownModule,
      providers: []
    };
  }
}
