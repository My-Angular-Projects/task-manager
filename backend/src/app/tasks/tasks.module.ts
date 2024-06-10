import { Module } from '@nestjs/common';
import { TasksController } from './controllers';
import { TasksService } from './services';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
