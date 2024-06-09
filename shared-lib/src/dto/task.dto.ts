import { IsBoolean, IsDate, IsNumber } from 'class-validator';

export class TaskDto {
  @IsNumber()
  id!: number;

  @IsBoolean()
  completed!: boolean;

  @IsDate()
  createdAt!: Date;

  @IsDate()
  updatedAt!: Date;
}
