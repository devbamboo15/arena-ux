import {Component, OnInit} from '@angular/core';
import {SupplementalPanelService} from '@arenaops/arena.ux/components/supplemental-panel';

@Component( {
  selector: 'aux-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss'],
})
export class SupportComponent implements OnInit {

  supportPanelRef;

  constructor(private supplementalPanelService: SupplementalPanelService) {
  }

  ngOnInit(): void {
  }

  showSupportPanel(content) {
    this.supportPanelRef = this.supplementalPanelService.showTemplate(content, {position: 'right'});
  }

  showSupportEvent() {
    this.supportPanelRef.hide();
  }
}
