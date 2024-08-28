package net.varun.ems_backend.service.impl;

import lombok.AllArgsConstructor;
import net.varun.ems_backend.dto.EmployeeDto;
import net.varun.ems_backend.entity.Employee;
import net.varun.ems_backend.exception.ResourceNotFoundException;
import net.varun.ems_backend.mapper.EmployeeMapper;
import net.varun.ems_backend.repository.EmployeeRepository;
import net.varun.ems_backend.service.EmployeeService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {
    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee employee= EmployeeMapper.MapTOEmployee(employeeDto);
        Employee savedemployee=employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedemployee);
    }

    @Override
    public EmployeeDto getEmployeeID(Long employeeid) {
       Employee employee= employeeRepository.findById(employeeid)
                .orElseThrow(()-> new ResourceNotFoundException("employeeid doesnot Exist:"+employeeid));
    return EmployeeMapper.mapToEmployeeDto(employee);
    }

    @Override
    public List<EmployeeDto> getAllemployee() {
        List<Employee> employees=employeeRepository.findAll();
        return employees.stream().map((employee1) -> EmployeeMapper.mapToEmployeeDto(employee1))
                .collect(Collectors.toList());
    }

    @Override
    public EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployee) {
        Employee employee=employeeRepository.findById(employeeId)
                .orElseThrow(()->new ResourceNotFoundException("employeeid doenot exist"+employeeId));
        employee.setFirstName(updatedEmployee.getFirstName());
        employee.setLastName(updatedEmployee.getLastName());
        employee.setEmail(updatedEmployee.getEmail());
        Employee updatedEmployeeObj= employeeRepository.save(employee);

        return EmployeeMapper.mapToEmployeeDto(updatedEmployeeObj);
    }

    @Override
    public EmployeeDto deleteEmployee(Long employeeid) {
        Employee employee=employeeRepository.findById(employeeid)
                .orElseThrow(()->new ResourceNotFoundException("employeeid not found"+employeeid));
      employeeRepository.deleteById(employeeid);
       return EmployeeMapper.mapToEmployeeDto(employee);
    }

    @Override
    public EmployeeDto DeleteAllEmployee() {
      employeeRepository.deleteAll();
        return EmployeeMapper.mapToEmployeeDto(new Employee());
    }
}
