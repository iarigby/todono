import { Component, OnInit } from '@angular/core';
import { Task } from '../classes'
import { TaskService } from '../task.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    tasks: Task[]
    constructor(private taskService: TaskService) {
    }

  ngOnInit() {
        this.tasks = this.taskService.getTasks()
  }

}
