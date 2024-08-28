import React, { useEffect, useState } from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../Services/EmpService'
import { useNavigate, useParams } from 'react-router-dom'

const Empl = () => {
    const [firstName,setfname]=useState('')
    const [lastName,setlname]=useState('')
    const [email,setmail]=useState('')
    const navigator=useNavigate();
    const [errors,setError]=useState({
        firstName:'',
        lastName:'',
        email:''
    })
    const {id}=useParams();
    useEffect(()=>{
        if(id){
            getEmployee(id).then((Response)=>{
               setfname( Response.data.firstName)
               setlname( Response.data.lastName)
               setmail( Response.data.email)
            }).catch(error=>console.log(error))
             
        }
    })
   
    function saveEmployee(e){
        e.preventDefault();
        if(validate()){
            const employee={firstName,lastName,email}
            console.log(employee)
            if(id){
                updateEmployee(id,employee).then((Response)=>{
                    console.log(Response.data);
                    navigator('/employees')
                }).catch(error=>{
                    console.error(error);
                })
            }
           else{
            createEmployee(employee).then((Response)=>{
                console.log(Response.data)
                navigator('/employees')
            }).catch(error=>{
                console.error(error)
            })}
        }
       

    }
    function validate(){
        let valid=true;
        const errorscopy={...errors}
        if(firstName.trim()){
            errorscopy.firstName='';
        }else{
            errorscopy.firstName='First name is required';
            valid=false;
        }
        if(lastName.trim()){
            errorscopy.lastName='';
        }else{
            errorscopy.lastName='Last name is required';
            valid=false;
        }
        if(email.trim()){
            errorscopy.email='';
        }
        else{
            errorscopy.email='email is required';
            valid=false;
        }
        setError(errorscopy);
        return valid;

    }
    function pageTitle(){
        if(id){
            return  <h2 className="text-center">Update Employee</h2>
        }
        else{
            return  <h2 className="text-center">Add Employee</h2>
        }
    }

  return (
    <div className='container'>
        <br></br>
        <div className='row'>
            <div className="card col-md-6 offset-md-3">
                {
                    pageTitle()
                }
                <div className="card-body">
                    <form>
                        <div className="form-group mb-2">
                            <label  className="form-label">FirstName</label>
                            <input type='text' placeholder='Enter Employee Firstname' name='firstName' value={firstName}
                           className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                            onChange={(e)=>setfname(e.target.value)}>
                            </input>
                            {errors.firstName&&<div className='invalid-feedback'>{errors.firstName}</div>}
                        </div>
                        <div className="form-group mb-2">
                            <label  className="form-label">LaststName</label>
                            <input type='text' placeholder='Enter Employee Lastname' name='lastName' value={lastName}
                            className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                            onChange={(e)=>setlname(e.target.value)}>
                            </input>
                            {errors.lastName&&<div className='invalid-feedback'>{errors.lastName}</div>}
                        </div>
                        <div className="form-group mb-2">
                            <label  className="form-label">Email</label>
                            <input type='email' placeholder='Enter Employee Email' name='email' value={email}
                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                            onChange={(e)=>setmail(e.target.value)}>
                            </input>
                            {errors.email&&<div className='invalid-feedback'>{errors.email}</div>}
                        </div>
                        <button className=' btn btn-success ' onClick={saveEmployee}>Submit</button>
                    </form>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Empl