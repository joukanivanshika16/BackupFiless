import { Injectable } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {

  constructor(private fb:FormBuilder,private http:HttpClient) {}
    readonly APIUrl="";
  

    formModel=this.fb.group({
      AppoinmentID:['',Validators.required],
     
    })
   
   login(formData:any){
return this.http.post(this.APIUrl,'/login',formData)
   }
  }
