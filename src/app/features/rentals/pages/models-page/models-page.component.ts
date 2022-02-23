import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './models-page.component.html',
  styleUrls: ['./models-page.component.scss']
})
export class ModelsPageComponent implements OnInit {
  modelFilterText: string = '';

  constructor() {}

  ngOnInit(): void {}

  receiveCarFilterText($event: any) {
    this.modelFilterText = $event;
  }
}
