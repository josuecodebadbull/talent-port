import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { EmployeesService } from 'src/app/pages/employee/services/employee.service';

@Component({
  selector: 'app-form-employee',
  templateUrl: './form-employee.component.html',
  styleUrls: ['./form-employee.component.scss']
})
export class FormEmployeeComponent implements OnInit {

  @Output() successAddEmployee = new EventEmitter<any>();
  minDate = new Date(1960, 0, 1);
  maxDate = new Date();
  employee_form: FormGroup;
  loading: boolean;
  readonly UnSubscribe: Subject<void> = new Subject<void>();

  constructor(
    private fbEmployee: FormBuilder,
    private EmployeesService: EmployeesService
  ) { }

  ngOnInit(): void {
    this.loading = false;
    this.employee_form = this.fbEmployee.group({
      name: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      last_name: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      birthday: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    this.loading = true;
    if (this.employee_form.invalid) {
      return;
    }
    const { EmployeesService, UnSubscribe } = this;
    EmployeesService
      .addEmployee(this.employee_form.value)
      .pipe(takeUntil(UnSubscribe))
      .subscribe((resp: any) => {
        this.successAddEmployee.emit();
        this.loading = false;
        this.employee_form.reset({ emitEvent: false });
      });
  }

}
