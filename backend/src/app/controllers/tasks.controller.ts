import { Controller, Get } from '@nestjs/common';
import { TasksService } from '../services';

@Controller()
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  async getTasks() {
    return await this.tasksService.getAllTasks();
  }
}
