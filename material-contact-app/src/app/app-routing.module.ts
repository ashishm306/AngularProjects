import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { EditcontactComponent } from './editcontact/editcontact.component';
import { SecurityGuard } from './guards/security.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: ContactlistComponent, canActivate: [SecurityGuard] },
  { path: 'add', component: AddcontactComponent, canActivate: [SecurityGuard] },
  { path: 'edit/:id', component: EditcontactComponent, canActivate: [SecurityGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
