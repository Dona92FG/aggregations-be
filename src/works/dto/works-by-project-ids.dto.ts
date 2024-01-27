import { Transform, Type } from 'class-transformer';
import { IsArray } from 'class-validator';

export class WorksByProjectIdsDto {
  @IsArray()
  @Type(() => String)
  @Transform(({ value }) => value.split(',').map((id) => Number(id)))
  projectIds: number[];
}
