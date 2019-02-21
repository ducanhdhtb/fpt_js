import { Routes, RouterModule  } from '@angular/router';
import { PeopleListComponentComponent } from './people-list-component/people-list-component.component';

// Route config let's you map routes to components
const routes: Routes = [
  // map '/persons' to the people list component
  {
    path: 'persons',
    component: PeopleListComponentComponent,
  },
  // map '/' to '/persons' as our default route
  {
    path: '',
    redirectTo: '/persons',
    pathMatch: 'full'
  },
];


@NgModule({
  imports: [
      RouterModule.forRoot(routes),
      CommonModule
  ],
  declarations: [
    PeopleListComponentComponent,
  ],
  exports: [RouterModule]
})

export const routing = RouterModule.forRoot(routes);
