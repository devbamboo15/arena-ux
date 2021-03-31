import {Component, OnInit} from '@angular/core';
import {SupplementalPanelService} from '@arenaops/arena.ux/components/supplemental-panel';
import {SignInComponent} from '../signin/signin.component';
import {GettingStartedComponent} from '../getting-started/getting-started.component';
import {CropperComponent} from '../cropper/cropper.component';

@Component({
  selector: 'app-supplemental-panel',
  templateUrl: './supplemental-panel.component.html',
  styleUrls: ['./supplemental-panel.component.scss'],
})
export class SupplementalPanelComponent implements OnInit {

  code11 = `
  import {SupplementalPanelModule} from '@arenaops/arena.ux/components/supplemental-panel';

  @NgModule({
    imports: [
      SupplementalPanelModule,
      ...
    ]
  })
  export class AppModule(){}
  `;

  code12 = `
  import {SupplementalPanelService} from '@arenaops/arena.ux/components/supplemental-panel';
  ...

  @Component({
  ...
  })
  export class DemoSupplementalPanelComponent {

    ...

    constructor(
      public supplementalPanelService: SupplementalPanelService
    ) {
    }

    ...
  }
  `;

  code21 = `
  <button class="btn btn-primary" role="supplemental-toggle" (click)="show()">Show Panel</button>
  `;

  code22 = `
  show() {
    this.panelRef = this.supplementalPanelService.showComponent(CropperComponent, {position: 'right'});
  }
  `;

  code31 = `
  <button class="btn btn-primary" role="supplemental-toggle" (click)="show(demoContentInner)">Show Panel</button>

  <ng-template #demoContentInner>
    <div class="p3">
      <aux-brand product="panel"></aux-brand>

      <button class="btn btn-sm btn-primary" (click)="hide()">Hide</button>
    </div>
  </ng-template>
  `;

  code32 = `
  show(template) {
    this.panelRef = this.supplementalPanelService.showTemplate(template, {position: 'right'});
  }
  `;

  panelRef;

  constructor(
    public supplementalPanelService: SupplementalPanelService
  ) {
  }

  ngOnInit() {
  }

  showComponent() {
    this.panelRef = this.supplementalPanelService.showComponent(CropperComponent, {position: 'right'});
  }

  showTemplate(template) {
    this.panelRef = this.supplementalPanelService.showTemplate(template, {position: 'right'});
  }

  hide() {
    this.panelRef.hide();
  }

}
