import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDamage } from '../../../../../shared/models/carDamage';
import { CarDamagesService } from '../../../services/car-damages.service';

@Component({
  selector: 'app-car-damages-dashboard-form',
  templateUrl: './car-damages-dashboard-form.component.html',
  styleUrls: ['./car-damages-dashboard-form.component.scss']
})
export class CarDamagesDashboardFormComponent implements OnInit {
  dataLoaded: boolean = false;
  carDamageToEdit!: CarDamage;
  carDamageForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private carDamagesService: CarDamagesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) this.getCarDamageById(params['id']);
      else this.createCarDamageForm();
    });
  }

  getCarDamageById(id: number) {
    this.carDamagesService.getById(id).subscribe(response => {
      this.carDamageToEdit = response;
      this.dataLoaded = true;
      this.createCarDamageForm();
    });
  }

  createCarDamageForm() {
    if (this.carDamageToEdit)
      this.carDamageForm = this.formBuilder.group({
        damageDescription: [this.carDamageToEdit?.damageDescription, Validators.required],
        isFixed: [this.carDamageToEdit?.isFixed, Validators.required]
      });
    else
      this.carDamageForm = this.formBuilder.group({
        carId: [0, Validators.required],
        damageDescription: ['', Validators.required],
        isFixed: [false, Validators.required]
      });
  }

  add() {
    if (!this.carDamageForm.valid) {
      this.toastrService.warning('There are missing fields.');
      return;
    }

    let carDamageToAdd: CarDamage = { ...this.carDamageForm.value };
    this.carDamagesService.add(carDamageToAdd).subscribe(() => {
      this.toastrService.success('CarDamage has been added.');
      this.router.navigate(['admin', 'car-damages']);
    });
  }

  update() {
    if (!this.carDamageForm.valid) {
      this.toastrService.warning('There are missing fields.');
      return;
    }

    let carDamageToUpdate: CarDamage = {
      id: this.carDamageToEdit.id,
      carId: this.carDamageToEdit.carId,
      ...this.carDamageForm.value
    };
    this.carDamagesService.update(carDamageToUpdate).subscribe(() => {
      this.toastrService.success('CarDamage has been updated.');
      this.router.navigate(['admin', 'car-damages']);
    });
  }

  delete() {
    if (!window.confirm('Are you sure to delete?')) return;

    let carDamageToDelete: CarDamage = { id: this.carDamageToEdit.id, ...this.carDamageForm.value };
    this.carDamagesService.delete(carDamageToDelete).subscribe(() => {
      this.toastrService.success('CarDamage has been deleted.');
      this.router.navigate(['admin', 'car-damages']);
    });
  }
}
