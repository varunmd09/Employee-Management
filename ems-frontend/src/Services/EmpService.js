import axios from 'axios';
const REST_API_BASE_URL='http://localhost:8080/api/employees';
export const listemployees=()=>axios.get(REST_API_BASE_URL)
export const createEmployee=(employee)=>axios.post(REST_API_BASE_URL,employee);
export const getEmployee=(employeeid)=>axios.get(REST_API_BASE_URL+'/'+employeeid);
export const updateEmployee=(employeeid,employeeObj)=>axios.put(REST_API_BASE_URL+'/'+employeeid+'/'+employeeObj);
export const deleteEmployee=(employeeid)=>axios.delete(REST_API_BASE_URL+'/'+employeeid)
