import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import {
  CreateTaskDto,
  TaskDto,
  UpdateTaskDto,
} from '@task-manager/shared-lib';

@Injectable()
export class TasksService {
  constructor(private readonly prismaService: PrismaService) {}

  /**
   * Get all tasks
   * @return Promise<TaskDto[]>
   */
  public async getAllTasks(): Promise<TaskDto[]> {
    return this.prismaService.task.findMany();
  }

  /**
   * Get one task
   * @param {number} id Task id
   * @return Promise<TaskDto>
   */
  public async getOneTask(id: number): Promise<TaskDto> {
    const task: TaskDto = await this.prismaService.task.findUnique({
      where: { id },
    });

    if (!task) {
      return;
    }

    return this.prismaService.task.findUnique({
      where: { id },
    });
  }

  /**
   * Update task
   * @param {UpdateTaskDto} updateTaskDto Task payload
   * @param {number} id Task id
   * @return Promise<TaskDto>
   */
  public async updateTask(
    updateTaskDto: UpdateTaskDto,
    id: number,
  ): Promise<TaskDto> {
    const task: TaskDto = await this.prismaService.task.findUnique({
      where: { id },
    });

    if (!task) {
      return;
    }

    return this.prismaService.task.update({
      where: { id },
      data: {
        title: updateTaskDto.title,
        content: updateTaskDto.content,
      },
    });
  }

  /**
   * Create new task
   * @param {CreateTaskDto} createTaskDto New task
   * @return Promise<TaskDto>
   */
  public async createTask(createTaskDto: CreateTaskDto): Promise<TaskDto> {
    return this.prismaService.task.create({
      data: {
        ...createTaskDto,
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
  }

  /**
   * Delete task
   * @param {number} id Task id
   * @return Promise<TaskDto>
   */
  public async deleteTask(id: number): Promise<TaskDto> {
    const task: TaskDto = await this.prismaService.task.findUnique({
      where: { id },
    });

    if (!task) {
      return;
    }

    return this.prismaService.task.delete({
      where: { id },
    });
  }
}
