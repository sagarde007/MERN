// default get request to fetch data from the backend API

const response = await fetch("http://localhost:3000/api/data");
const data = await response.json();

// post request to send data to the backend API
const response2 = await fetch("http://localhost:3000/api/data", {
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({name:"sagar" , age:22})
});
const data2 = await response2.json();


// put request to update data in the backend API

const response3 = await fetch("http://localhost:3000/api/data", {
    method:"PUT",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({name:"sagar" , age:22})
});
const data3 = await response3.json();

// delete request to delete data from the backend API

const response4 = await fetch("http://localhost:3000/api/data", {
    method:"DELETE",
    headers:{
        "Content-Type":"application/json"
    }
});
const data4 = await response4.json();

