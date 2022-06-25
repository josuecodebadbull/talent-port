import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  readonly url = environment.endpoint;

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get(`${environment.url}${this.url.employee.get.employees}`);
  }

  addEmployee(body: any) {
    return this.http.post(`${environment.url}${this.url.employee.post.employees}`, body);
  }

}
