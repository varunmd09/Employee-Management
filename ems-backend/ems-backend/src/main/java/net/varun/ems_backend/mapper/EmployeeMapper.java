package net.varun.ems_backend.mapper;

import net.varun.ems_backend.dto.EmployeeDto;
import net.varun.ems_backend.entity.Employee;

public class EmployeeMapper
{
    public  static EmployeeDto mapToEmployeeDto(Employee employee){
        return new EmployeeDto(
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail()

        );
    }
    public static  Employee MapTOEmployee(EmployeeDto employeeDto){
        return new Employee(employeeDto.getId(),
        employeeDto.getFirstName(),
        employeeDto.getLastName(),
        employeeDto.getEmail()
        );
    }


}
