import { Controller, Get } from '@nestjs/common';
import { ITask } from '@task-manager/shared-lib';
import { TasksService } from '../services';

@Controller()
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get('tasks')
  async getTasks(): Promise<ITask[]> {
    return await this.tasksService.getAllTasks();
  }
}
