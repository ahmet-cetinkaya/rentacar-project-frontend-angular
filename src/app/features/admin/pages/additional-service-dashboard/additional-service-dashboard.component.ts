import { Component, OnInit } from '@angular/core';
import { ListResponseModel } from 'app/core/models/listResponseModel';
import { AdditionalService } from 'app/shared/models/additionalService';
import { AdditionalServiceService } from 'app/shared/services/additionalService/additional-service.service';

@Component({
  selector: 'app-additional-services-dashboard',
  templateUrl: './additional-service-dashboard.component.html',
  styleUrls: ['./additional-service-dashboard.component.scss']
})
export class AdditionalServicesDashboardComponent implements OnInit {
  additionalServices: ListResponseModel<AdditionalService> = {
    index: 0,
    size: 10,
    items: []
  };

  constructor(private additionalServiceService: AdditionalServiceService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.additionalServiceService
      .getList(this.additionalServices.index, this.additionalServices.size)
      .subscribe(response => (this.additionalServices = response));
  }
}
