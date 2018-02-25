import { Component, OnInit, PipeTransform, Pipe } from '@angular/core';
import { Router } from '@angular/router';
import { CostsService } from '../costs.service';
import { Cost } from '../cost';
import { KeysPipe } from '../pipes/keys.pipe';


@Component({
  selector: 'costs-display',
  templateUrl: './costs-display.component.html',
  styleUrls: ['./costs-display.component.css'],
  pipes: [KeysPipe]
})
export class CostsDisplayComponent implements OnInit {

  costs: Cost[];
  categories: object;
  shops: object;

  constructor(private router: Router, private costsService: CostsService) { }

  ngOnInit() {
  	const self = this;

  	this.costsService.getCosts().then(function(response) {
  		self.costs = response.costs;
      self.categories = response.categories;
      self.shops = response.shops;
  	});
  }

}