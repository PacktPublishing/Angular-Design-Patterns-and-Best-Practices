import { ApiPropertyOptional } from '@nestjs/swagger';
import { Diary } from '../interface/diary.interface';

export class CreateDiaryDto implements Diary {
  @ApiPropertyOptional()
  id: string;

  @ApiPropertyOptional()
  date: Date;

  @ApiPropertyOptional()
  exercise: string;

  @ApiPropertyOptional()
  sets: number;

  @ApiPropertyOptional()
  reps: number;
}
