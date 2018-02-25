import { Component, OnInit } from '@angular/core';
import { CostsService } from '../costs.service';
import { Cost } from '../cost';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-cost-summary',
  templateUrl: './cost-summary.component.html',
  styleUrls: ['./cost-summary.component.css']
})
export class CostSummaryComponent implements OnInit {


  cost: Cost;
  id: string;

  constructor(private costsService: CostsService, private route: ActivatedRoute) { }

  ngOnInit() {
  	const self = this;

  	 this.route.params.subscribe( params => {
        this.id = params['id'];

        this.costsService.getCost(this.id).then(function(cost) {
        	self.cost = cost;
        });
     });
  }

}
