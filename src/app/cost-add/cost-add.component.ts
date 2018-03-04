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

  categoryTags : any;
  categoryTagEventCodes: any;
  errorMessage: string;

  constructor(private costsService: CostsService, @Inject(FormBuilder) fb: FormBuilder, private router: Router) {
    this.fb = fb;
    this.form = fb.group({
      Shop : '',
      Items : fb.array([

      ])
    })

    this.categoryTagEventCodes = [
      9, 13, 32
    ];
  }

  numericInput(value) {
    return parseFloat(value);
  }

  ngOnInit() {
    this.categoryTags = [];
  }

  removeItem(index) {
    const Items: any = this.form.get('Items'); 
    Items.removeAt(index);
    this.categoryTags.splice(index, 1);
  }

  get items() { 
    return <FormArray>this.form.get('Items'); 
  }

  addTag(tag, i) {
    let tagArray = this.categoryTags[i];
  
    if(tagArray == null) {
      this.categoryTags[i] = [];
    }

    this.categoryTags[i].push(tag);
  }
 
  addItem() {
    const items :any = this.form.get('Items');

    items.push(this.fb.group({
      Category : '',
      Amount : 0
    }));
  }

  submit(e) {
    e.preventDefault();
    return false;
  }

  checkcategoryinput(event, index) {
    const targetValue = event.target.value.trim();

    if(targetValue != "" && (this.categoryTagEventCodes.indexOf(event.keyCode) > -1 || this.categoryTagEventCodes.indexOf(event.charCode) > -1)) {
      event.preventDefault();
      this.addTag(targetValue, index);
      event.target.value = "";
    } else if(event.keyCode == 8 && targetValue == "") {
      this.removelasttag(index);
    }
  }

  removeTag(categoryindex, tagindex) {
    const categoryTags = this.categoryTags[categoryindex];

    categoryTags.length = tagindex;
  }

  removelasttag(index) {
    const categoryTags = this.categoryTags[index];
    categoryTags.splice(-1, 1);
  }

  save() {
    const self = this;
    let error = false;

    if(self.form.value.Shop.trim() == "") {
      self.errorMessage = "Kauppa ei voi olla tyhjänä.";
      return;
    }

    if(self.form.value.Items.length == "") {
      self.errorMessage = "Et voi lisätä tapahtumaa ilman kulueriä";
      return;
    }

    this.form.value.Items.forEach(function(item, index) {
      if(self.categoryTags[index] == undefined || self.categoryTags[index].length == 0 || isNaN(item.Amount) || item.Amount == 0) {
        self.errorMessage = "Kategoria tai määrä eivät voi olla oletusarvoja tai tyhjiä";
        error = true;
        return;
      }
      item.Amount = parseFloat(item.Amount);
      item.Category = self.categoryTags[index].join('/');
    });

    if(error) {
      return;
    }

    this.costsService.addCost(this.form.value).then(function(response: any) {
      self.router.navigate(['/costs']);
    });
  }

}
