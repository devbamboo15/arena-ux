import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dropdowns-documentation',
  templateUrl: './dropdowns-documentation.component.html',
  styleUrls: ['./dropdowns-documentation.component.scss']
})
export class DropdownsDocumentationComponent implements OnInit {

  code1 = `
  <div class="btn-group" dropdown>
    <button dropdownToggle type="button" class="dropdown-toggle dropdown-ellipses"
            aria-controls="dropdown-basic">
      <i class="fas fa-ellipsis-v"></i>
    </button>
    <ul *dropdownMenu class="dropdown-menu dropdown-menu-right"
        role="menu" aria-labelledby="button-basic">
      <li role="menuitem"><a class="dropdown-item" href="#">Action</a></li>
      <li role="menuitem"><a class="dropdown-item" href="#">Another action</a></li>
      <li role="menuitem"><a class="dropdown-item" href="#">Something else here</a></li>
      <li class="divider dropdown-divider"></li>
      <li role="menuitem"><a class="dropdown-item" href="#">Separated link</a>
      </li>
    </ul>
  </div>
  `;

  code2 = `
  <div class="btn-group" dropdown>
    <button dropdownToggle type="button" class="btn btn-white dropdown-toggle"
            aria-controls="dropdown-basic">
      Card Dropdown
    </button>
    <div *dropdownMenu class="dropdown-menu dropdown-menu-card"
         role="menu" aria-labelledby="button-basic">
      <div class="card-header">
        <h4 class="card-header-title">
          Dropdown Card
        </h4>
      </div>
      <div class="card-body">
        <p class="card-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat recusandae rem autem impedit ad odio,
          enim tempore possimus non minus quod dignissimos ipsum eveniet odit, ratione molestiae, velit a dolorem!
        </p>
      </div>
    </div>
  </div>
  `;

  constructor() {
  }

  ngOnInit(): void {
  }

}
