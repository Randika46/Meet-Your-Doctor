import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms'
import { Router } from '@angular/router';
import{AuthService} from '../service/auth.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  msg:any;
 
  user:any;

 getmyappointment:any;

 getapprove:boolean=true;

isDoctor:boolean=false;

approvedId=new FormControl
 

  constructor(
    private authService: AuthService,
    private router:Router
    ) { }

  ngOnInit(): void {
  this.user=this.authService.getProfile()

if(this.user.details.specialities){
  this.isDoctor=true
  console.log(this.isDoctor +"_doctor")
}



  const userId ={
    id:this.user.details.id

  }

  this.authService.getMyAppointmentDetails(userId).subscribe(res=>{
    
    this.getmyappointment=res.details,
    this.getapprove=res.details.approve
    console.log(this.getmyappointment.approve)
  })
  
  
    
  }
   
  logout(){
    this.router.navigate(['/'])
    this.authService.logout()
    this.user.clear()
    

  }





  approvedAppointment(){

const appointmentId={
  _id:this.approvedId.value
}

    this.authService.approvedAppointment(appointmentId).subscribe(res=>{
      console.log(res)
      this.msg=res.message
      
    })
  }
 


}

  

