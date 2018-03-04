import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { CostsService } from '../costs.service';

@Component({
  selector: 'logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private costsService: CostsService, private authenticationService: AuthenticationService) { }

  logout() {
  	this.costsService.clearCache();
  	this.authenticationService.logout();
  }

  ngOnInit() {
  }

}
