import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent }      from './login/login.component';
import { CostsComponent }      from './costs/costs.component';
import { CostSummaryComponent }      from './cost-summary/cost-summary.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: 'costs', component: CostsComponent, canActivate : [AuthGuard]},
  { path: 'cost/:id', component: CostSummaryComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}