import { AbstractControl } from "@angular/forms";

export interface Rule {
  push(arg0: { name: boolean | undefined; appId: AbstractControl<any, any> 
    | null; buId: AbstractControl<any, any> | null; sbuId: AbstractControl<any, any> 
    | null; targetDataObject: AbstractControl<any, any> 
    | null; ruleDocLink: AbstractControl<any, any> 
    | null; ruleId: AbstractControl<any, any>
     | null; }): unknown;
  
  name: string;
  appId: string;
  buId: string;
  subId: string;
  targetDataObject: string;
  ruleDocLink: string;
  ruleID: number;
  
}
