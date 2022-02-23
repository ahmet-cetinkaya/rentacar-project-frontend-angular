import { Component, OnInit } from '@angular/core';
import { ListResponseModel } from 'app/core/models/listResponseModel';
import { CarDamageListModel } from 'app/shared/models/carDamage';
import { CarDamagesService } from '../../services/car-damages.service';

@Component({
  templateUrl: './car-damages-dashboard.component.html',
  styleUrls: ['./car-damages-dashboard.component.scss']
})
export class CarDamagesDashboardComponent implements OnInit {
  carDamageListModel: ListResponseModel<CarDamageListModel> = {
    index: 0,
    size: 10,
    items: []
  };

  constructor(private carDamagesService: CarDamagesService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.carDamagesService
      .getList(this.carDamageListModel.index, this.carDamageListModel.size)
      .subscribe(response => (this.carDamageListModel = response));
  }
}
