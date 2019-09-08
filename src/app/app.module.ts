import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { ManagerComponent } from './Admin/manager/manager.component';
import { EmployorsComponent } from './Admin/employors/employors.component';
import { CustomersComponent } from './Admin/customers/customers.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './Admin/nav-bar/nav-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ManagerComponent,
    EmployorsComponent,
    CustomersComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
