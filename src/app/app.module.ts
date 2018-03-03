import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';


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
import { KeysPipe } from './pipes/keys.pipe';
import { CostAddComponent } from './cost-add/cost-add.component';
import { CostAddItemComponent } from './cost-add-item/cost-add-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CostsComponent,
    DropdownComponent,
    CostsDisplayComponent,
    LogoutComponent,
    CostSummaryComponent,
    HeaderComponent,
    KeysPipe,
    CostAddComponent,
    CostAddItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule ,
    CollapseModule.forRoot()
  ],
  providers: [CostsService, AuthenticationService, ApiGatewayClient, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
