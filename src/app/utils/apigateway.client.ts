import apigClientFactory from 'aws-api-gateway-client';
import { AuthenticationService } from '../authentication.service'; 
import { environment } from '../../environments/environment';

import { Injectable } from '@angular/core';

@Injectable()
export class ApiGatewayClient {

	constructor(private authenticationService : AuthenticationService) { }
	
	invoke(path, method = 'GET', body = null, params = null, extraparams = {}) {
		return new Promise((resolve, reject) => {
			this.createClient().then(function(client: any) {
				client.invokeApi(params, path, method, extraparams, body)
					.then(function(result) {
						resolve(result.data);
					})
					.catch(function(err) {
						reject(err);
					})
			})
		})

	}

	createClient() {
		return new Promise((resolve, reject) => {
			const sessionKeys = this.authenticationService.getClientInformation();

		  	const apigClient = apigClientFactory.newClient({
		  		invokeUrl: environment.apigatewayUrl,
		  		accessKey : sessionKeys.accessKeyId,
		   		secretKey: sessionKeys.secretAccessKey,
		    	sessionToken: sessionKeys.sessionToken,
		    	region: environment.region
		  	});


		  	resolve(apigClient);
		  	/**const params = {

		  	}

		  	const pathTemplate = "/costs/" + costId;
		  	const method = "GET";
		  	const additionalParams = {

		  	};

		  	const body = {

		  	};

		  	apigClient.invokeApi(params, pathTemplate, method, additionalParams, body)
		  		.then(function(result) {
		  			console.log(result);
		  			resolve(result.data);
		  		})
		  		.catch(function(error) {
		  			reject(error)
		  		});
		  	**/
		});

	}
}