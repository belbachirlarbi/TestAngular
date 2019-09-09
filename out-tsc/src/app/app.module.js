import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { ManagerComponent } from './Admin/manager/manager.component';
import { EmployorsComponent } from './Admin/employors/employors.component';
import { CustomersComponent } from './Admin/customers/customers.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent,
            AdminComponent,
            ManagerComponent,
            EmployorsComponent,
            CustomersComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            NgbModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map