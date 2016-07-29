import { provideRouter, RouterConfig } from '@angular/router';

import {shoppingListRoutes} from './shopping-list/index';
import {NotFoundComponent} from './not-found.component';

const routes: RouterConfig = [
  ...shoppingListRoutes,
  { path: '**', component: NotFoundComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];
