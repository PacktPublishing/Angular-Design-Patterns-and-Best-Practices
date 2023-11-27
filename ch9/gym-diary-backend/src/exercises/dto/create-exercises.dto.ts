import { ApiPropertyOptional } from '@nestjs/swagger';
import { Exercise } from '../interface/exercises.interface';

export class CreateExercisesDto implements Exercise {
  @ApiPropertyOptional()
  id: string;

  @ApiPropertyOptional()
  description: string;
}
