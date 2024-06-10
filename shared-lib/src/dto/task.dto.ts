import { IsBoolean, IsDate, IsNumber, IsString } from 'class-validator';

export class TaskDto {
  @IsNumber()
  id!: number;

  @IsString()
  title!: string;

  @IsString()
  content!: string;

  @IsBoolean()
  completed!: boolean;

  @IsDate()
  createdAt!: Date;

  @IsDate()
  updatedAt!: Date;
}
