import './Ragistion.css'
import React,{useState,useEffect} from "react";
import {Link}  from  'react-router-dom'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Registration(){
    const [errorVal,setErrorVal]=useState({})
    const [submit,setSubmit]=useState(false)
    const [formValue,setFormValue]=useState({
        name:"",
        email:"",
        number: "",
        username:"",
        password:"",
    })
      // useEffect(()=>{
      //    if(Object.keys(errorVal).length===0 && submit){
      //    }
      // },[formValue])
    toast.configure()
    const handleChange=(e)=>{
       const {name,value}=e.target;
       setFormValue({...formValue,[name]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        setErrorVal(isvalid(formValue))
        setSubmit(true)
        const {name,email,number,username,password}=formValue
        if(name&&email&&number&&username&&password){
        fetch("https://earnest-smithy-320302-default-rtdb.firebaseio.com/userData.json",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                  name,
                  email,
                  number,
                  username,
                  password
            }),
        }) 
        document.getElementById("form").reset()  
         toast.success('successful submitted')
      }
     
    }
    const isvalid=(value)=>{
        const regexEmail=/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
        const regexpass=/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/;
        const regexuser=/[^A-Za-z 0-9]+$/ 
        const regexName=/[^A-Za-z 0-9]+$/  
        const errors={}
      if(!value.name){
        errors.name="Name is required"
      }else if(value.name.trim().length<3){
        errors.name="Name must be more then 3 charecter"
      }else if(!regexName.test(value.name)){
        errors.name="Invalid Name must required 1 Speical char "
    }
    
      if(!value.email){
        errors.email="Email is required"
      }
      else if(!regexEmail.test(value.email)){
          errors.email="Invalid Email"
      }

      if(!value.number){
        errors.number="Number is required"
      }else if(value.number.length!==10){
        errors.number="10 Digits required"   
      }


      if(!value.username){
        errors.username="username is required"
      }
      else if(!regexuser.test(value.username)){
        errors.username="Invalid user name must be 1 letter and 1 special char"
      }

      if(!value.password){
        errors.password="Password is required"
      }else if((value.password.length<8)){
        errors.password="password must be more then 8 char,1 Digit,1 UpperCase,1 LowerCase,1 Special char required"
      }else if(!regexpass.test(value.password)){
        errors.password="Invalid Password,1 Digit,1 UpperCase,1 LowerCase,1 Special char required"
          
      }

      return errors;
    }

    return(<>
      <div className='header'>
      <h1>Mobile app</h1>
      <Link to="/Login" className="singout">SignOut</Link>
</div>
    <div className="main">

     <div className="conteiner"> 
                <form action="" id="form" onSubmit={handleSubmit}>
                <h1 className="heading">Sign up</h1> 
            <div className="formvel">
                <input type="text"
                className="data"
                 placeholder="Enter your Name" 
               
                 name="name" 
                onChange={handleChange}
                />
                <small className='err-mg'>{errorVal.name}</small>
    
            </div>
            <div className="formvel">
                <input type="text" 
                placeholder="Enter Number" 
                className="data"
                id="numbervalue" 
                 name="number" 
              
                 onChange={handleChange}
                />
                 <small className='err-mg'>{errorVal.number}</small>
            
            </div>
            <div className="formvel">
             <input type="text"
              placeholder="Enter your email"
               className="data"
                name="email" 
              
                onChange={handleChange}
                                />
                                 <small className='err-mg'>{errorVal.email}</small>
               
            </div>
            <div className="formvel">
                <input type="text" 
                placeholder="User name" 
                className='data'
                name="username"
                
                onChange={handleChange}
                />
           <small className='err-mg'>{errorVal.username}</small>
            </div>
            <div>
            <div className="formvel">
                <input type="password" 
                placeholder="Enter password" 
                className='data'
                name="password"
                
                onChange={handleChange}
                />
           <small className='err-mg'>{errorVal.password}</small>

            
                
            </div><button className="btn btn-primary">Submit</button>
          </div>
            
     <div>
            </div>
            
   </form>
    </div>
    
</div>
</>
    )
    }


export default Registration