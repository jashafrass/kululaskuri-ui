import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CostsService } from '../costs.service';
import { Cost } from '../cost';


@Component({
  selector: 'costs-display',
  templateUrl: './costs-display.component.html',
  styleUrls: ['./costs-display.component.css']
})
export class CostsDisplayComponent implements OnInit {

  costs: Cost[];

  constructor(private router: Router, private costsService: CostsService) { }

  ngOnInit() {
  	const self = this;

  	this.costsService.getCosts().then(function(response) {
  		self.costs = response.costs;
  	});
  }

}
