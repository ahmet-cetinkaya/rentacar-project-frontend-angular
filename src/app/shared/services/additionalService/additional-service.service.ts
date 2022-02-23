import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from 'app/core/models/listResponseModel';
import { AdditionalService } from 'app/shared/models/additionalService';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdditionalServiceService {
  apiControllerUrl = `${environment.apiUrl}/AdditionalServices`;

  constructor(private httpClient: HttpClient) {}

  getList(
    page: number = 0,
    pageSize: number = 10
  ): Observable<ListResponseModel<AdditionalService>> {
    return this.httpClient.get<ListResponseModel<AdditionalService>>(`${this.apiControllerUrl}`, {
      params: { page, pageSize }
    });
  }

  getById(id: number): Observable<AdditionalService> {
    return this.httpClient.get<AdditionalService>(`${this.apiControllerUrl}/${id}`);
  }

  add(additionalService: AdditionalService): Observable<AdditionalService> {
    return this.httpClient.post<AdditionalService>(`${this.apiControllerUrl}`, additionalService);
  }

  update(additionalService: AdditionalService): Observable<AdditionalService> {
    return this.httpClient.put<AdditionalService>(`${this.apiControllerUrl}`, additionalService);
  }

  delete(additionalService: AdditionalService): Observable<AdditionalService> {
    return this.httpClient.delete<AdditionalService>(`${this.apiControllerUrl}`, {
      body: additionalService
    });
  }
}
