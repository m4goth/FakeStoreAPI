import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./components/Home/Home"
import Login from "./components/Login/Login"

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/Home" exact />
           <Route component = { Login }  path="/Login" />
       </BrowserRouter>
   )
}

export default Routes;