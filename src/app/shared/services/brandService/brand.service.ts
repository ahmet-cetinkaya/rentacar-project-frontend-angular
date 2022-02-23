import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from 'app/core/models/listResponseModel';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Brand } from '../../models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiControllerUrl = `${environment.apiUrl}/Brands`;

  constructor(private httpClient: HttpClient) {}

  getList(page: number = 0, pageSize: number = 10): Observable<ListResponseModel<Brand>> {
    return this.httpClient.get<ListResponseModel<Brand>>(`${this.apiControllerUrl}`, {
      params: { page, pageSize }
    });
  }

  getById(id: number): Observable<Brand> {
    return this.httpClient.get<Brand>(`${this.apiControllerUrl}/${id}`);
  }

  add(brand: Brand): Observable<Brand> {
    return this.httpClient.post<Brand>(`${this.apiControllerUrl}`, brand);
  }

  update(brand: Brand): Observable<Brand> {
    return this.httpClient.put<Brand>(`${this.apiControllerUrl}`, brand);
  }

  delete(brand: Brand): Observable<Brand> {
    return this.httpClient.delete<Brand>(`${this.apiControllerUrl}`, { body: brand });
  }
}
