import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
  TemplateRef
} from '@angular/core';
import {SupplementalPanelService} from './supplemental-panel.service';
import {SupplementalPanelOptions} from './supplemental-panel.options';

@Component({
  selector: 'aux-supplemental-panel',
  templateUrl: './supplemental-panel.component.html',
  styleUrls: ['./supplemental-panel.component.scss'],
})
export class SupplementalPanelComponent implements OnInit, AfterViewInit {

  @HostBinding('class')
  styles: string;

  config: SupplementalPanelOptions;
  content: TemplateRef<any>;

  constructor(private eRef: ElementRef,
              private supplementalPanelService: SupplementalPanelService,
              private renderer: Renderer2) {
  }

  ngOnInit() {
    this.styles = `${this.config.position} id-${this.config.id}`;

    this.config.width = this.config.width ? this.config.width : 500;

    this.adjustSize();
  }

  ngAfterViewInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  adjustSize(event?) {
    const panel = this.eRef.nativeElement.querySelector('.supplemental-panel') as HTMLElement;

    if (window.innerWidth <= this.config.width) {
      panel.style.width = `100%`;
    } else {
      panel.style.width = `${this.config.width}px`;
    }
  }

  @HostListener('window:keydown.esc', ['$event'])
  onEsc(event: KeyboardEvent): void {
    if (this.config.ignoreEscClick) {
      return;
    }

    if (event.key === 'Escape') {
      event.preventDefault();
    }

    this.hide();
  }

  @HostListener('document:click', ['$event'])
  clickOut() {
    if (this.config.ignoreBackDropClick) {
      return;
    }
  }

  hide() {
    const panel = this.eRef.nativeElement.querySelector('.supplemental-panel') as HTMLElement;
    const backdrop = this.eRef.nativeElement.querySelector('.supplemental-panel-backdrop') as HTMLElement;

    const anim = this.renderer.listen(panel, 'animationend', (event) => {
      if (event.animationName === 'leftOut' || event.animationName === 'rightOut') {
        this.supplementalPanelService.hide(this.config.id);
        anim();
      }
    });

    panel.style.animation = `${this.config.position}Out 0.3s`;
    backdrop.style.animation = `backdropOut 0.3s`;
  }

}
