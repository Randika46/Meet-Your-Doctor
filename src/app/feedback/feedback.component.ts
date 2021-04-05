import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {


  msg:any;

  comment=new FormControl;
  rating=new FormControl;
  doctorObId=new FormControl;


  patentDetail:any

  constructor(
    private authService:AuthService
  ) { }

  ngOnInit(): void {
    this.patentDetail=this.authService.getProfile()
  }


  commentfunc(){

    const feedbackDetail={
      comment:this.comment.value,
      rate:this.rating.value,
      patientId:this.patentDetail.details._id,
      doctorId:this.doctorObId.value
      //"605c84c2ffd712583856b73f"
    }
    console.log(feedbackDetail)
    this.authService.sendFeedback(feedbackDetail).subscribe(res=>{
      (this.msg=res.message)
      console.log(res)
    })  


  }




}
