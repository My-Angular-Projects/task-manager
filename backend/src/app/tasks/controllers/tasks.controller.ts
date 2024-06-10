import { Body, Controller, Delete, Get, Param, Put } from '@nestjs/common';
import { ITask, UpdateTaskDto } from '@task-manager/shared-lib';
import { TasksService } from '../services';

@Controller()
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get('tasks')
  async getTasks(): Promise<ITask[]> {
    return await this.tasksService.getAllTasks();
  }

  @Get('task/:id')
  async getTask(@Param('id') id: string): Promise<ITask> {
    return this.tasksService.getOneTask(Number(id));
  }

  @Put('task/:id')
  async updateTask(
    @Body('taskDto') updateTaskDto: UpdateTaskDto,
    @Param('id') id: string,
  ): Promise<ITask> {
    return this.tasksService.updateTask(Number(id), updateTaskDto);
  }

  @Delete('task/:id')
  async deleteTask(@Param('id') id: string): Promise<ITask> {
    return this.tasksService.deleteTask(Number(id));
  }
}
