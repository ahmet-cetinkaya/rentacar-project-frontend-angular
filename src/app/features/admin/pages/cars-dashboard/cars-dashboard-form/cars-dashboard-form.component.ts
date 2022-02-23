import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarState, CarStateObject } from 'app/shared/enums/carState';
import { City } from 'app/shared/enums/city';
import { Car } from 'app/shared/models/car';
import { Color } from 'app/shared/models/color';
import { ModelList } from 'app/shared/models/model';
import { RentalBranch } from 'app/shared/models/rentalBranch';
import { CarService } from 'app/shared/services/carService/car.service';
import { ColorService } from 'app/shared/services/colorService/color.service';
import { ModelService } from 'app/shared/services/modelService/model.service';
import { RentalBranchService } from 'app/shared/services/rentalBranchService/rental-branch.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cars-dashboard-form',
  templateUrl: './cars-dashboard-form.component.html',
  styleUrls: ['./cars-dashboard-form.component.scss']
})
export class CarsDashboardFormComponent implements OnInit {
  carToEdit!: Car;
  modelList: ModelList[] = [];
  rentalBranches: RentalBranch[] = [];
  colors: Color[] = [];
  carStates: CarStateObject[] = this.getCarStates();
  dataLoaded: boolean = false;

  carForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private carService: CarService,
    private colorService: ColorService,
    private rentalBranchService: RentalBranchService,
    private modelService: ModelService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) this.getCarById(params['id']);
      else this.createCarForm();
    });
    this.getColorList();
    this.getModelList();
    this.getRentalBranchList();
  }

  getCarById(id: number) {
    this.carService.getById(id).subscribe(response => {
      this.carToEdit = response;
      this.dataLoaded = true;
      this.createCarForm();
    });
  }

  getCarStates(): CarStateObject[] {
    const carStates: CarStateObject[] = Object.entries(CarState)
      .filter(([key]) => !isNaN(+key))
      .map(([key, value]) => ({ value: +key, name: value } as CarStateObject));
    return carStates;
  }

  createCarForm() {
    this.carForm = this.formBuilder.group({
      colorId: [this.carToEdit?.colorId || 0, Validators.required],
      modelId: [this.carToEdit?.modelId || 0, Validators.required],
      rentalBranchId: [this.carToEdit?.rentalBranchId || 0, Validators.required],
      carState: [this.carToEdit?.carState || 0, Validators.required],
      kilometer: [this.carToEdit?.kilometer || 0, Validators.required],
      modelYear: [this.carToEdit?.modelYear || 0, Validators.required],
      plate: [this.carToEdit?.plate || '', Validators.required],
      minFindeksCreditRate: [this.carToEdit?.minFindeksCreditRate || 1, Validators.required],
      colorFilterText: [''],
      modelFilterText: [''],
      rentalBranchFilterText: ['']
    });
  }

  getColorList() {
    this.colorService.getList(0, 999).subscribe(response => (this.colors = response.items));
  }

  getModelList() {
    this.modelService.getList(0, 999).subscribe(response => (this.modelList = response.items));
  }

  getRentalBranchList() {
    this.rentalBranchService
      .getList(0, 999)
      .subscribe(response => (this.rentalBranches = response.items));
  }

  getRentalBranchCityNameById(id: number) {
    return City[id];
  }

  add() {
    if (!this.carForm.valid) {
      this.toastrService.warning('There are missing fields.');
      return;
    }
    let carToAdd: Car = {
      ...this.carForm.value,
      carState: +this.carForm.value.carState,
      rentalBranchId: +this.carForm.value.rentalBranchId
    };
    this.carService.add(carToAdd).subscribe(() => {
      this.toastrService.success('Car has been added.');
      this.router.navigate(['admin', 'cars']);
    });
  }

  update() {
    if (!this.carForm.valid) {
      this.toastrService.warning('There are missing fields.');
      return;
    }
    let carToUpdate: Car = {
      id: this.carToEdit.id,
      ...this.carForm.value,
      carState: +this.carForm.value.carState
    };
    this.carService.update(carToUpdate).subscribe(() => {
      this.toastrService.success('Car has been updated.');
      this.router.navigate(['admin', 'cars']);
    });
  }

  delete() {
    if (!window.confirm('Are you sure to delete?')) return;
    let carToDelete: Car = {
      id: this.carToEdit.id,
      ...this.carForm.value
    };
    this.carService.delete(carToDelete).subscribe(() => {
      this.toastrService.success('Car has been deleted.');
      this.router.navigate(['admin', 'cars']);
    });
  }
}
