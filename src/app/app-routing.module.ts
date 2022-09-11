import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './pages/add/add.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotificationComponent } from './pages/notification/notification.component';
import { SearchComponent } from './pages/search/search.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user', component: UserComponent },
  { path: 'search', component: SearchComponent },
  { path: 'notification', component: NotificationComponent },
  { path: 'add', component: AddComponent },

  //defaults
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
