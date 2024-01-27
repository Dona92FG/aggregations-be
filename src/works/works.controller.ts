import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';
import { WorksService } from './works.service';
import { Work } from './model/work.model';
import { WorksByProjectIdsDto } from './dto/works-by-project-ids.dto';
import { WorkAggregatedByProject } from './model/aggregations/work-aggregated-by-project.model';
import { WorkAggregatedByProjectAndEmployee } from './model/aggregations/work-aggregated-by-project-and-empolyee.model';
import { WorksByProjectIdsAndEmployeeIdsDto } from './dto/works-by-project-ids-and-employee-ids.dto';

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

  @Get('/byProjectsAndEmployees')
  getWorksAggregatedByProjectIdsAndEmployeeIds(
    @Query(new ValidationPipe({ transform: true }))
    filter: WorksByProjectIdsAndEmployeeIdsDto,
  ): WorkAggregatedByProjectAndEmployee[] {
    return this.worksService.getWorksAggregatedByProjectIdsAndEmployeeIds(
      filter.projectIds,
      filter.employeeIds,
    );
  }

  @Get('/byEmployeesAndProjects')
  getWorksAggregatedByEmployeeIdsAndProjectIds(
    @Query(new ValidationPipe({ transform: true }))
    filter: WorksByProjectIdsAndEmployeeIdsDto,
  ): WorkAggregatedByProjectAndEmployee[] {
    return this.worksService.getWorksAggregatedByEmployeeIdsAndProjectIds(
      filter.projectIds,
      filter.employeeIds,
    );
  }
}
