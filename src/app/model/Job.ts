import { AbstractControl } from "@angular/forms";

export interface Job {
  push(arg0: {
    name: boolean | undefined; appId: AbstractControl<any, any>
      | null; buId: AbstractControl<any, any> | null; sbuId: AbstractControl<any, any>
      | null; frequency: AbstractControl<any, any>
      | null; expiry: AbstractControl<any, any>
      | null;
    ruleId: AbstractControl<any, any> | null;
    jobId: AbstractControl<any, any> | null;
    automatic: AbstractControl<any, any> | null;
    readyForExecution: AbstractControl<any, any> | null;
    active: AbstractControl<any, any> | null;
    emailList: AbstractControl<any, any> | null;
  }): unknown;

  name: string;
  appId: string;
  buId: string;
  subId: string;
  frequency: string;
  expiry: string;
  ruleID: number;
  jobId: number;
  automatic: boolean;
  readyForExecution: boolean;
  active: boolean;
  emailList: String;

}
