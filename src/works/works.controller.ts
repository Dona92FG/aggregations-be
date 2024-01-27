import { Controller, Get } from '@nestjs/common';
import { WorksService } from './works.service';
import { Work } from './model/work.model';

@Controller('works')
export class WorksController {
  constructor(private readonly worksService: WorksService) {}

  @Get()
  getWorks(): Work[] {
    return this.worksService.getWorks();
  }
}
