import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from '../../../../shared/models/brand';
import { BrandService } from '../../../../shared/services/brandService/brand.service';

@Component({
  selector: 'app-model-filter-menu',
  templateUrl: './model-filter-menu.component.html',
  styleUrls: ['./model-filter-menu.component.scss']
})
export class ModelFilterMenuComponent implements OnInit {
  brands: Brand[] = [];

  activeBrandName?: string = '';

  brandFilterText: string = '';
  modelFilterText: string = '';

  @Output() modelFilterTextEvent = new EventEmitter<string>();

  @Input() isCompact: boolean = false;

  constructor(private brandService: BrandService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.getBrands();
    this.getActivesFromParams();
  }
  getActivesFromParams() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['brand']) this.activeBrandName = params['brand'];
    });
  }

  getBrands() {
    this.brandService.getList(0, 100).subscribe(response => (this.brands = response.items));
  }

  sendModelFilterText() {
    this.modelFilterTextEvent.emit(this.modelFilterText);
  }

  isBrandSelected(brandName?: string): boolean {
    return this.activeBrandName === brandName;
  }
}
