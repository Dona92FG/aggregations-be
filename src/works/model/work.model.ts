import { Employee } from './employee.model';
import { Project } from './project.model';

export class Work {
  project: Project;
  employee: Employee;
  date: string;
  hours: number;
}
