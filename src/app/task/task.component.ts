import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../classes'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent {
    @Input() task: Task;
  constructor() {
  }


}
