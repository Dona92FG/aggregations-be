import { Injectable } from '@nestjs/common';
import { Work } from './model/work.model';
import { WorkAggregatedByProject } from './model/aggregations/work-aggregated-by-project.model';
import { WorksAggregationService } from './works-aggregation.service';
import { WorkAggregatedByProjectAndEmployee } from './model/aggregations/work-aggregated-by-project-and-empolyee.model';

@Injectable()
export class WorksService {
  private worksInMemory: Work[] = [
    {
      project: { id: 1, name: 'Mars Rover' },
      employee: { id: 1, name: 'Mario' },
      date: '2021-08-26T22:00:00.000Z',
      hours: 5,
    },
    {
      project: { id: 2, name: 'Manhattan' },
      employee: { id: 2, name: 'Giovanni' },
      date: '2021-08-30T22:00:00.000Z',
      hours: 3,
    },
    {
      project: { id: 1, name: 'Mars Rover' },
      employee: { id: 1, name: 'Mario' },
      date: '2021-08-31T22:00:00.000Z',
      hours: 3,
    },
    {
      project: { id: 1, name: 'Mars Rover' },
      employee: { id: 3, name: 'Lucia' },
      date: '2021-08-31T22:00:00.000Z',
      hours: 3,
    },
    {
      project: { id: 2, name: 'Manhattan' },
      employee: { id: 1, name: 'Mario' },
      date: '2021-08-26T22:00:00.000Z',
      hours: 2,
    },
    {
      project: { id: 2, name: 'Manhattan' },
      employee: { id: 2, name: 'Giovanni' },
      date: '2021-08-31T22:00:00.000Z',
      hours: 4,
    },
  ];
  constructor(
    private readonly worksAggregationService: WorksAggregationService,
  ) {}

  getWorks(): Work[] {
    return this.worksInMemory;
  }

  getWorksAggregatedByProjectIds(
    projectIds: number[],
  ): WorkAggregatedByProject[] {
    return this.worksAggregationService.aggregateWorksByProjectIds(
      this.worksInMemory,
      projectIds,
    );
  }

  getWorksAggregatedByProjectIdsAndEmployeeIds(
    projectIds: number[],
    employeeIds: number[],
  ): WorkAggregatedByProjectAndEmployee[] {
    return this.worksAggregationService.aggregateWorksByProjectIdsAndEmployeeIds(
      this.worksInMemory,
      projectIds,
      employeeIds,
    );
  }

  getWorksAggregatedByEmployeeIdsAndProjectIds(
    projectIds: number[],
    employeeIds: number[],
  ): WorkAggregatedByProjectAndEmployee[] {
    return this.worksAggregationService.aggregateWorksByEmployeeIdsAndProjectIds(
      this.worksInMemory,
      projectIds,
      employeeIds,
    );
  }
}
