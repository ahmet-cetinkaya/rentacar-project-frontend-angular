import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from 'app/core/models/listResponseModel';
import { Model, ModelList } from 'app/shared/models/model';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  apiControllerUrl = `${environment.apiUrl}/models`;

  constructor(private httpClient: HttpClient) {}

  getList(page: number = 0, pageSize: number = 10): Observable<ListResponseModel<ModelList>> {
    return this.httpClient.get<ListResponseModel<ModelList>>(`${this.apiControllerUrl}`, {
      params: { page, pageSize }
    });
  }

  getById(id: number): Observable<Model> {
    return this.httpClient.get<Model>(`${this.apiControllerUrl}/${id}`);
  }

  add(model: Model): Observable<Model> {
    return this.httpClient.post<Model>(`${this.apiControllerUrl}`, model);
  }

  update(model: Model): Observable<Model> {
    return this.httpClient.put<Model>(`${this.apiControllerUrl}`, model);
  }

  delete(model: Model): Observable<Model> {
    return this.httpClient.delete<Model>(`${this.apiControllerUrl}`, { body: model });
  }
}
