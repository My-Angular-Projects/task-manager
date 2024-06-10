import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { TaskDto } from '@task-manager/shared-lib';

@Injectable()
export class TasksService {
  constructor(private readonly prismaService: PrismaService) {}

  public async getAllTasks(): Promise<TaskDto[]> {
    return this.prismaService.task.findMany();
  }
}
