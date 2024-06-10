import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { TaskDto, UpdateTaskDto } from '@task-manager/shared-lib';

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
    return this.prismaService.task.findUnique({
      where: { id },
    });
  }

  /**
   * Update task
   * @param {number} id Task id
   * @param {UpdateTaskDto} updateTaskDto Task payload
   * @return Promise<TaskDto> Updated task
   */
  public async updateTask(
    id: number,
    updateTaskDto: UpdateTaskDto,
  ): Promise<TaskDto> {
    const task: TaskDto = await this.prismaService.task.findUnique({
      where: { id },
    });

    if (!task) {
      return;
    }

    return this.prismaService.task.update({
      where: { id },
      data: { ...updateTaskDto },
    });
  }

  /**
   * Delete task
   * @param {number} id Task id
   * @return Promise<TaskDto>
   */
  public async deleteTask(id: number): Promise<TaskDto> {
    return this.prismaService.task.delete({
      where: { id },
    });
  }
}
