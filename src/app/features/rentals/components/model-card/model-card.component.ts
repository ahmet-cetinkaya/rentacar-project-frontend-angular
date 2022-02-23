import { Component, Input, OnInit } from '@angular/core';
import { ModelList } from 'app/shared/models/model';

@Component({
  selector: 'app-model-card',
  templateUrl: './model-card.component.html',
  styleUrls: ['./model-card.component.scss']
})
export class ModelCardComponent implements OnInit {
  @Input() modelListModel!: ModelList;

  constructor() {}

  ngOnInit(): void {}
}
