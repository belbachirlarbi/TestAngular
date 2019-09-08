import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './Admin/customers/customers.component';
import { EmployorsComponent } from './Admin/employors/employors.component';
import { ManagerComponent } from './Admin/manager/manager.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  {path:'Admin',component:AdminComponent},
  {path:'Customers',component:CustomersComponent},
  {path:'Employors',component:EmployorsComponent},
  {path:'Manager',component:ManagerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
