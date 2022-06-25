import { CdkDragDrop, CdkDragEnter, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { GroupsService } from './services/groups.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  groups: any;
  employeesListDrop = new Array;
  employeesSelectedList = new Array;

  readonly UnSubscribe: Subject<void> = new Subject<void>();


  constructor(
    private groupsService: GroupsService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    const { groupsService, UnSubscribe } = this;
    groupsService
      .getGroups()
      .pipe(takeUntil(UnSubscribe))
      .subscribe((resp: any) => {
        const { data: { groups } } = resp;
        this.groups = groups
      });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      this.searchEmployees(event.container.data, event.currentIndex)
    }
  }


  searchEmployees(array: any, position: any) {
    const { groupsService, UnSubscribe } = this;
    const group = array[position];
    const { id } = group;
    const that = this;
    groupsService
      .getListEmployeesByIdGroup(id)
      .pipe(takeUntil(UnSubscribe))
      .subscribe({
        next(resp: any) {
          const { data: { employees } } = resp;
          const employeesMo = employees.map(
            (x: any) => {
              return ({ ...x, active: true })
            }
          );
          that.employeesListDrop[position].employees = employeesMo;
        },
        error(err) {
          alert('Ups algo falló')
        }
      });
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    const result = this.groups.filter((x: any) => x.name.includes(filterValue))
    this.groups = result;
  }


  changeStatus(check: boolean, indexGroup: any, indexEmployee: any) {
    this.employeesListDrop[indexGroup].employees[indexEmployee].active = check;
    console.log(this.employeesListDrop);
  }

  showEmployeesSelected() {
    this.employeesSelectedList = [];
    let employeesSelected = new Array;
    this.employeesListDrop.map(
      (x: any) => {
        if (x.employees) {
          x.employees.map(
            (y: any) => {

              if (y.active) {
                employeesSelected.push({ ...y });
              }
            }
          );
        }
      }
    );
    this.employeesSelectedList = employeesSelected;
    console.log('Empleados Seleccionados');    
    console.log(this.employeesSelectedList);
    
  }


}
