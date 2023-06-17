import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from '../Model/iUser';
import { UserLoginService } from '../user-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  usrlst:any;
  userList:user[] | undefined;
Date1 : Date = new Date();
  signupUser:any[]=[];
  loginObj:any={
   email:'',
   password:'',
 };
 
  constructor( private router: Router,private usrloginServ:UserLoginService) { }

 ngOnInit(): void {
  this.usrlst=this.usrloginServ.userList;
  this.userList=this.usrlst;
   const localData=localStorage.getItem('signUpUser');
   if(localData != null){
     this.signupUser=JSON.parse(localData);
   }
 }
 
onLogin(login:NgForm){
const token= this.signupUser.find(r=>r.email==this.loginObj.email && r.password==this.loginObj.password);
if(token)
{
 localStorage.setItem('token',token.email)
 alert('User Login Successfully');
 this.router.navigate(['/dashboard'])
 }
 else
 {
  alert('Wrong credentials');
 }
}
addUser()
  {
    this.usrloginServ.userList.push({
      email:this.loginObj.email,
      password:this.loginObj.password,
    });
  }

}


