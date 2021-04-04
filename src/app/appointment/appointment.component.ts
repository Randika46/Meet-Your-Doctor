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

  docProfiles: any;
  selectDoc:any;
  

  msg :any;
  alert:boolean=false;
  
  user:any;
  doctorId:any


  
  date=new FormControl;
  time= new FormControl;
  
  


  constructor(
    public authService:AuthService,
    private router:Router, ) { }

  ngOnInit(

  ): void {
    this.user=this.authService.getProfile()
    console.log(this.user.details._id);
  }

  search(){
  
    console.log(this.selectDoc)
  const user ={
    name:this.name.value,
  
  };

  this.authService.search(user).subscribe(res=>{
    
    
    this.docProfiles=res.details,
    this.msg=res.message
    if(res.state){
      
      this.alert=false;
      
    }else{
      this.alert=true
    }
  }) 

}



  newAppointment(){

   
    const addPatient ={
      date:"this.date.value",
      id:"fdgzdfghzdfh",
      time:"this.time.value",
      doctorId:"this.doctorId.value",
      patientId:"this.user.details.id.value",
      // paymentId:"fghjhgj"

    }

    console.log(addPatient)

      this.authService.newAppointmentAdd(addPatient).subscribe(res=>{
        console.log(res)
        this.msg=res.message
        if(res.state){
          
          this.alert=false;
          
        }else{
          this.alert=true
        }

      })
  }







}
