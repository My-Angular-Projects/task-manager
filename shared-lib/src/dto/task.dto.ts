import { IsBoolean, IsDate, IsNumber, IsString } from 'class-validator';

export class TaskDto {
  @IsNumber()
  id!: number;

  @IsString()
  title = '';

  @IsString()
  content = '';

  @IsBoolean()
  completed = false;

  @IsDate()
  createdAt: Date = new Date();

  @IsDate()
  updatedAt: Date = new Date();
}
