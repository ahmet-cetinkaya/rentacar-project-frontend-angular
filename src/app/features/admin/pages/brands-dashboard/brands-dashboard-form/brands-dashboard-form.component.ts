import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'app/shared/models/brand';
import { BrandService } from 'app/shared/services/brandService/brand.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-brands-dashboard-form',
  templateUrl: './brands-dashboard-form.component.html',
  styleUrls: ['./brands-dashboard-form.component.scss']
})
export class BrandsDashboardFormComponent implements OnInit {
  dataLoaded: boolean = false;
  brandToEdit!: Brand;
  brandForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private brandService: BrandService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) this.getBrandById(params['id']);
      else this.createBrandForm();
    });
  }

  getBrandById(id: number) {
    this.brandService.getById(id).subscribe(response => {
      this.brandToEdit = response;
      this.dataLoaded = true;
      this.createBrandForm();
    });
  }

  createBrandForm() {
    this.brandForm = this.formBuilder.group({
      name: [this.brandToEdit?.name || '', Validators.required]
    });
  }

  add() {
    if (!this.brandForm.valid) {
      this.toastrService.warning('There are missing fields.');
      return;
    }

    let brandToAdd: Brand = { ...this.brandForm.value };
    this.brandService.add(brandToAdd).subscribe(() => {
      this.toastrService.success('Brand has been added.');
      this.router.navigate(['admin', 'brands']);
    });
  }

  update() {
    if (!this.brandForm.valid) {
      this.toastrService.warning('There are missing fields.');
      return;
    }

    let brandToUpdate: Brand = { id: this.brandToEdit.id, ...this.brandForm.value };
    this.brandService.update(brandToUpdate).subscribe(() => {
      this.toastrService.success('Brand has been updated.');
      this.router.navigate(['admin', 'brands']);
    });
  }

  delete() {
    if (!window.confirm('Are you sure to delete?')) return;

    let brandToDelete: Brand = { id: this.brandToEdit.id, ...this.brandForm.value };
    this.brandService.delete(brandToDelete).subscribe(() => {
      this.toastrService.success('Brand has been deleted.');
      this.router.navigate(['admin', 'brands']);
    });
  }
}
