import { Component,NgModule } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  signupUser:any[]=[];
  signup:any={
    fullName:'',
    position:'',
    email:'',
    mobile:'',
    country:'',
    city:'',
    password:'',
    confirmPassword:'',
    gender:''
  };
  constructor(){}
  ngOnInit(): void {
    const localData=localStorage.getItem('signUpUser');
    if(localData != null){
      this.signupUser=JSON.parse(localData);
    }
  }
  onSignUp(){
this.signupUser.push(this.signup);
localStorage.setItem('signUpUser',JSON.stringify(this.signupUser));
 
this.signup={
  fullName:'',
  position:'',
    email:'',
    mobile:'',
    country:'',
    city:'',
    password:'',
    confirmPassword:'',
    gender:'',

};}
onSubmit(register: any)
{

}
}
  



