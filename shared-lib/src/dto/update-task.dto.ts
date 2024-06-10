import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class UpdateTaskDto {
  @IsInt()
  @IsNotEmpty()
  id!: number;

  @IsString()
  title = '';

  @IsString()
  content = '';
}
