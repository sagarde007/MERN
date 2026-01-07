// -------> Array <------- 

// let marks1 = 100;
// let marks2 = 200;
// let marks3 = 400;
// let marks4 = 500;

// let marks = [100,200,300,400];
// console.log(marks);
// console.log(marks.length);

// let arr = [100,30,"sagar",true];
// console.log(arr);

// console.log(arr[2]);
// console.log(typeof arr);  // object type
// arr[1] = 800;
// console.log(arr);

// push :- add element in end 
// arr.push(50);
// arr.push("manas");
// console.log(arr);

// pop :- delete element from end
// arr.pop();
// console.log(arr);

// adding element at starting 
// arr.unshift(10);
// arr.unshift(60);
// console.log(arr);

// delete element from start
// arr.shift();
// console.log(arr);

//  shift and unshift are not use because perormance is hampered 


// let arr = [10,20,30,40,50];

// for(let i=0;i<arr.length;i++){
    //     console.log(arr[i]);
    // }
    
    // for(let num of arr){
        //     console.log(num);
        // }
        

    // let arr = [10,30,50,90,1];
    // const arr2 = arr.slice(2,4);
    // console.log(arr2);
    // console.log(arr); // does not effect the original array 

    // // const arr3 = arr.splice(1,3);
    // const arr3 = arr.splice(1,3 , "sagar" , 56);
    // console.log(arr3);
    // console.log(arr); // effect the original array 

    // march all array 

    // const arr1 = [10,20,30,40];
    // const arr2 = ["sagar",11,true];
    // const arr3 = [56,85,64];

    // const arr4 = arr1.concat(arr2,arr3);
    // const arr4 = [arr1,arr2,arr3];

    // spread operator
    // const arr4 = [...arr1,...arr2,...arr3];

    // console.log(arr4);

    const names = ["sagar","kam","ram","jon","bob"];
    // console.log(names.toString()); // return as string 

    // console.log(names.join(""));
    // console.log(names.lastIndexOf("ram"));
    // console.log(names.includes("ram"));

    // sorting
    // names.sort(); // asending order
    // names.reverse() //  decending order 
    // console.log(names);

    const a = [100,90,80,32,91];

    // a.sort(); // short in character by character order by using ascii value 

    // a.sort((a,b)=>a-b); // use for shorting in correct order (ascending order )

    // a.sort((a,b)=>b-a); // use for shorting in correct order (decending order )
    // console.log(a);


    // const arr = [10,30,45,[85,25,[46,31,64],63],78];

    // const b = arr.flat(Infinity);
    // console.log(b);
    // console.log(arr[3][2][1]); // 3d array 

    // in general array store in contineous memory location but in javascript  arry store as a object because size of data is not constant  

    





