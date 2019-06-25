import { Injectable } from '@angular/core';
import { Task } from './classes'
@Injectable({
  providedIn: 'root'
})
export class TaskService {
    tasks: Task[] = [
        new Task('a'),
        new Task('b')
    ]
  constructor() { }

    public getTasks() {
        return this.tasks
    }
}
