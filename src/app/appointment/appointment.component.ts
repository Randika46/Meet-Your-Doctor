import { Component, OnInit } from '@angular/core';
import { FormControl, NgSelectOption} from '@angular/forms'
import{AuthService} from '../service/auth.service'
import{Router} from '@angular/router'


@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  name=new FormControl;
  location=new FormControl;
  speciality=new FormControl;

  docProfiles: any;
  selectDoc:any;
  

  msg :any;
  alert:boolean=false;
  
  user:any;
  


  isapprove:boolean=false
  
  date=new FormControl;
  time= new FormControl;
  doctorId=new FormControl;
  
  userId: any;


  constructor(
    public authService:AuthService,
    private router:Router, ) { }

  ngOnInit(

  ): void {
    this.userId=this.authService.getProfile()
    console.log(this.userId.details.id);
  }

  search(){
  
  const user ={
    name:this.name.value,
    location:this.location,
    speciality:this.speciality
  
  };
  console.log(user)
  this.authService.search(user).subscribe(res=>{
    
    
    this.docProfiles=res.details,
    this.msg=res.message,
    console.log(res.message)

  }) 

}



  newAppointment(){

   
    const addPatient ={
      date:this.date.value,
      time:this.time.value,
      doctorId:this.doctorId.value,
      patientId:this.userId.details.id,
      paymentId:"fghjhgj",
      approve:this.isapprove

    }

    console.log(addPatient)

      this.authService.newAppointmentAdd(addPatient).subscribe(res=>{
        console.log(res)
        this.msg=res.message
        if(res.state){
          
          this.alert=true;
          
        }else{
          this.alert=false
        }

      })
  }







}
