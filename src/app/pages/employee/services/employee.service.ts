import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  readonly url = environment.endpoint;

  constructor(private http: HttpClient) { }

  getEmployee() {
    return this.http.get(`${environment.url}${this.url.employee.get.employee}`);
  }

}
