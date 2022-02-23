import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Color } from 'app/shared/models/color';
import { ColorService } from 'app/shared/services/colorService/color.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-colors-dashboard-form',
  templateUrl: './colors-dashboard-form.component.html',
  styleUrls: ['./colors-dashboard-form.component.scss']
})
export class ColorsDashboardFormComponent implements OnInit {
  dataLoaded: boolean = false;
  colorToEdit!: Color;
  colorForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private colorService: ColorService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) this.getColorById(params['id']);
      else this.createColorForm();
    });
  }

  getColorById(id: number) {
    this.colorService.getById(id).subscribe(response => {
      this.colorToEdit = response;
      this.dataLoaded = true;
      this.createColorForm();
    });
  }

  createColorForm() {
    this.colorForm = this.formBuilder.group({
      name: [this.colorToEdit?.name || '', Validators.required]
    });
  }

  add() {
    if (!this.colorForm.valid) {
      this.toastrService.warning('There are missing fields.');
      return;
    }

    let colorToAdd: Color = { ...this.colorForm.value };
    this.colorService.add(colorToAdd).subscribe(() => {
      this.toastrService.success('Color has been added.');
      this.router.navigate(['admin', 'colors']);
    });
  }

  update() {
    if (!this.colorForm.valid) {
      this.toastrService.warning('There are missing fields.');
      return;
    }

    let colorToUpdate: Color = { id: this.colorToEdit.id, ...this.colorForm.value };
    this.colorService.update(colorToUpdate).subscribe(() => {
      this.toastrService.success('Color has been updated.');
      this.router.navigate(['admin', 'colors']);
    });
  }

  delete() {
    if (!window.confirm('Are you sure to delete?')) return;

    let colorToDelete: Color = { id: this.colorToEdit.id, ...this.colorForm.value };
    this.colorService.delete(colorToDelete).subscribe(() => {
      this.toastrService.success('Color has been deleted.');
      this.router.navigate(['admin', 'colors']);
    });
  }
}
