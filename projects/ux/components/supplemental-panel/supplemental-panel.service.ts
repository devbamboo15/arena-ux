import {
  ApplicationRef,
  ComponentFactoryResolver, ComponentRef, EmbeddedViewRef,
  Injectable,
  Injector,
  TemplateRef,
} from '@angular/core';
import {SupplementalPanelComponent} from './supplemental-panel.component';
import {supplementalConfigDefaults, SupplementalPanelOptions} from './supplemental-panel.options';
import {SupplementalPanelRef} from './supplemental-panel-ref';
import {Subject} from 'rxjs';

@Injectable()
export class SupplementalPanelService {

  panels: ComponentRef<any>[] = [];
  panelRefs: SupplementalPanelRef[] | any = [];

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private applicationRef: ApplicationRef,
              private injector: Injector) {
  }

  /**
   * Show Supplemental Panel with TemplateRef content
   *
   * @param content TemplateRef of panel content
   * @param config optional param of supplemental panel
   */
  public showTemplate(content: TemplateRef<any>, config?: SupplementalPanelOptions): SupplementalPanelRef {
    const factory = this.componentFactoryResolver
      .resolveComponentFactory(SupplementalPanelComponent);
    const component = factory
      .create(this.injector);

    config = config ? config : {...config, ...supplementalConfigDefaults};

    component.instance.content = content;

    const id = this.panels.push(component) - 1;
    config.id = id;

    component.instance.config = config;

    const ref = {
      config,
      id,
      content,
      onHide: new Subject<number>(),
      onShow: new Subject<number>(),
      hide: () => component.instance.hide(),
    };

    const domElem = (component.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    document.querySelector('aux-app').appendChild(domElem);
    this.applicationRef.attachView(component.hostView);

    ref.onShow.next(id);
    this.panelRefs[id] = ref;

    return ref;
  }

  /**
   * Show Supplemental Panel with component content
   *
   * @param content Component class
   * @param config optional param of supplemental panel
   */
  public showComponent(content: any, config?: SupplementalPanelOptions): SupplementalPanelRef {
    const factory = this.componentFactoryResolver
      .resolveComponentFactory(SupplementalPanelComponent);
    const component = factory
      .create(this.injector);

    config = config ? config : {...config, ...supplementalConfigDefaults};

    const id = this.panels.push(component) - 1;
    config.id = id;

    component.instance.config = config;

    const ref = {
      config,
      id,
      content,
      onHide: new Subject<number>(),
      onShow: new Subject<number>(),
      hide: () => component.instance.hide(),
    };

    const innerFactory = this.componentFactoryResolver
      .resolveComponentFactory(content);
    const innerComponent: ComponentRef<any> = innerFactory
      .create(this.injector);
    const innerDomElem = (innerComponent.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    innerComponent.instance.panelRef = ref;

    const domElem = (component.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    domElem.querySelector('.supplemental-panel').appendChild(innerDomElem);

    document.querySelector('aux-app').appendChild(domElem);
    this.applicationRef.attachView(component.hostView);
    this.applicationRef.attachView(innerComponent.hostView);

    ref.onShow.next(id);
    this.panelRefs[id] = ref;

    return ref;
  }

  hide(id: number) {
    const component = this.panels[id];
    const ref = this.panelRefs[id];
    this.applicationRef.detachView(component.hostView);
    component.destroy();

    ref.onHide.next(id);
  }
}
