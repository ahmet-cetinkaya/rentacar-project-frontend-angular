import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from 'app/core/models/listResponseModel';
import { Color } from 'app/shared/models/color';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiControllerUrl = `${environment.apiUrl}/colors`;

  constructor(private httpClient: HttpClient) {}

  getList(page: number = 0, pageSize: number = 10): Observable<ListResponseModel<Color>> {
    return this.httpClient.get<ListResponseModel<Color>>(`${this.apiControllerUrl}`, {
      params: { page, pageSize }
    });
  }

  getById(id: number): Observable<Color> {
    return this.httpClient.get<Color>(`${this.apiControllerUrl}/${id}`);
  }
  add(color: Color): Observable<Color> {
    return this.httpClient.post<Color>(`${this.apiControllerUrl}`, color);
  }

  update(color: Color): Observable<Color> {
    return this.httpClient.put<Color>(`${this.apiControllerUrl}`, color);
  }

  delete(color: Color): Observable<Color> {
    return this.httpClient.delete<Color>(`${this.apiControllerUrl}`, { body: color });
  }
}
