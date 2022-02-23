import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from 'app/core/models/listResponseModel';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Transmission } from '../../models/transmission';

@Injectable({
  providedIn: 'root'
})
export class TransmissionService {
  apiControllerUrl = `${environment.apiUrl}/transmissions`;

  constructor(private httpClient: HttpClient) {}

  getList(page: number = 0, pageSize: number = 10): Observable<ListResponseModel<Transmission>> {
    return this.httpClient.get<ListResponseModel<Transmission>>(`${this.apiControllerUrl}`, {
      params: { page, pageSize }
    });
  }

  getById(id: number): Observable<Transmission> {
    return this.httpClient.get<Transmission>(`${this.apiControllerUrl}/${id}`);
  }

  add(transmission: Transmission): Observable<Transmission> {
    return this.httpClient.post<Transmission>(`${this.apiControllerUrl}`, transmission);
  }

  update(transmission: Transmission): Observable<Transmission> {
    return this.httpClient.put<Transmission>(`${this.apiControllerUrl}`, transmission);
  }

  delete(transmission: Transmission): Observable<Transmission> {
    return this.httpClient.delete<Transmission>(`${this.apiControllerUrl}`, { body: transmission });
  }
}
