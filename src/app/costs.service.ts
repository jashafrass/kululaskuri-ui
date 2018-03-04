import { Injectable } from '@angular/core';
import apigClientFactory from 'aws-api-gateway-client';
import { ApiGatewayClient } from './utils/apigateway.client'
import { Cost } from './cost';

@Injectable()
export class CostsService {
  costs: any;

  constructor(private gatewayClient:ApiGatewayClient) {

  }

  clearCache() {
    this.costs = null
  }

  getCost(costId) {
  	return new Promise((resolve, reject) => {
  		if(!this.costs) {
	  		this.gatewayClient.invoke('/costs/' + costId)
	  			.then(function(cost) {
	  				resolve(cost);
	  			})
	  			.catch(function(err) {
	  				reject(err);
	  			})
	  	} else {
	  		for(let item of this.costs.costs) {
	  			if(item.CostsId == costId) {
	  				resolve(item);
	  			}
	  		}
	  	}
 
  	});
  }

  getCosts() {	
  	return new Promise((resolve, reject) => {
  		const self = this;

  		if(!this.costs) {
	  		this.gatewayClient.invoke('/costs')
	  			.then(function(result) {
	  				self.costs = result;
	  				resolve(result)
	  			})
	  			.catch(function(err) {
	  				reject(err);
	  			})
	  	} else {
	  		resolve(this.costs);
	  	}
  	});
  }

  addCost(cost) {
      return new Promise((resolve, reject) => {
        const self = this;

        this.gatewayClient.invoke('/costs', 'POST', cost)
          .then(function(result) {
            self.clearCache();
            resolve(result);
          })
          .catch(function(err){
            reject(err);
          })
      })
    }

  deleteCost(params) {
     return new Promise((resolve, reject) => {
       const self = this;

       this.gatewayClient.invoke('/costs/' + params.CostsId, 'DELETE', null, null, { queryParams : { ts : params.Timeplaced }})
         .then(function(result) {
           self.clearCache();
           resolve(result)
         })
         .catch(function(err){
           reject(err);
         })
     })
  }
}
