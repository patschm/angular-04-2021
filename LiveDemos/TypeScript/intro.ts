import { Employee, IIntroducable } from './lib';

var x: number = 10;
const y: number = 20;
let z: string = 'Hallo';

let Test = () : number | string =>
{
    var x = 40;
    if(true)
    {
        let  xx = 50;
    }
    return 42;
}

Test();


let p: IIntroducable = new Employee("Jan", 42, "Developer");
//p.Age = 56;
p.introduce();