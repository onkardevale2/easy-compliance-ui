import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Context } from '../model/Context';
import { Rule } from '../model/Rule';

// Define an interface for the data you expect (optional but recommended)
export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private apiUrl = 'http://localhost:8080'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  getAllContexts(): Observable<Context[]> {
    return this.http.get<Context[]>(this.apiUrl+"/api/context");
  }

  getAllRules(): Observable<Rule[]> {
    return this.http.get<Rule[]>(this.apiUrl+"/api/rule");
  }

  createContext(context: any): Observable<any> {
    return this.http.post(this.apiUrl+"/api/context", context, {responseType: 'text'}) 
    ;
  }

  createRule(rule: any): Observable<any> {
    return this.http.post(this.apiUrl+"/api/rule", rule, {responseType: 'text'}) 
    ;
  }

  updateContext(contextId:any, ruleId: any): Observable<any> {
    return this.http.get(this.apiUrl+"/api/context/map?ruleId="+ruleId+"&contextId="+contextId, {responseType: 'text'});
  }
}