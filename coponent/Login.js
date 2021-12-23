import React,{useState,} from "react"
import {useHistory} from "react-router-dom"
import {Link}  from  'react-router-dom'
import './Login.css'

function Login()
{
     let history= useHistory()
    const [email,setEmail]=useState("")
    const [name,setName]=useState("")
    const [Password,setPassword]=useState("")
    const [error,setError]=useState({})
    const regexEmail=/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
         const regexpass=/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/;

         const regexName=/[^A-Za-z 0-9]+$/ 
    const onSubmit=(e)=>{
        e.preventDefault()
        setError(validtion(name,email,Password))
        
        if (regexEmail.test(email)&&regexName.test(name)&&regexpass.test(Password)){
            history.push("/Registration")
            setEmail("")
            setPassword("")
        }


    }

    const validtion=(a,b,c)=>{
       
        const check={}
           if(!a){
               check.name="Name is required"
           }else if(!regexName.test(a)){
               check.name="Invalid Name must required 1 Speical char "
           }
           if(!b){
            check.email="email required"
        }else if(!regexEmail.test(b)){
            check.email="Invalid Email"
        }
        if(!c){
            check.Password="Password is required"
        }else if(c.length<8){
            check.Password="required min. 8 char.,1 Digit,1 UpperCase,1 LowerCase,1 Special char "
          }else if(!regexpass.test(c)){
            check.Password="Invalid Password,1 Digit,1 UpperCase,1 LowerCase,1 Special char required"
              
          }

        return check;
    }
    return ( <div id="main-div">
          <div id="second-div">
        <h1 className="login-logo"> Mobile Web</h1>
        <form id="form" onSubmit={onSubmit}>
                      <div className="input-type">
                    <input type="Name" 
                    name="Name" 
                    value={name}
                    className="f-data"
                    placeholder="Enter Name"
                onChange={(e)=>setName(e.target.value)}/>
               <small className="error-massege">{error.name}</small>
               </div>
               <div className="input-type">
                <input type="text" 
                name="email" 
                value={email}
                className="f-data"
                id="email"
                placeholder="Enter Email ID"
                onChange={(e)=>setEmail(e.target.value)}/>
                <small className="error-massege">{error.email}</small>
                <br/>
                </div>
                <div className="input-type">
                <input type="password" 
                name="password" 
                 value={Password}
                 className="f-data"
                 placeholder="Password"
                  onChange={(e)=>setPassword(e.target.value)}/>
                  <small className="error-massege">{error.Password}</small><br/>
                  </div>
                <button id ="but" type="submit">Login </button>
      </form>
      <Link to="/Ragistion">Registration</Link>
            </div>   
        </div>


    )
}


export default Login