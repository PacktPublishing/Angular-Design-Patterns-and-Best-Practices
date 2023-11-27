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
import { GetExercisesDto } from './dto/get-exercises.dto';
import { ExercisesService } from './exercises.service';
import { Exercise, ExercisesAPI } from './interface/exercises.interface';
import { CreateExercisesDto } from './dto/create-exercises.dto';
import { Public } from 'src/auth/public.decorator';

@ApiTags('Exercises')
@Controller('exercises')
export class ExercisesController {
  constructor(private exercisesService: ExercisesService) {}

  @ApiResponse({ status: 200, type: GetExercisesDto })
  @ApiQuery({ name: 'search', required: false })
  @ApiQuery({ name: 'filter', required: false })
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'pageSize', required: false })
  @Get()
  @Public()
  getAll(@Query() query: QueryApi): Observable<ExercisesAPI> {
    const { search, filter, page, pageSize } = query;

    return this.exercisesService.getAll(search || filter, page, pageSize);
  }

  @ApiResponse({ status: 200, type: CreateExercisesDto })
  @ApiParam({ name: 'id' })
  @Get(':id')
  @Public()
  getOne(@Param() params: ParamQueryId): Observable<Exercise> {
    return this.exercisesService.getOne(params['id']);
  }

  @ApiResponse({ status: 201, type: CreateExercisesDto })
  @Post()
  @Public()
  insert(@Body() newExercise: CreateExercisesDto): Observable<Exercise> {
    return this.exercisesService.insert(newExercise);
  }

  @ApiResponse({ status: 200, type: CreateExercisesDto })
  @ApiParam({ name: 'id' })
  @Put(':id')
  @Public()
  update(
    @Param() params: ParamQueryId,
    @Body() newExercise: CreateExercisesDto,
  ): Observable<Exercise> {
    return this.exercisesService.update(params['id'], newExercise);
  }

  @ApiResponse({ status: 200, type: CreateExercisesDto })
  @ApiParam({ name: 'id' })
  @Delete(':id')
  @Public()
  delete(
    @Param() params: ParamQueryId,
    @Body() newExercise: CreateExercisesDto,
  ): boolean {
    return this.exercisesService.delete(params['id']);
  }
}
