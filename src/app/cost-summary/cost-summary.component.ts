import { Component, OnInit } from '@angular/core';
import { CostsService } from '../costs.service';
import { Cost } from '../cost';
import { ActivatedRoute, Router } from '@angular/router'
@Component({
  selector: 'app-cost-summary',
  templateUrl: './cost-summary.component.html',
  styleUrls: ['./cost-summary.component.css']
})
export class CostSummaryComponent implements OnInit {


  cost: any;
  id: string;

  constructor(private costsService: CostsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  	const self = this;

  	 this.route.params.subscribe( params => {
        this.id = params['id'];

        this.costsService.getCost(this.id).then(function(cost) {
        	self.cost = cost;
        });
     });
  }

  delete() {
    const self = this;

    const params = {
      Timeplaced : this.cost.Timeplaced,
      CostsId : this.cost.CostsId
    }

    this.costsService.deleteCost(params).then(function(response) {
      self.router.navigate(['/costs']);
    })
  }

}
