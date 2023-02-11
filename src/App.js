import React from "react";
import {BrowserRouter,Routes,Route, useParams}from "react-router-dom";
import CreateUser from "./CreateUser";
import ShowUser from "./ShowUser";
import Edit from "./Edit";
export default function App(){
return(
    <>
    <h3 className="text-center">Crud Oprations</h3>
   
<BrowserRouter>
<Routes>
   <Route path="/" element={<ShowUser/>}/>
   <Route path="/CreateUser" element={<CreateUser/>}/>
   <Route path="/EditUser/:userid" element={<Edit/>}/>
</Routes>
</BrowserRouter>
    </>
);

}