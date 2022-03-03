import { ActivatedRoute, Router } from '@angular/router';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Filter, FilterLogic, FilterOperator } from 'app/core/models/filter';

import { Brand } from '../../../../shared/models/brand';
import { BrandService } from '../../../../shared/services/brandService/brand.service';
import { Fuel } from 'app/shared/models/fuel';
import { FuelService } from 'app/shared/services/fuelService/fuel.service';
import { Transmission } from 'app/shared/models/transmission';
import { TransmissionService } from 'app/shared/services/transmissionService/transmission.service';

@Component({
  selector: 'app-model-filter-menu',
  templateUrl: './model-filter-menu.component.html',
  styleUrls: ['./model-filter-menu.component.scss']
})
export class ModelFilterMenuComponent implements OnInit {
  brands: Brand[] = [];
  fuels: Fuel[] = [];
  transmissions: Transmission[] = [];

  activeBrandId?: number;
  activeFuelId?: number;
  activeTransmissionId?: number;

  brandFilterText: string = '';
  fuelFilterText: string = '';
  transmissionFilterText: string = '';
  modelFilterText: string = '';

  @Output() modelFilterTextEvent = new EventEmitter<string>();

  @Input() isCompact: boolean = false;

  constructor(
    private brandService: BrandService,
    private fuelService: FuelService,
    private transmissionService: TransmissionService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getBrands();
    this.getFuels();
    this.getTransmissions();
    this.getActivesFromParams();
  }
  getActivesFromParams() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['filter']) {
        const filter: Filter = JSON.parse(params['filter']);
        this.activeBrandId = +(
          (filter?.field == 'brandId'
            ? filter.value
            : filter.filters?.find(f => f.field == 'brandId')?.value) || '0'
        );
        this.activeFuelId = +(
          (filter?.field == 'fuelId'
            ? filter.value
            : filter.filters?.find(f => f.field == 'fuelId')?.value) || '0'
        );
        this.activeTransmissionId = +(
          (filter?.field == 'transmissionId'
            ? filter.value
            : filter.filters?.find(f => f.field == 'transmissionId')?.value) || '0'
        );
      }
    });
  }

  getBrands() {
    this.brandService.getList(0, 100).subscribe(response => (this.brands = response.items));
  }
  getFuels() {
    this.fuelService.getList(0, 100).subscribe(response => (this.fuels = response.items));
  }
  getTransmissions() {
    this.transmissionService
      .getList(0, 100)
      .subscribe(response => (this.transmissions = response.items));
  }

  sendModelFilterText() {
    this.modelFilterTextEvent.emit(this.modelFilterText);
  }

  isBrandSelected(brandId: number): boolean {
    return this.activeBrandId === brandId;
  }
  isFuelSelected(fuelId: number): boolean {
    return this.activeFuelId === fuelId;
  }
  isTransmissionSelected(transmissionId: number): boolean {
    return this.activeTransmissionId === transmissionId;
  }

  routeFilter() {
    const filters: Filter[] = [];
    if (this.activeBrandId) {
      filters.push({
        field: 'brandId',
        operator: FilterOperator.Equal,
        value: this.activeBrandId.toString(),
        logic: FilterLogic.And
      });
    }
    if (this.activeFuelId) {
      filters.push({
        field: 'fuelId',
        operator: FilterOperator.Equal,
        value: this.activeFuelId.toString(),
        logic: FilterLogic.And
      });
    }
    if (this.activeTransmissionId) {
      filters.push({
        field: 'transmissionId',
        operator: FilterOperator.Equal,
        value: this.activeTransmissionId.toString(),
        logic: FilterLogic.And
      });
    }

    let filter!: Filter;
    if (filters.length > 0) {
      filter = {
        ...filters[0],
        filters: filters.filter(f => f.field != filters[0].field)
      };
    }

    this.router.navigate(['models'], { queryParams: { filter: JSON.stringify(filter) } });
  }
}
