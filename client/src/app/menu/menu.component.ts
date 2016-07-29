import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import {MenuItem} from './index';
import {MdlDirective} from '../mdl/index';

@Component({
  moduleId: module.id,
  selector: 'menu',
  templateUrl: 'menu.component.html',
  directives: [
    MdlDirective,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {
  @Input() items: Observable<MenuItem[]>;

  menuItems: MenuItem[];

  constructor(private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.items.subscribe(menuItems => {
      this.menuItems = menuItems.filter(item => !item.isButton);
      this.cd.markForCheck();
    });
  }
}
