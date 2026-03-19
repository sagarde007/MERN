import { useEffect, useState } from "react"

function Body(){

    const [Profile,setProfile] = useState([]);
    const [numberofprofile,setnumberofprofile] = useState("");

    async function generateProfile(count){
        const random = Math.floor(1+Math.random()*10000);
        const response = await fetch(`https://api.github.com/users?since=${random}&per_page=${count}`);
        const data = await response.json();

        setProfile(data);
    }


    useEffect(()=>{
        generateProfile(10);
    },[])


    return (
      <div className="but">
        <input type="text" className="input" placeholder="Search Here" value={numberofprofile} onChange={(e)=>setnumberofprofile(e.target.value)} ></input>
        <button onClick={()=>generateProfile(Number(numberofprofile))}>Search Profiles</button>
        <div className="profiles">
          {Profile.map((value) => {
            return (
              <div key={value.id} className="cards">
                <img src={value.avatar_url}></img>
                <h2>{value.login}</h2>
                <a href={value.html_url} target="_blank">
                  Profile
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );

}

export default Body;