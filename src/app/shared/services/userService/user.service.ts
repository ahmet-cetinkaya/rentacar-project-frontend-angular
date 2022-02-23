import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { UpdatedUserFromAuthDto, User, UserForUpdateFromAuthDto } from '../../../core/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiControllerUrl = `${environment.apiUrl}/Users`;

  constructor(private httpClient: HttpClient) {}

  getFromAuth(): Observable<User> {
    return this.httpClient.get<User>(`${this.apiControllerUrl}/GetFromAuth`);
  }

  updateFromAuth(
    userForUpdateFromAuthDto: UserForUpdateFromAuthDto
  ): Observable<UpdatedUserFromAuthDto> {
    return this.httpClient.put<UpdatedUserFromAuthDto>(
      `${this.apiControllerUrl}/FromAuth`,
      userForUpdateFromAuthDto
    );
  }
}
