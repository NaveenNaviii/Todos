import { Component, OnInit } from '@angular/core';
import { UserservicesService } from '../services/userservices.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  values:any
  temp:any
  constructor(private user:UserservicesService) { }


  ngOnInit(): void {
    this.user.getData().subscribe(data=>{
      this.values=data;
      this.temp=data;
    })
  }

  todoList(){
    this.temp=this.values.filter((result:{completed:boolean})=>result.completed===false);
  }

  completed(){
   this.temp=this.values.filter((result:{completed:boolean})=>result.completed===true);
  }

}
