import { Component, OnInit } from '@angular/core';
export interface employee{
  id : string,
  name: string,
  Email:string,
  password:string
}

@Component({
  selector: 'app-abotus',
  templateUrl: './abotus.component.html',
  styleUrls: ['./abotus.component.css']
})
export class AbotusComponent implements OnInit {

employees:employee []=[
{id : '1',name:'Randika',Email:'ghdfgfaf@gmail.com',password:'1234'},
{id : '2',name:'Randik',Email:'ghdfgfaf@gmail.com',password:'1234'},
{id : '3',name:'Randi',Email:'ghdfgfaf@gmail.com',password:'1234'},
{id : '4',name:'Rand',Email:'ghdfgfaf@gmail.com',password:'1234'}

]


  constructor() { }

  ngOnInit(): void {
  }


}
