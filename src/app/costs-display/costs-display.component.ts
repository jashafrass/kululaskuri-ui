import { Component, OnInit, PipeTransform, Pipe } from '@angular/core';
import { Router } from '@angular/router';
import { CostsService } from '../costs.service';
import { Cost } from '../cost';


@Component({
  selector: 'costs-display',
  templateUrl: './costs-display.component.html',
  styleUrls: ['./costs-display.component.css']
})
export class CostsDisplayComponent implements OnInit {

  costs: any;
  categories: any;
  shops: any;

  pieChartData: any =  {
    chartType: 'PieChart',
    dataTable: [],
    options: {
      'title': 'Menot', 
      height: "100%",
      width: "100%",
      chartArea: {
          height: "100%",
          width: "100%"
      }

    },

  };

  shopPieChartData: any = {
    chartType: 'PieChart',
    dataTable: [],
    options: {
      'title': 'Menot', 
      height: "100%",
      width: "100%",
      chartArea: {
          height: "100%",
          width: "100%"
      }

    },
  }

  constructor(private router: Router, private costsService: CostsService) { }

  toggle(elementClass, event) {
    const self = this;
    const sibling = event.target.nextElementSibling;
    if(sibling) {

      if(sibling.classList.contains(elementClass)) {
        sibling.classList.contains('hide') ? self.togglecollapse(event.target, true) : self.togglecollapse(event.target, false); 
        sibling.classList.contains('hide') ? sibling.classList.remove('hide') : sibling.classList.add('hide');
      }
    }
  }

  togglecollapse(targetelement, minus) {
    let classes: any = ['glyphicon-plus', 'glyphicon-minus'];
    let index = 0;

    if(minus) {
      index = 1;
    }

    targetelement.classList.remove(classes[1 - index]);
    targetelement.classList.add(classes[index]);
    
  }

  calculateDataForPieChart(categories) {
    const chartData = [];

    chartData.push(['Menot', 'Kategorioittain'])

    categories.forEach(function(category) {
      chartData.push([category.name, category.amount]);
    });

    return chartData;
  }

  calculateShopDataForPieChart(shops) {
    const chartData = [];

    chartData.push(['Menot', 'Paikoittain'])

    Object.keys(shops).forEach(function(key) {
      chartData.push([key, shops[key]]);
    })

    return chartData;
  }

  ngOnInit() {
  	const self = this;

  	this.costsService.getCosts().then(function(response: any) {
  		self.costs = response.costs;
      self.categories = response.categories;
      self.shops = response.shops;

      self.pieChartData.dataTable = self.calculateDataForPieChart(self.categories.categories);
      self.shopPieChartData.dataTable = self.calculateShopDataForPieChart(self.shops);
  	});
  }
}