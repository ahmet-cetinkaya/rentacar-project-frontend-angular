import { Component, OnInit } from '@angular/core';
import { ListResponseModel } from 'app/core/models/listResponseModel';
import { Brand } from 'app/shared/models/brand';
import { BrandService } from 'app/shared/services/brandService/brand.service';

@Component({
  selector: 'app-brands-dashboard',
  templateUrl: './brands-dashboard.component.html',
  styleUrls: ['./brands-dashboard.component.scss']
})
export class BrandsDashboardComponent implements OnInit {
  brandListModel: ListResponseModel<Brand> = {
    index: 0,
    size: 10,
    items: []
  };

  constructor(private brandService: BrandService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.brandService
      .getList(this.brandListModel.index, this.brandListModel.size)
      .subscribe(response => (this.brandListModel = response));
  }
}
