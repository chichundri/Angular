import { Department } from './department';
import { Employee } from './employee';

export class Team {
    teamName = '';
    teamManager = '';
    teamDept : Department;
    employees : Employee[];
}