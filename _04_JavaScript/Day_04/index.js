// -------->>> operator <<<----------- 

// -------> arithmatic <-------

// console.log(2+5);
// console.log(2-5);
// console.log(2*5);
// console.log(2/5);
// console.log(2%5);  // remainder 

// console.log(5**3);  // 5*5*5

// ---------> Assignment opetator <------- 

// let x = 20;
// let y = 10;
// x = x+y;
// x = x-y;
// x = x*y;
// x+=y;
// x = x+y;
// x-=y;
// console.log(x);


// -------> comparison operator <--------

// let x = 20;
// let y = 10;

// console.log(x>y);
// console.log(x>=y);
// console.log(x<=y);
// console.log(x<y);
// console.log(x==y);
// console.log(x===y);

// ------> Conversion <--------

// let z = "120";
// let a =Number(z);
// console.log(a);
// console.log(typeof a);

// type check (two types are same) then comparison

// number and string are compair when string is convert to number 

// let a = "120ad";
// let b = Number(a);
// console.log(b); // give NaN(not a number)
// console.log(typeof b); // type is number 



// ------ number --> string  -------

// let a = 120;
// let b = string(a);
// console.log(typeof b);

// console.log(typeof String(undefined));

//  ------- string ---> number -------

// let z = "120";
// let x = Number(z);
// console.log(x);

// let a = true;
// console.log(Number(true));
// console.log(Number(false));

// console.log(Number(null));
// console.log(Number(undefined));

//          null --> 0
//          undefind --> NaN


// boolean conversion

// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(null));

//    ------>> computer science challange

// let p = 0.1;
// let q = 0.2;

// let c = p + q;
// console.log(c == 0.3); // it gives false becuase of binary convertion
// console.log(c);


// 1> null is loosely equal to undefined only

    // console.log(null == undefined);
    // console.log(null == undefined);
    // console.log(null == 0);
    // console.log(null == "");
    // console.log(null == false);
    // console.log(null == true);

// 2>  >,<,>=,<= (null convert to number , undefined ---> NaN)

    // console.log(null>=0);
    // console.log(null<=0);
    // console.log(null>0);
    // console.log(null<0);
    // console.log(null>=undefined);
    // console.log(undefined>=0);

    console.log("Sagar" > "Manas");
    console.log(10>"10");


// 3> if we compair two type of variable then both are converted to number 

    console.log(10<true);
    console.log(null>="");


    console.log(NaN == NaN);


//  ----->> for loop 

// post increment ---> i++
// post decrement ---> i--

for(let i =0 ; i<10 ; i++){
    console.log(i);
}

// ---->> while loop 

let i =0;

while(i<10){
    console.log(i);
    i++;
}

//  ---> do while loop

do{
    console.log(i);
    i++;
}while(i<10);

// ----> if else condition

let Age = 15;

if(Age>=18){
    console.log("Eligible for vote");
}
else{
    console.log("Not eligible for vote");
}


// kid young and old

let age = 18;

if(age<18){
    console.log("Kid");
}
else if(age>=60){
    console.log("old");
}
else{
    console.log("young");
}


// -----> logical operator(&&  , || )

    // console.log(true&&true);
    // console.log(true&&false);
    // console.log(false&&false);
    // console.log(false&&true);


    // console.log(true || true);
    // console.log(true || false);
    // console.log(false || false);
    // console.log(false || true);


    // (logical And)
    
    
    // let a = "sagar";
    // let b = "manas";
    // let c = a&&b;
    // console.log(c);

    // && :-- if first value is false then it will return the first value itself and if first value is true , it will return second


//  || or  (logical or)

let a = 0 ;
let b = 20;
console.log(a || b);

// || :-- if first value is true then it will return the first value itself and if first value is false , it will return second

