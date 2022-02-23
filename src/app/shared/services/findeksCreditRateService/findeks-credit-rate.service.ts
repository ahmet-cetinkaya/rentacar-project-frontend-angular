import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FindeksCreditRate } from 'app/shared/models/findeksCreditRate';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FindeksCreditRateService {
  apiControllerUrl = `${environment.apiUrl}/FindeksCreditRates`;

  constructor(private httpClient: HttpClient) {}

  getByCustomerId(customerId: number): Observable<FindeksCreditRate> {
    return this.httpClient.get<FindeksCreditRate>(
      `${this.apiControllerUrl}/ByCustomerId/${customerId}`
    );
  }

  updateByAuthFromService(identityNumber: string): Observable<FindeksCreditRate> {
    return this.httpClient.put<FindeksCreditRate>(`${this.apiControllerUrl}/ByAuth/FromService`, {
      identityNumber
    });
  }
}
