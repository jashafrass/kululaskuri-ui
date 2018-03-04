import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import * as gapi from 'gapi-client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private router: Router) { 
  	// constructor for component, using dependency injection with the service
  }

  login() {
    this.router.navigate(['/costs']);
  }

  attachSignin(element) {
  	const authenticator = gapi.auth2.getAuthInstance();

  	const self = this;
  	
  	authenticator.attachClickHandler(element, {},
        function(googleUser) {
        	self.authenticationService.authenticateWithGoogle(googleUser).then(function() {
            document.getElementById("login").click();
          });
    	}, function(error) {
        
    	}
    );

  }

  ngOnInit() {
  	const self = this;

  	gapi.load('client:auth2', function() {

		  gapi.client.init({
	  		client_id : '966654835132-dlusuopab3b97lmddlsd52qsiafouulc.apps.googleusercontent.com',
	  		scope : 'profile email'
	  	}).then(function() {
	  		self.attachSignin(document.getElementById('sign-in'));
	  	});
  	});


  }

}
