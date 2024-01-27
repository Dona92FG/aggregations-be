import { Module } from '@nestjs/common';
import { WorksController } from './works.controller';
import { WorksService } from './works.service';

@Module({
  imports: [],
  controllers: [WorksController],
  providers: [WorksService],
})
export class WorksModule {}
