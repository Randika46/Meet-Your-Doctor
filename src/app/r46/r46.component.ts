import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms'
import{AuthService} from '../service/auth.service'
import{Router} from '@angular/router'
import { HttpErrorResponse } from '@angular/common/http';




@Component({
  selector: 'app-r46',
  templateUrl: './r46.component.html',
  styleUrls: ['./r46.component.css']
})
export class R46Component implements OnInit {


  

  name=new FormControl;
  

  docProfiles: any;
  selectDoc:any;
  

  msg :any;
  alert:boolean=false;
  

    constructor(
      public authService:AuthService,
      private router:Router,

    ) {}
  
    ngOnInit(): void {
      

    }
  
    search(){
  
      console.log(this.selectDoc)
    const user ={
      name:this.name.value,
      



    };

    this.authService.search(user).subscribe(res=>{
      console.log(res),
      
      this.docProfiles=res.details,
      this.msg=res.message
      if(res.state){
        
        this.alert=false;
        
      }else{
        this.alert=true
      }
    }) 
  
  }




}
