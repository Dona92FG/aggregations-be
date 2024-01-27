import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';
import { WorksService } from './works.service';
import { Work } from './model/work.model';
import { WorksByProjectIdsDto } from './dto/works-by-project-ids.dto';
import { WorkAggregatedByProject } from './model/aggregations/work-aggregated-by-project.model';

@Controller('works')
export class WorksController {
  constructor(private readonly worksService: WorksService) {}

  @Get()
  getWorks(): Work[] {
    return this.worksService.getWorks();
  }

  @Get('/byProjects')
  getWorksAggregatedByProjectIds(
    @Query(new ValidationPipe({ transform: true }))
    filter: WorksByProjectIdsDto,
  ): WorkAggregatedByProject[] {
    return this.worksService.getWorksAggregatedByProjectIds(filter.projectIds);
  }
}
