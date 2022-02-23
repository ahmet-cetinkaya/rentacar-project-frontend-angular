import { Component, OnInit } from '@angular/core';
import { ListResponseModel } from 'app/core/models/listResponseModel';
import { City } from 'app/shared/enums/city';
import { RentalBranch } from 'app/shared/models/rentalBranch';
import { RentalBranchService } from 'app/shared/services/rentalBranchService/rental-branch.service';

@Component({
  templateUrl: './rental-branches-dashboard.component.html',
  styleUrls: ['./rental-branches-dashboard.component.scss']
})
export class RentalBranchesDashboardComponent implements OnInit {
  rentalBranchListModel: ListResponseModel<RentalBranch> = {
    index: 0,
    size: 10,
    items: []
  };

  constructor(private rentalBranchService: RentalBranchService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.rentalBranchService
      .getList(this.rentalBranchListModel.index, this.rentalBranchListModel.size)
      .subscribe(response => (this.rentalBranchListModel = response));
  }

  getCityNameFromEnum(city: City): string {
    return City[city];
  }
}
