import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from 'app/core/models/listResponseModel';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Fuel } from '../../models/fuel';

@Injectable({
  providedIn: 'root'
})
export class FuelService {
  apiControllerUrl = `${environment.apiUrl}/fuels`;

  constructor(private httpClient: HttpClient) {}

  getList(page: number = 0, pageSize: number = 10): Observable<ListResponseModel<Fuel>> {
    return this.httpClient.get<ListResponseModel<Fuel>>(`${this.apiControllerUrl}`, {
      params: { page, pageSize }
    });
  }

  getById(id: number): Observable<Fuel> {
    return this.httpClient.get<Fuel>(`${this.apiControllerUrl}/${id}`);
  }

  add(fuel: Fuel): Observable<Fuel> {
    return this.httpClient.post<Fuel>(`${this.apiControllerUrl}`, fuel);
  }

  update(fuel: Fuel): Observable<Fuel> {
    return this.httpClient.put<Fuel>(`${this.apiControllerUrl}`, fuel);
  }

  delete(fuel: Fuel): Observable<Fuel> {
    return this.httpClient.delete<Fuel>(`${this.apiControllerUrl}`, { body: fuel });
  }
}
