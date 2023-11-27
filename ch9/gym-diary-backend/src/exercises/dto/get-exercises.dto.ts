import { ApiProperty } from '@nestjs/swagger';
import { CreateExercisesDto } from './create-exercises.dto';
import { ExercisesAPI } from '../interface/exercises.interface';

export class GetExercisesDto implements ExercisesAPI {
  @ApiProperty()
  hasNext: boolean;

  @ApiProperty({ type: () => [CreateExercisesDto] })
  items: Array<CreateExercisesDto>;
}
