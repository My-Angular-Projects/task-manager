import { Controller, Delete, Get, Param } from '@nestjs/common';
import { ITask } from '@task-manager/shared-lib';
import { TasksService } from '../services';

@Controller()
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get('tasks')
  async getTasks(): Promise<ITask[]> {
    return await this.tasksService.getAllTasks();
  }

  @Get('task/:id')
  async getTask(@Param('id') id: number): Promise<ITask> {
    return this.tasksService.getOneTask(id);
  }

  @Delete('task/:id')
  async deleteTask(@Param('id') id: number): Promise<ITask> {
    return this.tasksService.deleteTask(id);
  }
}
