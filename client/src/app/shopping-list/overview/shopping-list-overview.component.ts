import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MdlDirective } from '../../mdl/index';

@Component({
  moduleId: module.id,
  selector: 'shopping-list-overview',
  templateUrl: 'shopping-list-overview.component.html',
  styleUrls: [
    '../../shared/button-add.css',
  ],
  directives: [
    ROUTER_DIRECTIVES,
    MdlDirective,
  ],
})
export class ShoppingListOverviewComponent implements OnInit {
  constructor() {
    // TODO-1: Evtl. benötigte Dienste über DI holen
   }

  ngOnInit() {
    // TODO-1: Alle Listen besorgen und in der View zur Anzeige bringen.
  }
}
