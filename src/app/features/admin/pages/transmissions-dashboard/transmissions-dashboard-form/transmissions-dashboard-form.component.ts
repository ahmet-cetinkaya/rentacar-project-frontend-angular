import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Transmission } from 'app/shared/models/transmission';
import { TransmissionService } from 'app/shared/services/transmissionService/transmission.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-transmissions-dashboard-form',
  templateUrl: './transmissions-dashboard-form.component.html',
  styleUrls: ['./transmissions-dashboard-form.component.scss']
})
export class TransmissionsDashboardFormComponent implements OnInit {
  dataLoaded: boolean = false;
  transmissionToEdit!: Transmission;
  transmissionForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private transmissionService: TransmissionService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) this.getTransmissionById(params['id']);
      else this.createTransmissionForm();
    });
  }

  getTransmissionById(id: number) {
    this.transmissionService.getById(id).subscribe(response => {
      this.transmissionToEdit = response;
      this.dataLoaded = true;
      this.createTransmissionForm();
    });
  }

  createTransmissionForm() {
    this.transmissionForm = this.formBuilder.group({
      name: [this.transmissionToEdit?.name || '', Validators.required]
    });
  }

  add() {
    if (!this.transmissionForm.valid) {
      this.toastrService.warning('There are missing fields.');
      return;
    }

    let transmissionToAdd: Transmission = { ...this.transmissionForm.value };
    this.transmissionService.add(transmissionToAdd).subscribe(() => {
      this.toastrService.success('Transmission has been added.');
      this.router.navigate(['admin', 'transmissions']);
    });
  }

  update() {
    if (!this.transmissionForm.valid) {
      this.toastrService.warning('There are missing fields.');
      return;
    }

    let transmissionToUpdate: Transmission = {
      id: this.transmissionToEdit.id,
      ...this.transmissionForm.value
    };
    this.transmissionService.update(transmissionToUpdate).subscribe(() => {
      this.toastrService.success('Transmission has been updated.');
      this.router.navigate(['admin', 'transmissions']);
    });
  }

  delete() {
    if (!window.confirm('Are you sure to delete?')) return;

    let transmissionToDelete: Transmission = {
      id: this.transmissionToEdit.id,
      ...this.transmissionForm.value
    };
    this.transmissionService.delete(transmissionToDelete).subscribe(() => {
      this.toastrService.success('Transmission has been deleted.');
      this.router.navigate(['admin', 'transmissions']);
    });
  }
}
