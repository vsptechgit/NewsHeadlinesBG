import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'business',
    pathMatch: 'full'
  },
  {path: 'business',
    loadChildren: './business/business.module#BusinessComponentModule'},

  { path: 'entertainment', loadChildren: './entertainment/entertainment.module#EntertainmentComponentModule' },
  { path: 'health', loadChildren: './health/health.module#HealthComponentModule' },
  { path: 'science', loadChildren: './science/science.module#ScienceComponentModule' },
  { path: 'sport', loadChildren: './sport/sport.module#SportComponentModule' },
  { path: 'technology', loadChildren: './technology/technology.module#TechnologyComponentModule' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
