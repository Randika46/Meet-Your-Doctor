import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms'
import{AuthService} from '../service/auth.service'
import{Router} from '@angular/router'
import { HttpErrorResponse } from '@angular/common/http';





@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  email=new FormControl;
  password=new FormControl;

  
  userProfile:any;

  isLoginError:boolean=false;
  public msg = [];
  

    constructor(
      public authService:AuthService,
      private router:Router,

    ) {}
    alert:boolean=false
    ngOnInit(): void {

    }
  
    register(){
  
    const user ={
      email:this.email.value,
      password:this.password.value,


    };

    this.authService.loginUser(user).subscribe(res=>{
    
      this.userProfile=res,
      console.log(this.userProfile),
      (this.msg=res.message)
      if(res.state){
        this.authService.sendProfile(this.userProfile)
         this.router.navigate(['/profile'])
        this.alert=false;
        
      }else{
        this.alert=true
      
      }
    }) ;
    
    
    
  
  }
}
