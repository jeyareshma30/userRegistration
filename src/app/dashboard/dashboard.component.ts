import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginService } from '../user-login.service';
import { user } from '../Model/iUser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  usrlst:any;
  userList:user[] | undefined;
Date1 : Date = new Date();
  signupUser:any[]=[];
  signup:any={
   email:'',
   password:''
 };
  constructor( private router: Router,private usrloginServ:UserLoginService) { }

 ngOnInit(): void {
  this.usrlst=this.usrloginServ.userList;
  this.userList=this.usrlst;}
  addUser()
  {
    this.usrloginServ.userList.push({
      email:this.signup.email,
      password:this.signup.password
    });
  }
}

