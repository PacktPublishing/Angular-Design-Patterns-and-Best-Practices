import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiResponse, ApiQuery, ApiParam } from '@nestjs/swagger';
import { Observable } from 'rxjs';
import { QueryApi, ParamQueryId } from 'src/utils/interfaces/query.interface';
import { Public } from 'src/auth/public.decorator';
import { DiaryService } from './exercises.service';
import { GetDiariesDto } from './dto/get-diaries.dto';
import { CreateDiaryDto } from './dto/create-diaries.dto';
import { DiariesAPI, Diary } from './interface/diary.interface';

@ApiTags('Diary')
@Controller('diary')
export class DiaryController {
  constructor(private diaryService: DiaryService) {}

  @ApiResponse({ status: 200, type: GetDiariesDto })
  @ApiQuery({ name: 'search', required: false })
  @ApiQuery({ name: 'filter', required: false })
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'pageSize', required: false })
  @Get()
  @Public()
  getAll(@Query() query: QueryApi): Observable<DiariesAPI> {
    const { search, filter, page, pageSize } = query;

    return this.diaryService.getAll(search || filter, page, pageSize);
  }

  @ApiResponse({ status: 200, type: CreateDiaryDto })
  @ApiParam({ name: 'id' })
  @Get(':id')
  @Public()
  getOne(@Param() params: ParamQueryId): Observable<Diary> {
    return this.diaryService.getOne(params['id']);
  }

  @ApiResponse({ status: 200, type: CreateDiaryDto })
  @Post()
  @Public()
  insert(@Body() newDiary: CreateDiaryDto): Observable<Diary> {
    return this.diaryService.insert(newDiary);
  }

  @ApiResponse({ status: 200, type: CreateDiaryDto })
  @ApiParam({ name: 'id' })
  @Put(':id')
  @Public()
  update(
    @Param() params: ParamQueryId,
    @Body() newDiary: CreateDiaryDto,
  ): Observable<Diary> {
    return this.diaryService.update(params['id'], newDiary);
  }

  @ApiResponse({ status: 200, type: CreateDiaryDto })
  @ApiParam({ name: 'id' })
  @Delete(':id')
  @Public()
  delete(
    @Param() params: ParamQueryId,
    @Body() newDiary: CreateDiaryDto,
  ): boolean {
    return this.diaryService.delete(params['id']);
  }
}
