import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { CostsComponent } from './costs/costs.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { CostsDisplayComponent } from './costs-display/costs-display.component';
import { LogoutComponent } from './logout/logout.component';
import { CostSummaryComponent } from './cost-summary/cost-summary.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CostsComponent,
    DropdownComponent,
    CostsDisplayComponent,
    LogoutComponent,
    CostSummaryComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CollapseModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
