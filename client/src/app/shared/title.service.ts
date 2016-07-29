import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';

import { Title } from './index';

@Injectable()
export class TitleService {
  private title = new BehaviorSubject<Title>({
    title: 'hello',
    subTitle: 'world',
  });

  get() {
    return this.title;
  }

  set(title: Title) {
    this.title.next(title);
  }
}
