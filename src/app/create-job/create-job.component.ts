import { Component, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'; // Import form classes
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatStepper } from '@angular/material/stepper';
import { CommonService } from '../service/common.service';
import { Context } from '../model/Context';


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
  context!: Context;
  successSummary: boolean = true;

  contextCreated: boolean = false;
  ruleCreated: boolean = false;

  buIdMap = [
    { value: '1', label: 'Merchant' },
    { value: '2', label: 'Security Services' },
    { value: '3', label: 'Onboarding' }
  ];

  sbuIdMap = [
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

  constructor(private _snackBar: MatSnackBar, public commonService: CommonService) { }

  ngOnInit(): void {
    this.contextForm = new FormGroup({
      name: new FormControl('', Validators.required),
      dataSubCategory: new FormControl('', [Validators.required]),
      buId: new FormControl('', [Validators.required]),
      sbuId: new FormControl('', [Validators.required]),
      appId: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      netsRole: new FormControl('', [Validators.required]),
      retentionPeriod: new FormControl('', [Validators.required])
    });
    this.ruleForm = new FormGroup({
      name: new FormControl('', Validators.required),
      buId: new FormControl('', [Validators.required]),
      sbuId: new FormControl('', [Validators.required]),
      appId: new FormControl('', [Validators.required]),
      ruleDocLink: new FormControl('', [Validators.required]),
      targetDataObject: new FormControl('', [Validators.required])
    });
  }

  submitContextForm() {
    if (this.contextForm.valid) {
      /*this.context.push({
        'name':this.contextForm?.get('name')?.value,
        'appId':this.contextForm.get('appId')?.value,
        'buId':this.contextForm.get('buId')?.value,
        'sbuId':this.contextForm.get('sbuId')?.value,
        'dataSubjectCategory':this.contextForm.get('dataSubjectCategory')?.value,
        'country':this.contextForm.get('country')?.value,
        'netsRole':this.contextForm.get('netsRole')?.value,
        'retentionPeriod':this.contextForm.get('retentionPeriod')?.value
      });*/

      let formData = this.contextForm.value;
      this.commonService.createContext(formData).subscribe(result=>{
          this._snackBar.open(result, "close");
          this.contextCreated = true;
          this.contextForm.reset;
      });
      
      //this.stepper.next();
    }
  }

  submitRuleForm() {
    if (this.ruleForm.valid) {
      let formData = this.ruleForm.value;
      this.commonService.createRule(formData).subscribe(result=>{
          this._snackBar.open(result, "close");
          this.ruleCreated = true;
          this.ruleForm.reset;
      });
      
      //this.stepper.next();
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
