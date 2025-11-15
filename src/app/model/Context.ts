import { AbstractControl } from "@angular/forms";

export interface Context {
  push(arg0: { name: boolean | undefined; appId: AbstractControl<any, any> | null; buId: AbstractControl<any, any> | null; sbuId: AbstractControl<any, any> | null; dataSubjectCategory: AbstractControl<any, any> | null; country: AbstractControl<any, any> | null; netsRole: AbstractControl<any, any> | null; retentionPeriod: AbstractControl<any, any> | null;contextId: AbstractControl<any, any> | null; }): unknown;
  
  name: string;
  dataSubjectCategory: string;
  appId: string;
  buId: string;
  subId: string;
  ruleId: string;
  country: string;
  netsRole: string;
  retentionPeriod: string;
  contextId: number;
}
