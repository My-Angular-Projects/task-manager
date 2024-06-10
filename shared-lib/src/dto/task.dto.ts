import { IsBoolean, IsDate, IsInt, IsString } from 'class-validator';

export class TaskDto {
  @IsInt()
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
