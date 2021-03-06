import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const routes: Routes = [
  {path: 'users', component: UserListComponent},
  {path: 'createUser', component: CreateUserComponent},
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'updateUser/:id', component: UpdateUserComponent},
  {path: 'userDetails/:id', component: UserDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
