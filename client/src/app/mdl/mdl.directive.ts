import {Directive, AfterViewInit} from '@angular/core';
declare var componentHandler: any;

@Directive({
  selector: '[mdl]'
})
export class MdlDirective implements AfterViewInit {
  ngAfterViewInit() {
    componentHandler.upgradeAllRegistered();
  }
}
