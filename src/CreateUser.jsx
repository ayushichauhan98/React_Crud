import React, { useState } from "react";
export default function CreateUser(){
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[mobile,setPhone]=useState("")
    // console.log(name)
    let handleSubmit = (e)=>{
        e.preventDefault()
        let urls="http://localhost:5000/users"
        const userData = {name,email,password,mobile}
        let promise = fetch(urls,{
            headers:{
                'Content-Type':'application/json',
            },
            method:"POST",
            body:JSON.stringify(userData)
        })
        promise.then((response)=>{
            if(response.ok){
                alert("user Added Successfully")
                
            }
        
        }).then((data)=>{
            setName('')
            setEmail('')
            setPassword('')
            setPhone('')
        }).catch((Error)=>{
        console.log(Error)
        })
    }
    return(
        <>
       <div className="container">
        <div className="card">
            <div className="card-title">
             <h2 className="text-center">AddUser</h2>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <label>Name</label><br/>
                    <input type="text" value={name} onChange={e=>setName(e.target.value)} className="form-control" placeholder="Enter ur good name" />
                    <label>Email</label><br/>
                    <input type="email" value={email} onChange={e=>setEmail(e.target.value)} className="form-control" placeholder="Enter ur mailid" />
                    <label>Password</label><br/>
                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="form-control" placeholder="Enter ur pass" />
                    <label>Phone</label><br/>
                    <input type="number" value={mobile} onChange={e=>setPhone(e.target.value)} className="form-control" placeholder="Enter ur mob_num..." /><br/>
                    <input type="submit" value="submit" className="btn btn-dark " />

                </form>
            </div>
        </div>
       </div>
        </>
    )
}