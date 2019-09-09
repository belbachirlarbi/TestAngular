import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomersComponent } from './Admin/customers/customers.component';
import { EmployorsComponent } from './Admin/employors/employors.component';
import { ManagerComponent } from './Admin/manager/manager.component';
import { AdminComponent } from './admin/admin.component';
const routes = [
    { path: 'Admin', component: AdminComponent },
    { path: 'Customers', component: CustomersComponent },
    { path: 'Employors', component: EmployorsComponent },
    { path: 'Manager', component: ManagerComponent },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map