import {SupplementalPanelOptions} from './supplemental-panel.options';
import {Subject} from 'rxjs';

export class SupplementalPanelRef<T = any> {
  id: number;
  content: T | null;
  config?: SupplementalPanelOptions;
  hide: () => void = Function;
  onHide: Subject<number>;
  onShow: Subject<number>;
}
