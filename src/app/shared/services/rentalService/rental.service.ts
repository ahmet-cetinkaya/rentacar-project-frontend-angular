import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from 'app/core/models/listResponseModel';
import { Rental, RentalList } from 'app/shared/models/rental';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { CreateRentalDto } from '../../dtos/createRentalDto';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiControllerUrl = `${environment.apiUrl}/rentals`;

  constructor(private httpClient: HttpClient) {}

  add(createRentalDto: CreateRentalDto): Observable<Rental> {
    return this.httpClient.post<Rental>(`${this.apiControllerUrl}`, createRentalDto);
  }

  getList(page: number = 0, pageSize: number = 10): Observable<ListResponseModel<RentalList>> {
    return this.httpClient.get<ListResponseModel<RentalList>>(`${this.apiControllerUrl}`, {
      params: { page, pageSize }
    });
  }
}
