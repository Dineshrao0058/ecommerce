import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
  
})
export class UserService {
usersData: any[] = [];

  constructor(private http:HttpClient) { }
addUser(){
  
}
loginUser(uname:any,pwd:any){}

signupUser(data:any){
  return this.http.post('http://localhost:3000/Users',data)
}
getUsers(){
  return this.http.get('http://localhost:3000/Users')
}
}
