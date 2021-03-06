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
      9, 13
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

  hasCategory(index) {
    const category = (<HTMLInputElement>document.getElementsByClassName("category-input")[index]).value.trim();

    return category.trim().length > 0;
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

  addNewTag(index) {
    let category = (<HTMLInputElement>document.getElementsByClassName("category-input")[index]).value.trim();

    if(category != "") {
      this.addTag(category, index);
      this.form.get('Items').value[index].Category = "";
      (<HTMLInputElement>document.getElementsByClassName("category-input")[index]).value = "";
    }
  }

  checkcategoryinput(event, index) {
    const targetValue = event.target.value.trim();

    if(targetValue != "" && (this.categoryTagEventCodes.indexOf(event.keyCode) > -1 || this.categoryTagEventCodes.indexOf(event.charCode) > -1)) {
      event.preventDefault();
      this.addTag(targetValue, index);
      this.form.get('Items').value[index].Category = "";
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
      self.errorMessage = "Et voi syöttää tyhjiä tietoja! >:(";
      return;
    }

    if(self.form.value.Items.length == "") {
      self.errorMessage = "Et voi lisätä tapahtumaa ilman kulueriä";
      return;
    }

    this.form.value.Items.forEach(function(item, index) {
      if(self.categoryTags[index] == undefined || self.categoryTags[index].length == 0 || isNaN(item.Amount) || item.Amount == 0) {
        self.errorMessage = "Tarkista kategoria/määrä";
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
