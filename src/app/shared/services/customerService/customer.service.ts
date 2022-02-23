import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { CreateCustomerDto } from '../../dtos/createCustomerDto';
import { Customer } from '../../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiControllerUrl = `${environment.apiUrl}/Customers`;

  constructor(private httpClient: HttpClient) {}

  getByAuth(): Observable<Customer> {
    return this.httpClient.get<Customer>(`${this.apiControllerUrl}/ByAuth`);
  }

  add(createCustomerDto: CreateCustomerDto): Observable<Customer> {
    return this.httpClient.post<Customer>(this.apiControllerUrl, createCustomerDto);
  }
}
