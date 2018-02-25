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
import { CostsService } from './costs.service';
import { AuthenticationService } from './authentication.service';
import { ApiGatewayClient} from './utils/apigateway.client';
import { AuthGuard } from './auth/auth.guard';


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
  providers: [CostsService, AuthenticationService, ApiGatewayClient, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
