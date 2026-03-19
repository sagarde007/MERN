// create new element by using js 

const newElement = document.createElement("h2");
newElement.textContent ="Strike is Comming Soon";
newElement.id = "second";
console.log(newElement);

// select element 

const element = document.getElementById("first");
element.after(newElement);
// element.before(newElement);

const newElement2 = document.createElement("h3");
newElement2.textContent = "I am Sagar De";
newElement2.id = "third";

// not a best aproach to assign class
// newElement2.className = "name";
// newElement2.className += " sagar";

// best aproach
newElement2.classList.add("name");
newElement2.classList.add("sagar");
// newElement2.classList.remove("sagar");

// styling using js
newElement2.style.backgroundColor ="green";
newElement2.style.fontSize ="40px";

newElement2.setAttribute("hello","ji");

const element1 = document.getElementById("second");
element1.after(newElement2);
console.log(newElement2.getAttribute("hello"));


// create element using list under ul or ol

// const list = document.createElement("li");
// list.textContent ="milk";
// const list2 = document.createElement("li");
// list2.textContent = "cake";

// const list3 = document.createElement("li");
// list3.textContent ="suger";

// const list4 = document.createElement("li");
// list4.textContent = "paneer";

// const unorderElement = document.getElementById("listing");
// unorderElement.append(list , list2);
// // unorderElement.append(list2);
// unorderElement.prepend(list3);
// unorderElement.children[1].after(list4);


const arr = ["milk","suger","tea","paneer"];

const unorderElement = document.getElementById("listing");


// it is not a optimize method--> 

// for(let food of arr){
//     const list = document.createElement("li");
//     list.textContent = food;
//     unorderElement.append(list);
// }

// optimazed aproach-->

const fragment = document.createDocumentFragment();

for (let food of arr) {
  const list = document.createElement("li");
  list.textContent = food;
  fragment.append(list);
}
unorderElement.append(fragment);


// delete any element 
const s1 = document.getElementById("first");

s1.remove();

const Month = document.getElementById("month");
// console.log(Month.childNodes); // old tarika 
// console.log(Month.children); // new process

const lister = document.createElement("li");
lister.textContent = "Help";
// Month.insertAdjacentElement("afterbegin",lister);   // old process

Month.append(lister);  // new process

