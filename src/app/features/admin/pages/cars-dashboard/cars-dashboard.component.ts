import { Component, OnInit } from '@angular/core';
import { ListResponseModel } from 'app/core/models/listResponseModel';
import { CarListModel } from 'app/shared/models/car';
import { CarService } from 'app/shared/services/carService/car.service';

@Component({
  templateUrl: './cars-dashboard.component.html',
  styleUrls: ['./cars-dashboard.component.scss']
})
export class CarsDashboardComponent implements OnInit {
  carListModel: ListResponseModel<CarListModel> = {
    index: 0,
    size: 10,
    items: []
  };
  dataLoaded: boolean = false;

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.getCarList();
  }

  getCarList() {
    this.carService.getList(this.carListModel.index, this.carListModel.size).subscribe(response => {
      this.carListModel = response;
      this.dataLoaded = true;
    });
  }
}
