import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as AWS from 'aws-sdk/global';
import { environment } from '../environments/environment';

@Injectable()
export class AuthenticationService {

  constructor(private router: Router) { }

  authenticateWithGoogle(user) {
  	return new Promise((resolve, reject) => {
	  	const authResult = user.getAuthResponse();
	  	const self = this;

	  	console.log(environment);

	  	AWS.config.region = environment.region; // Region
		
		const credentials = new AWS.CognitoIdentityCredentials({
		    IdentityPoolId: environment.identityPoolId,
			Logins : {
				'accounts.google.com' : authResult['id_token']
			}
		});

		credentials.get(function() {

			localStorage.accessKeyId = credentials.accessKeyId;
			localStorage.secretAccessKey = credentials.secretAccessKey;
			localStorage.sessionToken = credentials.sessionToken;

			resolve({ success : true });
			//self.router.navigate(['/costs']);
		});

	});
  }

  isAuthenticated() {
  	if(localStorage.accessKeyId && localStorage.secretAccessKey && localStorage.sessionToken) {
  		return true;
  	} else {
  		return false;
  	}
  }

  logout() {
  	localStorage.removeItem('accessKeyId');
  	localStorage.removeItem('secretAccessKey');
  	localStorage.removeItem('sessionToken');

  	this.router.navigate(['/login']);
  }

  getClientInformation() {
  	const keys = {
  		accessKeyId: localStorage.accessKeyId,
  		secretAccessKey: localStorage.secretAccessKey,
  		sessionToken: localStorage.sessionToken
  	}

  	return keys;
  }
}
