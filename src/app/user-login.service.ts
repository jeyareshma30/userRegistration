import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { user } from './Model/iUser';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  constructor(private router :Router) { }
  public userList:user[]=[];
}
