import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-avatars-documentation',
  templateUrl: './avatars-documentation.component.html',
  styleUrls: ['./avatars-documentation.component.scss']
})
export class AvatarsDocumentationComponent implements OnInit {

  code1 = `
  <div class="avatar avatar-xxl">
    <img src="https://cloud.develop.account.arena.com/assets/static/avatar_v2.jpg" alt="..." class="avatar-img rounded-circle">
  </div>

  <div class="avatar avatar-xl">
    <img src="https://cloud.develop.account.arena.com/assets/static/avatar_v2.jpg" alt="..." class="avatar-img rounded-circle">
  </div>

  <div class="avatar avatar-lg">
    <img src="https://cloud.develop.account.arena.com/assets/static/avatar_v2.jpg" alt="..." class="avatar-img rounded-circle">
  </div>

  <div class="avatar">
    <img src="https://cloud.develop.account.arena.com/assets/static/avatar_v2.jpg" alt="..." class="avatar-img rounded-circle">
  </div>

  <div class="avatar avatar-sm">
    <img src="https://cloud.develop.account.arena.com/assets/static/avatar_v2.jpg" alt="..." class="avatar-img rounded-circle">
  </div>

  <div class="avatar avatar-xs">
    <img src="https://cloud.develop.account.arena.com/assets/static/avatar_v2.jpg" alt="..." class="avatar-img rounded-circle">
  </div>
  `;

  code2 = `
  <div class="avatar avatar-online">
    <img src="https://cloud.develop.account.arena.com/assets/static/avatar_v2.jpg" alt="..." class="avatar-img rounded-circle">
  </div>

  <div class="avatar avatar-offline">
    <img src="https://cloud.develop.account.arena.com/assets/static/avatar_v2.jpg" alt="..." class="avatar-img rounded-circle">
  </div>
  `;

  code3 = `
  <div class="avatar">
    <img src="https://cloud.develop.account.arena.com/assets/static/avatar_v2.jpg" alt="..." class="avatar-img rounded">
  </div>

  <div class="avatar">
    <img src="https://cloud.develop.account.arena.com/assets/static/avatar_v2.jpg" alt="..." class="avatar-img rounded-circle">
  </div>
  `;

  code4 = `
  <div class="avatar avatar-lg avatar-4by3">
    <img src="https://cloud.develop.account.arena.com/assets/static/avatar_v2.jpg" alt="..." class="avatar-img rounded">
  </div>
  `;

  code5 = `
  <div class="avatar avatar-xxl">
    <span class="avatar-title rounded-circle">CF</span>
  </div>

  <div class="avatar avatar-xl">
    <span class="avatar-title rounded-circle">CF</span>
  </div>

  <div class="avatar avatar-lg">
    <span class="avatar-title rounded-circle">CF</span>
  </div>

  <div class="avatar">
    <span class="avatar-title rounded-circle">CF</span>
  </div>

  <div class="avatar avatar-sm">
    <span class="avatar-title rounded-circle">CF</span>
  </div>

  <div class="avatar avatar-xs">
    <span class="avatar-title rounded-circle">CF</span>
  </div>
  `;

  code6 = `
  <div class="avatar-group">
    <div class="avatar">
      <img src="https://cloud.develop.account.arena.com/assets/static/avatar_v2.jpg" alt="..." class="avatar-img rounded-circle">
    </div>
    <div class="avatar">
      <img src="https://cloud.develop.account.arena.com/assets/static/avatar_v2.jpg" alt="..." class="avatar-img rounded-circle">
    </div>
    <div class="avatar">
      <img src="https://cloud.develop.account.arena.com/assets/static/avatar_v2.jpg" alt="..." class="avatar-img rounded-circle">
    </div>
    <div class="avatar">
      <span class="avatar-title rounded-circle">CF</span>
    </div>
  </div>
  `;

  constructor() {
  }

  ngOnInit(): void {
  }

}
