import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { EmployeesService } from './services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeesComponent implements OnInit {

  readonly UnSubscribe: Subject<void> = new Subject<void>();
  list : any ;

  constructor(
    private EmployeesService: EmployeesService
  ) { }

  ngOnInit(): void {
    this.getDataGrid();
  }

  getDataGrid() {
    const { EmployeesService, UnSubscribe } = this;
    EmployeesService
      .getEmployees()
      .pipe(takeUntil(UnSubscribe))
      .subscribe((resp: any) => {
        const { data : { employees}} = resp;
        this.list = employees;
      });
  }

}
