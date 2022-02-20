import "./App.css";
import {  Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.components";




const HatsPage=()=>{
  <div>
    <h1>HatsPage</h1>
  </div>
}


function App() {
  return (
    <div>
        <Route exact path="/" component={HomePage} />
        <Route  path="/hats" component={HatsPage} />
    </div>
  );
}

export default App;