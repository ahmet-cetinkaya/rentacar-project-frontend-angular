import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from 'app/core/models/listResponseModel';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Car, CarListModel } from '../../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiControllerUrl = `${environment.apiUrl}/Cars`;

  constructor(private httpClient: HttpClient) {}

  getList(page: number = 0, pageSize: number = 10): Observable<ListResponseModel<CarListModel>> {
    return this.httpClient.get<ListResponseModel<CarListModel>>(`${this.apiControllerUrl}`, {
      params: { page, pageSize }
    });
  }

  getById(id: number): Observable<Car> {
    return this.httpClient.get<Car>(`${this.apiControllerUrl}/${id}`);
  }
  add(car: Car): Observable<Car> {
    return this.httpClient.post<Car>(`${this.apiControllerUrl}`, car);
  }

  update(car: Car): Observable<Car> {
    return this.httpClient.put<Car>(`${this.apiControllerUrl}`, car);
  }

  delete(car: Car): Observable<Car> {
    return this.httpClient.delete<Car>(`${this.apiControllerUrl}`, { body: car });
  }
}
