    import {IIntroducable} from './iintroducable';
    
    export class Person implements IIntroducable
    {  
        public introduce(): void
        {
            console.log(`Name: ${this.name}, Age: ${this.age}`);
        }

        public get Age()
        {
            return this.age;
        }
        public set Age(age:number)
        {
            if (age >= 0 && age < 125)
            {
                this.age = age;
            }
        }

        constructor(private name:string, private age:number)
        {
        }
    }


