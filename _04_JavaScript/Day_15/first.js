// -----> Event <-----
// Event :- mouse move , click , double click ,
// Event listener :- Listening the event (click)
// Event Action :- strike is comming soon

// 1st method :-
// function handleClick(){
//     const element = document.getElementById("first");
//     element.textContent ="Strike is comming soon";
    
// }

// 2nd method :-
// const element = document.getElementById("first");

// element.onclick = function handleClick(){
//     element.textContent = "Strike is comming soon";
//     element.style.backgroundColor = "blue";
// }

// element.onclick = function handleClick() {
//   element.textContent = "i am the best";
  
// };

// 3rd method :-
// const element = document.getElementById("first");
// element.addEventListener('click',()=>{
//     element.textContent = "strike is comming soon";
// })

// element.addEventListener("click", () => {
//   element.style.backgroundColor = "brown";
// });


// const Child1 = document.getElementById("child1");
// Child1.addEventListener('click',()=>{
//     Child1.textContent = "i am clicked";
// })

// const Parent = document.getElementById("parent");
// // console.log(Parent.children);

// using parent id 

// function handleClick(e){
//     e.target.textContent ="i am clicked";
//     Parent.removeEventListener('click',handleClick);
// }
// Parent.addEventListener('click',handleClick);



// Parent.addEventListener('click',(e)=>{
//     // console.lopg(e.target);
//     e.target.textContent = "i am clicked";
// })

// for(let child of Parent.children){
//     child.addEventListener('click',()=>{
//         child.textContent = "i am clicked";
//     })
// }


const GrandParent = document.getElementById("grandparent");
GrandParent.addEventListener('click',(e)=>{
    // console.log(e.target);
    console.log("Grandparent is clicked" );
})

const Parent = document.getElementById("parent");
Parent.addEventListener("click", () => {
  console.log("parent is clicked");
});

const Child = document.getElementById("child");
Child.addEventListener("click", () => {
  console.log("child is clicked");
});