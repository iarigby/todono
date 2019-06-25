import { Component, OnInit } from '@angular/core';
import { Task, ScheduleOption } from '../classes'
import { TaskService } from '../task.service'
@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

    tasks: Task[]
    constructor(private taskService: TaskService) { }

  ngOnInit() {
  }
    listBefore() {this.list(ScheduleOption.Before)}
    listAfter() {this.list(ScheduleOption.After)}
    list(option: ScheduleOption) {
        this.tasks = this.taskService.getTasks()
    }

}
