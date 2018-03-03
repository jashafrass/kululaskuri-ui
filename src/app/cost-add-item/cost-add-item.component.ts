import { Component, OnInit, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';

@Component({
  selector: 'cost-add-item',
  templateUrl: './cost-add-item.component.html',
  styleUrls: ['./cost-add-item.component.css']
})
export class CostAddItemComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() costItem: any;

  constructor() { }

  ngOnInit() {
  }

}
