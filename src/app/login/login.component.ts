import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedserviceService } from 'src/app/sharedservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formModel={
    UserName:'',
    Password:''
  }

  constructor(private service:SharedserviceService,private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
  this.service.login(form.value).subscribe(
(res:any)=>{
  localStorage.setItem('token',res.token)
  this.router.navigateByUrl('/dashboard')
},
err=>{
  if(err.status==400)
  {
this.toastr.error('Incorrect UserName or Password!','Authentication failed.')
  }
  else{
    console.log(err)
  } 
}
  );
  }
}