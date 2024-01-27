import { Module } from '@nestjs/common';
import { WorksController } from './works.controller';
import { WorksService } from './works.service';
import { WorksAggregationService } from './works-aggregation.service';

@Module({
  imports: [],
  controllers: [WorksController],
  providers: [WorksService, WorksAggregationService],
})
export class WorksModule {}
