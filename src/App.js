import React from 'react';
// import React, { useState } from "react";
// import "./App.css";
// import Routes from "./routes";

import Home from "./components/Home/Home"
import Produtos from "./components/Produtos/Produtos"
// import Login from "./components/Login/Login"


const App = () => {
   return (
    <>
      <Home />
      <Produtos />
    </>
    // <Router>
    //   <div className="App" >
    //     <Routes>
    //     <Route path="home" element={<Home />}>
    //       </Route>
    //       <Route path="login" element={<Login />}>
    //       </Route>
    //     </Routes>
    //   </div>
    // </Router>
   );
}
// const App = () => {

//   return (
//     <Home />
//   );
// };

export default App;

