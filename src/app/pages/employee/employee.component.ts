import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { EmployeesService } from './services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeesComponent implements OnInit , OnDestroy{

  readonly UnSubscribe: Subject<void> = new Subject<void>();
  list : any ;

  constructor(
    private employeesService: EmployeesService
  ) { }

  ngOnInit(): void {
    this.getDataGrid();
  }

  ngOnDestroy() {
    this.UnSubscribe.next();
    this.UnSubscribe.complete();
  }

  getDataGrid() {
    const { employeesService, UnSubscribe } = this;
    employeesService
      .getEmployees()
      .pipe(takeUntil(UnSubscribe))
      .subscribe((resp: any) => {
        const { data : { employees}} = resp;
        this.list = employees;
      });
  }

  refreshData(){
    this.getDataGrid();
  }

}
