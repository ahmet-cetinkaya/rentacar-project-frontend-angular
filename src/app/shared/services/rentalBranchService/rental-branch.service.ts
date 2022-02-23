import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from 'app/core/models/listResponseModel';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { RentalBranch } from '../../models/rentalBranch';

@Injectable({
  providedIn: 'root'
})
export class RentalBranchService {
  apiControllerUrl = `${environment.apiUrl}/RentalBranches`;

  constructor(private httpClient: HttpClient) {}

  getList(page: number = 0, pageSize: number = 10): Observable<ListResponseModel<RentalBranch>> {
    return this.httpClient.get<ListResponseModel<RentalBranch>>(`${this.apiControllerUrl}`, {
      params: { page, pageSize }
    });
  }

  getById(id: number): Observable<RentalBranch> {
    return this.httpClient.get<RentalBranch>(`${this.apiControllerUrl}/${id}`);
  }

  add(rentalBranch: RentalBranch): Observable<RentalBranch> {
    return this.httpClient.post<RentalBranch>(`${this.apiControllerUrl}`, rentalBranch);
  }

  update(rentalBranch: RentalBranch): Observable<RentalBranch> {
    return this.httpClient.put<RentalBranch>(`${this.apiControllerUrl}`, rentalBranch);
  }

  delete(rentalBranch: RentalBranch): Observable<RentalBranch> {
    return this.httpClient.delete<RentalBranch>(`${this.apiControllerUrl}`, { body: rentalBranch });
  }
}
