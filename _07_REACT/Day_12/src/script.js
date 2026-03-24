import React from "react";
import ReactDOM from "react-dom/client"
import { BrowserRouter , Routes , Route , Link} from "react-router";
import Home from "./Component/Home";
import Contact from "./Component/Contact";
import Dashboard from "./Component/Dashboard";
import Details from "./Component/Details";
import Zero from "./Component/Zero";
import Hello from "./Component/Hello";
import Hi from "./Component/Hi";





function App(){
    
    
    

    return (
      <>
        <BrowserRouter>
          <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/Contact"}>Contact</Link>
            <Link to={"/Dashboard"}>Dashboard</Link>
            <Link to={"/Details"}>Details</Link>

          </nav>

          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/Contact" element={<Contact></Contact>}></Route>
            <Route path="/Dashboard" element={<Dashboard></Dashboard>}></Route>
            <Route path="/Details" element={<Details></Details>}>
              <Route index element={<Zero></Zero>}></Route>
              <Route path="Hello" element={<Hello></Hello>}></Route>
              <Route path="Hi" element={<Hi></Hi>}></Route>

            </Route>
          </Routes>
        </BrowserRouter>
      </>
    );
}


ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);