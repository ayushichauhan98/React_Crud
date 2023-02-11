import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function ShowUser(){
    const[user,setUser]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
    const urls="http://localhost:5000/users"
    let promise=fetch(urls)
    promise.then((response)=>{
     return response.json()
    }).then((data)=>{
    //  console.log(data)
    setUser(data)
    }).catch((Error)=>{
        console.log(Error)
    })
    },[])
    // console.log(user)
    const HandleDelete=(id)=>{
    if(window.confirm("Are you sure want to delete")){
      const urls="http://localhost:5000/users/"+id
      let promise=fetch(urls,{
        headers:{
            "Content-Type":"application/json"

        },
        method:"DELETE"
      })
      promise.then((response)=>{
        if(response.ok){
            alert("User Deleted Successfully")
        }
      }).then((data)=>{
        window.location.reload()

      }).catch((Error)=>{
        console.log(Error)
      })
    }
    
    }
    function HandleEdit(id){
      navigate('EditUser/'+id)
    }
    return(
        <>
        <div className="container text-center">
            <div className="card">
                <div className="card-title">
                    <div className="btn btn-outline-success ">
                        <Link to='CreateUser'>Add (+)</Link>
                    </div>
                <h2>ShowUser</h2>
                </div>
                <div className="card-body">
                <table className="table table-bordered">
                    <thead className="bg-dark text-light">
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Phone</td>
                            <td>Password</td>
                            <td>Edit</td>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map((item,index)=>{
                        return(
                              <tr key={index}>
                                <td >{item.id}</td>
                                <td >{item.name}</td>
                                <td >{item.email}</td>
                                <td >{item.mobile}</td>
                                <td >{item.password}</td>
                                <td ><button onClick={()=>{HandleEdit(item.id)}} className="btn btn-success">Edit</button></td>
                                <td ><button onClick={()=>{HandleDelete(item.id)}} className="btn btn-danger">Delete</button></td>

                              </tr>
                                     )
                        })}
                    </tbody>
                </table>
                </div>
            </div>
        </div>
        </>
    )
}