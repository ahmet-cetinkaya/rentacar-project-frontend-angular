import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { IndividualCustomer } from '../../models/individualCustomer';

@Injectable({
  providedIn: 'root'
})
export class IndividualCustomerService {
  apiControllerUrl = `${environment.apiUrl}/IndividualCustomers`;

  constructor(private httpClient: HttpClient) {}

  getById(id: number): Observable<IndividualCustomer> {
    return this.httpClient.get<IndividualCustomer>(`${this.apiControllerUrl}/${id}`);
  }

  getByCustomerId(customerId: number): Observable<IndividualCustomer> {
    return this.httpClient.get<IndividualCustomer>(
      `${this.apiControllerUrl}/ByCustomerId/${customerId}`
    );
  }

  add(createIndividualCustomerDto: IndividualCustomer): Observable<IndividualCustomer> {
    return this.httpClient.post<IndividualCustomer>(
      `${this.apiControllerUrl}`,
      createIndividualCustomerDto
    );
  }

  update(model: IndividualCustomer): Observable<IndividualCustomer> {
    return this.httpClient.put<IndividualCustomer>(`${this.apiControllerUrl}`, model);
  }

  delete(model: IndividualCustomer): Observable<IndividualCustomer> {
    return this.httpClient.delete<IndividualCustomer>(`${this.apiControllerUrl}`, { body: model });
  }
}
