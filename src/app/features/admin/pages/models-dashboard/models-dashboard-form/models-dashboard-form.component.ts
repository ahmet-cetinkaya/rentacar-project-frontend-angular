import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'app/shared/models/brand';
import { Fuel } from 'app/shared/models/fuel';
import { Model } from 'app/shared/models/model';
import { Transmission } from 'app/shared/models/transmission';
import { BrandService } from 'app/shared/services/brandService/brand.service';
import { FuelService } from 'app/shared/services/fuelService/fuel.service';
import { ModelService } from 'app/shared/services/modelService/model.service';
import { TransmissionService } from 'app/shared/services/transmissionService/transmission.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: './models-dashboard-form.component.html',
  styleUrls: ['./models-dashboard-form.component.scss']
})
export class ModelsDashboardFormComponent implements OnInit {
  modelToEdit!: Model;
  brands: Brand[] = [];
  fuels: Fuel[] = [];
  transmissions: Transmission[] = [];
  dataLoaded: boolean = false;

  modelForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private modelService: ModelService,
    private brandService: BrandService,
    private transmissionService: TransmissionService,
    private fuelService: FuelService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) this.getModelById(params['id']);
      else this.createModelForm();
    });
    this.getBrandList();
    this.getFuelList();
    this.getTransmissionList();
  }

  getModelById(id: number) {
    this.modelService.getById(id).subscribe(response => {
      this.modelToEdit = response;
      this.dataLoaded = true;
      this.createModelForm();
    });
  }

  createModelForm() {
    this.modelForm = this.formBuilder.group({
      name: [this.modelToEdit?.name || '', Validators.required],
      brandId: [this.modelToEdit?.brandId || 0, Validators.required],
      fuelId: [this.modelToEdit?.fuelId || 0, Validators.required],
      transmissionId: [this.modelToEdit?.transmissionId || 0, Validators.required],
      dailyPrice: [this.modelToEdit?.dailyPrice || '', Validators.required],
      imageUrl: [this.modelToEdit?.imageUrl || '', Validators.required],
      brandFilterText: [''],
      fuelFilterText: [''],
      transmissionFilterText: ['']
    });
  }

  getBrandList() {
    this.brandService.getList(0, 999).subscribe(response => (this.brands = response.items));
  }

  getFuelList() {
    this.fuelService.getList(0, 999).subscribe(response => (this.fuels = response.items));
  }

  getTransmissionList() {
    this.transmissionService
      .getList(0, 999)
      .subscribe(response => (this.transmissions = response.items));
  }

  add() {
    if (!this.modelForm.valid) {
      this.toastrService.warning('There are missing fields.');
      return;
    }
    let modelToAdd: Model = { ...this.modelForm.value };
    this.modelService.add(modelToAdd).subscribe(() => {
      this.toastrService.success('Model has been added.');
      this.router.navigate(['admin', 'models']);
    });
  }

  update() {
    if (!this.modelForm.valid) {
      this.toastrService.warning('There are missing fields.');
      return;
    }
    let modelToUpdate: Model = { id: this.modelToEdit.id, ...this.modelForm.value };
    this.modelService.update(modelToUpdate).subscribe(() => {
      this.toastrService.success('Model has been updated.');
      this.router.navigate(['admin', 'models']);
    });
  }

  delete() {
    if (!window.confirm('Are you sure to delete?')) return;
    let modelToDelete: Model = { id: this.modelToEdit.id, ...this.modelForm.value };
    this.modelService.delete(modelToDelete).subscribe(() => {
      this.toastrService.success('Model has been deleted.');
      this.router.navigate(['admin', 'models']);
    });
  }
}
