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
  mappingForm!: FormGroup;
  jobForm!: FormGroup;
  selectedBU: string = '1'; // Initial selected value
  @ViewChild('stepper')
  stepper!: MatStepper;
  context!: Context;
  successSummary: boolean = true;

  contextCreated: boolean = false;
  ruleCreated: boolean = false;
  mappingCreated: boolean = false;
  jobCreated: boolean = false;
  contextSubmitted: boolean = false;

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
      targetDataObject: new FormControl('', [Validators.required]),
      ruleId: new FormControl('')
    });
    this.mappingForm = new FormGroup({
      contextId: new FormControl('', Validators.required)
    });
    this.jobForm = new FormGroup({
      name: new FormControl('', Validators.required),
      buId: new FormControl('', [Validators.required]),
      sbuId: new FormControl('', [Validators.required]),
      appId: new FormControl('', [Validators.required]),
      frequency: new FormControl('', [Validators.required]),
      expiry: new FormControl('', [Validators.required]),
      emailList: new FormControl('', [Validators.required]),
      ruleId: new FormControl(''),
      automatic: new FormControl(false, [Validators.required]),
      readyForExecution: new FormControl(false, [Validators.required])     
    });
  }

  submitContextForm() {
    this.contextSubmitted = true;
    if (this.contextForm.valid) {
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
          this._snackBar.open("Rule is created - "+result, "close");
          this.ruleCreated = true;
          this.ruleForm.get("ruleId")?.setValue(result);
          this.ruleForm.reset;
          this.jobForm.get("ruleId")?.setValue(result);
          this.jobForm.get("buId")?.setValue(this.ruleForm.get("buId")?.value);
          this.jobForm.get("sbuId")?.setValue(this.ruleForm.get("sbuId")?.value);
          this.jobForm.get("appId")?.setValue(this.ruleForm.get("appId")?.value);
      });
      
      //this.stepper.next();
    }
  }

  submitContextRuleMappingForm() {
    if (this.mappingForm.valid) {
      let formData = this.mappingForm.value;
      this.commonService.updateContext(this.mappingForm.get("contextId")?.value, this.ruleForm.get("ruleId")?.value).subscribe(result=>{
          this._snackBar.open("Mapping created", "close");
          this.mappingCreated = true;
          this.mappingForm.reset;
      });
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
