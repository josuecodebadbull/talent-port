import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  readonly UnSubscribe: Subject<void> = new Subject<void>();

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.getDataGrid();
  }

  getDataGrid() {
    const { employeeService, UnSubscribe } = this;
    employeeService
      .getEmployee()
      .pipe(takeUntil(UnSubscribe))
      .subscribe((resp: any) => {
        console.log(resp);
      });
  }

}
