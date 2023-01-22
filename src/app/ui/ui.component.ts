import { Component, OnInit } from '@angular/core';
import { area } from '../area_cir/area';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {

  constructor() { }

  r : number = 0;
  result = 0;

  ngOnInit(): void {
  }

  area(){
    let total = 0;
    total = area(this.r);
    this.result = total;
  }

}
