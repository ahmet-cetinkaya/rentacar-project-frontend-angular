import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { DynamicDto } from 'app/core/models/dynamicDto';
import { Filter } from 'app/core/models/filter';
import { ModelList } from 'app/shared/models/model';
import { ModelService } from 'app/shared/services/modelService/model.service';
import { Sort } from 'app/core/models/sort';

@Component({
  selector: 'app-models-list',
  templateUrl: './models-list.component.html',
  styleUrls: ['./models-list.component.scss']
})
export class ModelListComponent implements OnInit {
  modelList: ModelList[] = [];
  dataLoaded: boolean = false;

  @Input() modelFilterText: string = '';
  @Input() class: string = '';

  filter!: Filter;
  sort!: Sort[];

  constructor(private modelService: ModelService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['filter'] || params['sort']) {
        if (params['filter']) this.filter = JSON.parse(params['filter']);
        if (params['sort']) this.sort = JSON.parse(params['sort']);
        this.getModelListByDynamic();
        return;
      }

      this.getModelList();
    });

    this.getModelList();
  }

  getModelList() {
    this.modelService.getList(0, 10).subscribe(response => {
      this.modelList = response.items;
      this.dataLoaded = true;
    });
  }

  getModelListByDynamic() {
    this.dataLoaded = false;
    const dynamicDto: DynamicDto = {
      filter: this.filter,
      sort: this.sort
    };

    this.modelService.getListByDynamic(0, 10, dynamicDto).subscribe(response => {
      this.modelList = response.items;
      this.dataLoaded = true;
    });
  }
}
