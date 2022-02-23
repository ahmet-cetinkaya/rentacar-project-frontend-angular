import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdditionalService } from 'app/shared/models/additionalService';
import { AdditionalServiceService } from 'app/shared/services/additionalService/additional-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-additional-services-dashboard-form',
  templateUrl: './additional-service-dashboard-form.component.html',
  styleUrls: ['./additional-service-dashboard-form.component.scss']
})
export class AdditionalServicesDashboardFormComponent implements OnInit {
  dataLoaded: boolean = false;
  additionalServiceToEdit!: AdditionalService;
  additionalServiceForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private additionalServiceService: AdditionalServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) this.getAdditionalServiceById(params['id']);
      else this.createAdditionalServiceForm();
    });
  }

  getAdditionalServiceById(id: number) {
    this.additionalServiceService.getById(id).subscribe(response => {
      this.additionalServiceToEdit = response;
      this.dataLoaded = true;
      this.createAdditionalServiceForm();
    });
  }

  createAdditionalServiceForm() {
    this.additionalServiceForm = this.formBuilder.group({
      name: [this.additionalServiceToEdit?.name || '', Validators.required],
      dailyPrice: [this.additionalServiceToEdit?.dailyPrice || '', Validators.required]
    });
  }

  add() {
    if (!this.additionalServiceForm.valid) {
      this.toastrService.warning('There are missing fields.');
      return;
    }

    let additionalServiceToAdd: AdditionalService = { ...this.additionalServiceForm.value };
    this.additionalServiceService.add(additionalServiceToAdd).subscribe(() => {
      this.toastrService.success('AdditionalService has been added.');
      this.router.navigate(['admin', 'additional-services']);
    });
  }

  update() {
    if (!this.additionalServiceForm.valid) {
      this.toastrService.warning('There are missing fields.');
      return;
    }

    let additionalServiceToUpdate: AdditionalService = {
      id: this.additionalServiceToEdit.id,
      ...this.additionalServiceForm.value
    };
    this.additionalServiceService.update(additionalServiceToUpdate).subscribe(() => {
      this.toastrService.success('AdditionalService has been updated.');
      this.router.navigate(['admin', 'additional-services']);
    });
  }

  delete() {
    if (!window.confirm('Are you sure to delete?')) return;

    let additionalServiceToDelete: AdditionalService = {
      id: this.additionalServiceToEdit.id,
      ...this.additionalServiceForm.value
    };
    this.additionalServiceService.delete(additionalServiceToDelete).subscribe(() => {
      this.toastrService.success('AdditionalService has been deleted.');
      this.router.navigate(['admin', 'additional-services']);
    });
  }
}
