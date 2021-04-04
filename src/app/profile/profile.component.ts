import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms'
import{AuthService} from '../service/auth.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
 user:any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  this.user=this.authService.getProfile()
  console.log(this.user);
    
  }
   
  logout(){
    this.authService.logout()
    this.user.clear()
  }

  


}

  

