import { Controller, Get } from '@nestjs/common';
import { TasksService } from '../services';
import { ITask } from '@task-manager/shared-lib';

@Controller()
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  async getTasks(): Promise<ITask[]> {
    return await this.tasksService.getAllTasks();
  }
}
