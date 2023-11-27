import { ApiProperty } from '@nestjs/swagger';
import { DiariesAPI } from '../interface/diary.interface';
import { CreateDiaryDto } from './create-diaries.dto';

export class GetDiariesDto implements DiariesAPI {
  @ApiProperty()
  hasNext: boolean;

  @ApiProperty({ type: () => [CreateDiaryDto] })
  items: Array<CreateDiaryDto>;
}
