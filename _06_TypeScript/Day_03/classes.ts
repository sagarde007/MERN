class person{
    name:string
    age:number

    constructor(n1:string,n2:number){
        this.name = n1;
        this.age = n2
    }

    greet():void{
        console.log(`hello i am ${this.name}`);
    }
}

const obj1 = new person("John", 30);
const obj2 = new person("Alice", 25);

console.log(obj1);
console.log(obj2);
obj1.greet();

// public , private , protected :-

class customer{
    public name:string
    private age:number
    protected balance:number

    constructor(name:string,age:number,balance:number){
        this.name = name;
        this.age = age;
        this.balance = balance;
    }

    meet():number{
        this.age = this.age + 10;
        return this.age;
    }
}
const p1 = new customer("sagar",22,1000);
console.log(p1.name);
console.log(p1.meet());
// console.log(p1.age);
// console.log(p1.balance);

class employee extends customer{
    salary:number

    constructor(salary:number,name:string,age:number,balance:number){
        super(name,age,balance);
        this.salary = salary;
    }
}
const e1 = new employee(50000,"sagar",22,1000);
console.log(e1);

// generic function :-

// function value(a:(number|string)):(number|string){
//     return a;
// }

function value<T>(a:T):T{
    return a;
}

console.log(value<number>(10));
console.log(value<string>("hello"));
console.log(value<boolean>(true));

