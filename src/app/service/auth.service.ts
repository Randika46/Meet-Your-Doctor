import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

// import { Console } from 'node:console';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
 


  constructor(
    private http:HttpClient
  ) { }

  registerDoc(addDoctor :any){

    return this.http.post<any>( "http://localhost:8080/doctor/add",addDoctor).pipe(map(res=>res));
    
  }

  registerPatient(addPatient :any){

    return this.http.post<any>( "http://localhost:8080/patient/add",addPatient).pipe(map(res=>res));
    
  }



loginUser(user :any){
  return this.http.post<any>( "http://localhost:8080/login",user).pipe(map(res=>res));
}

Data:any

sendProfile(userProfile:any){
this.Data=userProfile
}
getProfile(){
  return this.Data;
}

logout(){
  this.Data.clear()
}

newAppointmentAdd(addPatient : any){
  return this.http.post<any>( "http://localhost:8080/appointment/add",addPatient).pipe(map(res=>res));
}

search(user:any){
  return this.http.post<any>( "http://localhost:8080/search",user).pipe(map(res=>res));
}




}
