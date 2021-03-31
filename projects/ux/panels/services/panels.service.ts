import {Injectable} from '@angular/core';
import {NavMenuItem} from '../components';

@Injectable()
export class PanelsService {


  public externalItems: NavMenuItem[] = [
    {
      label: 'Merch', tooltip: true, path: '/merch', children: [
        {label: 'Apparel', target: '_blank', path: `https://${this.prefix}apparel.arena.com`},
        {label: 'Embroidery', target: '_blank', path: `https://${this.prefix}embroidery.arena.com`},
        {label: 'Face Coverings', target: '_blank', path: `https://${this.prefix}facecoverings.arena.com`},
        {label: 'Merchandising', target: '_blank', path: `https://${this.prefix}merchandising.arena.com`},
        {label: 'Prints', target: '_blank', path: `https://${this.prefix}prints.arena.com`},
        {label: 'Screen Burning', target: '_blank', path: `https://${this.prefix}screenburning.arena.com`},
        {label: 'Sewing', target: '_blank', path: `https://${this.prefix}sewing.arena.com`},
      ],
    },
    {
      label: 'Music', tooltip: true, path: '/music', children: [
        {label: 'Arena Music', target: '_blank', path: `https://${this.prefix}soundblock.arena.com`},
        {label: 'Soundblock', target: '_blank', path: `https://${this.prefix}music.arena.com`}
      ],
    },
  ];

  public items: NavMenuItem[] = [];


  get prefix() {
    const url = window.location.href;
    if (url.indexOf('localhost') !== -1) {
      return 'develop.';
    }
    if (url.indexOf('develop') !== -1) {
      return 'develop.';
    }
    if (url.indexOf('staging') !== -1) {
      return 'staging.';
    }
    return '';
  }
}
