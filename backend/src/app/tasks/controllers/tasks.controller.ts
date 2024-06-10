import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTaskDto, ITask, UpdateTaskDto } from '@task-manager/shared-lib';
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

  @Post('task/create')
  async createTask(@Body() createTaskDto: CreateTaskDto): Promise<ITask> {
    return this.tasksService.createTask(createTaskDto);
  }

  @Put('task/:id')
  async updateTask(
    @Body() updateTaskDto: UpdateTaskDto,
    @Param('id') id: string,
  ): Promise<ITask> {
    return this.tasksService.updateTask(updateTaskDto, Number(id));
  }

  @Delete('task/:id')
  async deleteTask(@Param('id') id: string): Promise<ITask> {
    return this.tasksService.deleteTask(Number(id));
  }
}
