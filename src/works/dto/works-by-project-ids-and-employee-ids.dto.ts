import { Transform, Type } from 'class-transformer';
import { IsArray } from 'class-validator';

export class WorksByProjectIdsAndEmployeeIdsDto {
  @IsArray()
  @Type(() => String)
  @Transform(({ value }) => value.split(',').map((id) => Number(id)))
  projectIds: number[];

  @IsArray()
  @Type(() => String)
  @Transform(({ value }) => value.split(',').map((id) => Number(id)))
  employeeIds: number[];
}
