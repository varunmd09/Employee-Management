package net.varun.ems_backend.service;

import net.varun.ems_backend.dto.EmployeeDto;

import java.util.List;

public interface EmployeeService {
    EmployeeDto createEmployee(EmployeeDto employeeDto);
    EmployeeDto getEmployeeID(Long employeeid);
    List<EmployeeDto> getAllemployee();
    EmployeeDto updateEmployee(Long employeeid,EmployeeDto updatedEmployee);
    EmployeeDto deleteEmployee(Long employeeid);
    EmployeeDto DeleteAllEmployee();
}
