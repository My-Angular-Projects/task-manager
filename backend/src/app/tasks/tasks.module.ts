import { Module } from '@nestjs/common';
import { TasksController } from './controllers';
import { TasksService } from './services';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [TasksController],
  providers: [TasksService, PrismaService],
})
export class TasksModule {}
