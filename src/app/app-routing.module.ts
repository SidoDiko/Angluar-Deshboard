import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccessCComponent } from './pages/access-c/access-c.component';

import { GroupsComponent } from './pages/groups/groups.component';

import { SecurComponent } from './pages/secur/secur.component';

import { TaskMComponent } from './pages/task-m/task-m.component';

import { UserMComponent } from './pages/user-m/user-m.component';

import{TarageComponent} from './pages/tarage/tarage.component';







const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '',
  },
  {
    path: 'user-m',
    component: UserMComponent ,
  },
  {
    path: 'access-c',
    component: AccessCComponent,
  },
  {
    path: 'groups',
    component:  GroupsComponent,
  },
  {
    path: 'secur',
    component: SecurComponent,
  },

  {
    path: 'task-m',
    component:TaskMComponent ,
  },

  {
    path: 'tarage',
    component:TarageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
