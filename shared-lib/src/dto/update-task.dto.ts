import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateTaskDto {
  @IsNumber()
  @IsNotEmpty()
  id!: number;

  @IsString()
  title = '';

  @IsString()
  content = '';
}
