import { Component, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'; // Import form classes
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatStepper } from '@angular/material/stepper';


@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.scss']
})
export class CreateJobComponent {
  title = 'Create Job';
  contextForm!: FormGroup;
  ruleForm!: FormGroup;
  selectedBU: string = '1'; // Initial selected value
  @ViewChild('stepper')
  stepper!: MatStepper;

  successSummary: boolean = true;

  buIdMap = [
    { value: '1', label: 'Merchant' },
    { value: '2', label: 'Security Services' },
    { value: '3', label: 'Onboarding' }
  ];

  dataTypeMap = [
    { value: '1', label: 'Merchant' },
    { value: '2', label: 'Payments' }
  ];

  applicationMap = [
    { value: '81', label: 'My Test Application 1' },
    { value: '65', label: 'My Test Application 2' }
  ];

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.contextForm = new FormGroup({
      name: new FormControl('', Validators.required),
      dataSubCategory: new FormControl('', [Validators.required]),
      buId: new FormControl('', [Validators.required]),
      message: new FormControl('', Validators.minLength(5))
    });
    this.ruleForm = new FormGroup({
      name: new FormControl('', Validators.required),
      integrationType: new FormControl('', [Validators.required]),
      retentionPeriod: new FormControl('', [Validators.required]),
      dataType: new FormControl('', [Validators.required]),
      applicationId: new FormControl('', [Validators.required]),
      buId: new FormControl('', [Validators.required])
    });
  }

  submitFirstStep() {
    if (this.contextForm.valid) {
      this._snackBar.open("Context is created id - 201", "close");
      this.stepper.next();
    }
  }

  submitSecondStep() {
    if (this.ruleForm.valid) {
      this._snackBar.open("Rule is created id - 101", "close");
      this.stepper.next();
    }
  }

  onSubmit(): void {
    if (this.contextForm.valid) {
      console.log('Form Submitted!', this.contextForm.value);
      // Handle form submission logic here
      this._snackBar.open("Context is created id - 201", "close");
      //this.stepper?.selected?.completed = true;
      //this.stepper.selected.completed = true;
    } else {
      console.log('Form is invalid.');
      // Optionally, mark all fields as touched to display errors
      this.contextForm.markAllAsTouched();
    }
  }
}
