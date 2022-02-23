import { Component, OnInit } from '@angular/core';
import { ListResponseModel } from 'app/core/models/listResponseModel';
import { Fuel } from 'app/shared/models/fuel';
import { FuelService } from 'app/shared/services/fuelService/fuel.service';

@Component({
  selector: 'app-fuels-dashboard',
  templateUrl: './fuels-dashboard.component.html',
  styleUrls: ['./fuels-dashboard.component.scss']
})
export class FuelsDashboardComponent implements OnInit {
  fuelListModel: ListResponseModel<Fuel> = {
    index: 0,
    size: 10,
    items: []
  };

  constructor(private fuelService: FuelService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.fuelService
      .getList(this.fuelListModel.index, this.fuelListModel.size)
      .subscribe(response => (this.fuelListModel = response));
  }
}
