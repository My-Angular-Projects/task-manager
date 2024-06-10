import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { TaskDto } from '@task-manager/shared-lib';

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
   * @param {number} id Id task
   * @return Promise<TaskDto>
   */
  public async getOneTask(id: number): Promise<TaskDto> {
    return this.prismaService.task.findUnique({
      where: { id },
    });
  }
}
