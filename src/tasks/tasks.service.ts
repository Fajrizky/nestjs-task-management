import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = [];

  getAllTasks() {
    return this.tasks;
  }

  //   addTask(title: string, description: string): Task {
  //     const task: Task = {
  //       id: this.tasks.length + 1,
  //       title,
  //       description,
  //     };
  //     this.tasks.push(task);
  //     return task;
  //   }
}
