import { Injectable } from '@nestjs/common';
import { Work } from './model/work.model';
import { WorkAggregatedByProject } from './model/aggregations/work-aggregated-by-project.model';

@Injectable()
export class WorksAggregationService {
  aggregateWorksByProjectIds(
    worksInMemory: Work[],
    projectIds: number[],
  ): WorkAggregatedByProject[] {
    const worksAggregatedByProject: WorkAggregatedByProject[] = [];
    for (const projectId of projectIds) {
      const worksByProjectId: Work[] = worksInMemory.filter(
        (work) => work.project.id === projectId,
      );
      if (worksByProjectId.length > 0) {
        const project: string = worksByProjectId[0].project.name;
        const arrayOfHours: number[] = worksByProjectId.map(
          (work) => work.hours,
        );
        const hours: number = arrayOfHours.reduce((previous, current) => {
          return previous + current;
        }, 0);
        worksAggregatedByProject.push({
          project,
          hours,
        });
      }
    }
    return worksAggregatedByProject;
  }
}
