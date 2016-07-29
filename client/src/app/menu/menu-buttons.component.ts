import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NgFor } from '@angular/common';
import { Observable } from 'rxjs/Rx';

import {MenuItem} from './index';
import {MdlDirective} from '../mdl/index';

@Component({
  moduleId: module.id,
  selector: 'menu-buttons',
  templateUrl: 'menu-buttons.component.html',
  directives: [
    NgFor,
    MdlDirective,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuButtonsComponent implements OnInit {
  @Input() items: Observable<MenuItem[]>;

  more: MenuItem[];
  buttons: MenuItem[];

  constructor(private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.items.subscribe(menuItems => {
      this.buttons = menuItems.filter(item => item.isButton);
      this.more = menuItems.filter(item => !item.isButton);
      this.cd.markForCheck();
    });
  }

}
