import { Routes } from '@angular/router';

import { HomeOneComponent } from './home-one.component';
import { AllSectionsComponent } from './all-sections.component';
import { DemoComponent } from './demo/demo.component';

export const HomeRoutes: Routes = [
  { path: '', component: HomeOneComponent },
  { path: 'all', component: AllSectionsComponent },
  { path: 'demos', component: DemoComponent }
];