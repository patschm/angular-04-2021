import { Person } from './person';

export class Employee extends Person
{
    private _job: string;

    public set job(job)
    {
        this._job = job;
    }

    constructor(name:string, age:number, job:string)
    {
        super(name, age);
        this._job = job;
    }
}