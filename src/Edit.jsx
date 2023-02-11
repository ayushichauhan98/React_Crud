import React ,{useState,useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
export default function Edit(){
    const { userid }=useParams()
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[mobile,setPhone]=useState("")
    const navigate= useNavigate()
    useEffect(()=>{
    const urls="http://localhost:5000/users/"+userid
    let promise= fetch(urls)
    promise.then((response)=>{
     return response.json()
    }).then((data)=>{
     setName(data.name)
     setEmail(data.email)
     setPassword(data.password)
     setPhone(data.mobile)
     

    }).catch((Error)=>{
     console.log(Error)
    })
    },[])
    function handleSubmit(e){
        e.preventDefault()
        const UpdateData={name,email,mobile,password}
        const urls="http://localhost:5000/users/"+userid
        let promise=fetch(urls,{
            headers:{
                "Content-Type":"application/json"
             
            },
            method:"PUT",
            body:JSON.stringify(UpdateData)
        })
        promise.then((response)=>{
        if(response.ok){
            alert("user updated Successfully")
        }
        
        }).then((data)=>{
            setName("")
            setEmail("")
            setPassword("")
            setPhone("")
            
        }).catch((Error)=>{
         console.log(Error)
        })
        navigate('/')

    }
    return(
        <>
        <div className="container">
         <div className="card">
             <div className="card-title">
              <h2 className="text-center">Edit User</h2>
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