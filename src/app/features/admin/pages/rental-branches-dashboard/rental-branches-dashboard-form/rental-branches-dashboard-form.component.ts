import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { City, CityObject } from 'app/shared/enums/city';
import { RentalBranch } from 'app/shared/models/rentalBranch';
import { RentalBranchService } from 'app/shared/services/rentalBranchService/rental-branch.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: './rental-branches-dashboard-form.component.html',
  styleUrls: ['./rental-branches-dashboard-form.component.scss']
})
export class RentalBranchesDashboardFormComponent implements OnInit {
  rentalBranchToEdit!: RentalBranch;
  cities: CityObject[] = this.getCityStates();
  dataLoaded: boolean = false;

  rentalBranchForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private rentalBranchService: RentalBranchService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) this.getRentalBranchById(params['id']);
      else this.createRentalBranchForm();
    });
  }

  getRentalBranchById(id: number) {
    this.rentalBranchService.getById(id).subscribe(response => {
      this.rentalBranchToEdit = response;
      this.dataLoaded = true;
      this.createRentalBranchForm();
    });
  }

  getCityStates(): CityObject[] {
    const rentalBranchStates: CityObject[] = Object.entries(City)
      .filter(([key]) => !isNaN(+key))
      .map(([key, value]) => ({ value: +key, name: value } as CityObject));
    return rentalBranchStates;
  }

  createRentalBranchForm() {
    this.rentalBranchForm = this.formBuilder.group({
      city: [this.rentalBranchToEdit?.city || 0, Validators.required],
      cityFilterText: ['']
    });
  }

  getRentalBranchCityNameById(id: number) {
    return City[id];
  }

  add() {
    if (!this.rentalBranchForm.valid) {
      this.toastrService.warning('There are missing fields.');
      return;
    }
    let rentalBranchToAdd: RentalBranch = {
      ...this.rentalBranchForm.value,
      city: +this.rentalBranchForm.value.city
    };
    this.rentalBranchService.add(rentalBranchToAdd).subscribe(() => {
      this.toastrService.success('Rental Branch has been added.');
      this.router.navigate(['admin', 'rental-branches']);
    });
  }

  update() {
    if (!this.rentalBranchForm.valid) {
      this.toastrService.warning('There are missing fields.');
      return;
    }
    let rentalBranchToUpdate: RentalBranch = {
      id: this.rentalBranchToEdit.id,
      ...this.rentalBranchForm.value,
      city: +this.rentalBranchForm.value.city
    };
    this.rentalBranchService.update(rentalBranchToUpdate).subscribe(() => {
      this.toastrService.success('Rental Branch has been updated.');
      this.router.navigate(['admin', 'rental-branches']);
    });
  }

  delete() {
    if (!window.confirm('Are you sure to delete?')) return;
    let rentalBranchToDelete: RentalBranch = {
      id: this.rentalBranchToEdit.id,
      ...this.rentalBranchForm.value
    };
    this.rentalBranchService.delete(rentalBranchToDelete).subscribe(() => {
      this.toastrService.success('Rental Branch has been deleted.');
      this.router.navigate(['admin', 'rental-branches']);
    });
  }
}
