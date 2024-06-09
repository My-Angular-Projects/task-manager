import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class TasksService {
  constructor(private readonly prismaService: PrismaService) {}

  public async getAllTasks(): Promise<any> {
    return this.prismaService.task.findMany();
  }
}
