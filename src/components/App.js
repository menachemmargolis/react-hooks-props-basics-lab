import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home  color ={user.color} username ={user.name} city ={user.city}/>
      <About bio={user.bio} link1 ={user.links.github} link2 ={user.links.linkedin}/>
    </div>
  );
}

export default App;



// Finally, App should also pass down the github and linkedin links to the About component, so that About 
// can pass those props down to the Links component!