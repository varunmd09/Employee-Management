import React, { useEffect, useState } from 'react'
import { deleteEmployee, listemployees } from '../Services/EmpService'
import { useNavigate } from 'react-router-dom'

const ListEmp = () => {
    const[employee,setEmployees]=useState([])
    const navigator=useNavigate()
    useEffect(()=>{
       getallEmp();
        
    },[])
    function getallEmp(){
        listemployees().then((Response)=>{
            setEmployees(Response.data);
        }).catch(error=>{
            console.error(error);
        });

    }
    function addemployee(){
        navigator('/add-employee')

    }
    function updateEmployee(id){
        navigator(`/edit-employee/${id}`)

    }
    function removeEmployee(id){
        console.log(id);
        deleteEmployee(id).then((Response)=>{
            getallEmp();
        }).catch(error=>{
            console.error(error);
        })
    }
  return (
    <div className='container'>
        <h2 className='text-center'>List of Employees</h2>
        <button className='btn btn-primary mb-2' onClick={addemployee}>Add Employee</button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee FirstName</th>
                    <th>Employee LastName</th>
                    <th>Employee Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    employee.map(employee=>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>
                                <button className='btn btn-info' onClick={()=>updateEmployee(employee.id)}>Update</button>
                                <button className='btn btn-danger' onClick={()=>removeEmployee(employee.id)} style={{marginLeft:'10px'}}>Delete</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmp