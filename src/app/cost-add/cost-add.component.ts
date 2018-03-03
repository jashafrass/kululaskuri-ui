import { Component, OnInit, Input, Inject } from '@angular/core';
import { Cost } from '../cost';
import { CostItem } from '../cost.item';
import { CostsService } from '../costs.service';

import {FormArray, FormControl, FormGroup, FormGroupName, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cost-add',
  templateUrl: './cost-add.component.html',
  styleUrls: ['./cost-add.component.css']
})
export class CostAddComponent implements OnInit {
  form: FormGroup;
  fb : FormBuilder;

  constructor(private costsService: CostsService, @Inject(FormBuilder) fb: FormBuilder, private router: Router) {
    this.fb = fb;
    this.form = fb.group({
      Shop : '',
      Items : fb.array([

      ])
    })
  }

  numericInput(value) {
    return parseFloat(value);
  }

  ngOnInit() {
  }

  removeItem(index) {
    const Items: any = this.form.get('Items'); 
    Items.removeAt(index);
  }

  get items() { 
    return <FormArray>this.form.get('Items'); 
  }
 
  addItem() {
    const items :any = this.form.get('Items');

    items.push(this.fb.group({
      Category : '',
      Amount : 0,
    }));
  }

  save() {
    const self = this;

    this.form.value.Items.forEach(function(item) {
      item.Amount = parseFloat(item.Amount);
    });

    this.costsService.addCost(this.form.value).then(function(response: any) {
      self.router.navigate(['/costs']);
    });
  }

}
