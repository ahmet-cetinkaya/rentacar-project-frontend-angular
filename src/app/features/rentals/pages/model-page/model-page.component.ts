import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Redirect } from 'app/core/models/redirect';
import { TokenUserModel } from 'app/core/models/tokenUserModel';
import { AuthService } from 'app/core/services/auth/auth.service';
import { CreateRentalDto } from 'app/shared/dtos/createRentalDto';
import { City } from 'app/shared/enums/city';
import { AdditionalService } from 'app/shared/models/additionalService';
import { Brand } from 'app/shared/models/brand';
import { Fuel } from 'app/shared/models/fuel';
import { Model } from 'app/shared/models/model';
import { RentalBranch } from 'app/shared/models/rentalBranch';
import { Transmission } from 'app/shared/models/transmission';
import { AdditionalServiceService } from 'app/shared/services/additionalService/additional-service.service';
import { BrandService } from 'app/shared/services/brandService/brand.service';
import { CustomerService } from 'app/shared/services/customerService/customer.service';
import { FuelService } from 'app/shared/services/fuelService/fuel.service';
import { ModelService } from 'app/shared/services/modelService/model.service';
import { RentalBranchService } from 'app/shared/services/rentalBranchService/rental-branch.service';
import { RentalService } from 'app/shared/services/rentalService/rental.service';
import { TransmissionService } from 'app/shared/services/transmissionService/transmission.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './model-page.component.html',
  styleUrls: ['./model-page.component.scss']
})
export class ModelPageComponent implements OnInit {
  model!: Model;
  brand!: Brand;
  fuel!: Fuel;
  transmission!: Transmission;
  rentalBranches!: RentalBranch[];
  additionalServices!: AdditionalService[];
  isDataLoaded: boolean = false;

  rentForm!: FormGroup;
  tokenUserModel$: Observable<TokenUserModel | undefined> = this.authService.tokenUserModel$;

  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private brandService: BrandService,
    private fuelService: FuelService,
    private transmissionService: TransmissionService,
    private rentalBranchService: RentalBranchService,
    private modelService: ModelService,
    private customerService: CustomerService,
    private rentalService: RentalService,
    private toastr: ToastrService,
    private router: Router,
    private formBuilder: FormBuilder,
    private additionalService: AdditionalServiceService
  ) {}

  ngOnInit(): void {
    this.createRentForm();
    this.activatedRoute.params.subscribe(params => {
      this.getModelById(params['id']);
      this.getRentalBranches();
      this.getAdditionalServices();
    });
  }
  createRentForm() {
    const dateTimeNow: string = new Date().toISOString().substring(0, 16);
    this.rentForm = this.formBuilder.group({
      rentStartRentalBranchId: ['', Validators.required],
      rentEndRentalBranchId: ['', Validators.required],
      rentStartDate: [dateTimeNow, Validators.required],
      rentEndDate: [dateTimeNow, Validators.required],
      additionalServiceIds: [[]],
      additionalServiceFilterText: ''
    });
  }
  getModelById(modelId: number) {
    this.modelService.getById(modelId).subscribe(response => {
      this.model = response;
      this.getBrandById(this.model.brandId);
      this.getFuelById(this.model.fuelId);
      this.getTransmissionById(this.model.transmissionId);
      this.isDataLoaded = true;
    });
  }
  getRentalBranches() {
    this.rentalBranchService
      .getList(0, 200)
      .subscribe(response => (this.rentalBranches = response.items));
  }
  getAdditionalServices() {
    this.additionalService
      .getList(0, 100)
      .subscribe(response => (this.additionalServices = response.items));
  }
  getRentalBranchCityNameById(rentalBranchCityId: number) {
    return City[rentalBranchCityId];
  }
  getBrandById(brandId: number): void {
    this.brandService.getById(brandId).subscribe(response => (this.brand = response));
  }
  getFuelById(fuelId: number) {
    this.fuelService.getById(fuelId).subscribe(response => (this.fuel = response));
  }
  getTransmissionById(transmissionId: number) {
    this.transmissionService
      .getById(transmissionId)
      .subscribe(response => (this.transmission = response));
  }

  rent() {
    if (!this.rentForm.valid) {
      this.toastr.warning('You are missing your rental information.');
      return;
    }

    this.tokenUserModel$.subscribe(tokenUserModel => {
      if (!this.isAuthenticated() || !tokenUserModel) return;

      this.customerService.getByAuth().subscribe({
        next: customer => {
          let rental: CreateRentalDto = {
            modelId: this.model.id,
            customerId: customer.id,
            ...this.rentForm.value
          };
          this.rentalService.add(rental).subscribe(response => {
            this.toastr.success('Rental created.');
          });
        },
        error: () => {
          this.userMustBeRegisterAsCustomer();
        }
      });
    });
  }
  isAuthenticated(): boolean {
    if (!this.authService.isAuthenticated) {
      const redirect: Redirect = { url: `model/${this.model.id}` };
      this.router.navigate(['login'], { queryParams: { redirect: JSON.stringify(redirect) } });
      this.toastr.info('You must log in.');
      return false;
    }
    return true;
  }
  userMustBeRegisterAsCustomer() {
    this.toastr.info('You must be a customer to rent a model.');
    const redirect: Redirect = { url: `model/${this.model.id}` };
    this.router.navigate(['register', 'customer'], {
      queryParams: { redirect: JSON.stringify(redirect) }
    });
  }

  isActiveCarousel(modelImageIndex: number): string {
    return modelImageIndex == 0 ? 'active' : '';
  }
}
