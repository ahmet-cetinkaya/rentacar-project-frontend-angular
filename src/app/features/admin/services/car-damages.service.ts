import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from 'app/core/models/listResponseModel';
import { CarDamage, CarDamageListModel } from 'app/shared/models/carDamage';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarDamagesService {
  apiControllerUrl = `${environment.apiUrl}/CarDamages`;

  constructor(private httpClient: HttpClient) {}

  getList(
    page: number = 0,
    pageSize: number = 10
  ): Observable<ListResponseModel<CarDamageListModel>> {
    return this.httpClient.get<ListResponseModel<CarDamageListModel>>(`${this.apiControllerUrl}`, {
      params: { page, pageSize }
    });
  }

  getListByCarId(carId: number): Observable<ListResponseModel<CarDamageListModel>> {
    return this.httpClient.get<ListResponseModel<CarDamageListModel>>(
      `${this.apiControllerUrl}/ByCarId/${carId}`
    );
  }

  getById(id: number): Observable<CarDamage> {
    return this.httpClient.get<CarDamage>(`${this.apiControllerUrl}/${id}`);
  }

  add(model: CarDamage): Observable<CarDamage> {
    return this.httpClient.post<CarDamage>(`${this.apiControllerUrl}`, model);
  }

  update(model: CarDamage): Observable<CarDamage> {
    return this.httpClient.put<CarDamage>(`${this.apiControllerUrl}`, model);
  }

  delete(model: CarDamage): Observable<CarDamage> {
    return this.httpClient.delete<CarDamage>(`${this.apiControllerUrl}`, { body: model });
  }
}
