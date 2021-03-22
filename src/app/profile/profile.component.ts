import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
Email=new FormControl
password=new FormControl
  constructor() { }

  ngOnInit(): void {
  }
show(){
  alert(this.Email.value)
  alert(this.password.value)
}
}
