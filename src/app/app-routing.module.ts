import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import { FavouriteComponent } from './favourite/favourite.component';

const routes: Routes = [
  {path :'details', component: DetailsComponent},
  {path :'dashboard', component: DashboardComponent},
  {path :'favourite', component: FavouriteComponent},
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
