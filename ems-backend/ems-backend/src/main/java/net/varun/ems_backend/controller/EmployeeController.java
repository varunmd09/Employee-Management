package net.varun.ems_backend.controller;

import lombok.AllArgsConstructor;
import net.varun.ems_backend.dto.EmployeeDto;
import net.varun.ems_backend.entity.Employee;
import net.varun.ems_backend.repository.EmployeeRepository;
import net.varun.ems_backend.service.EmployeeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/employees")
@AllArgsConstructor
public class EmployeeController {
    private EmployeeService employeeService;

    //build Eployee Rest API
    @PostMapping
    public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeeDto) {
        EmployeeDto savedEmployee=employeeService.createEmployee(employeeDto);
        return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
    }
    @GetMapping("{id}")
    public ResponseEntity<EmployeeDto> getemployeebyid(@PathVariable("id") Long employeeid){
        EmployeeDto employeeDto=employeeService.getEmployeeID(employeeid);
        return  ResponseEntity.ok(employeeDto);
    }
    @GetMapping
    public ResponseEntity<List<EmployeeDto>> getallemployess(){
       List<EmployeeDto> employees=employeeService.getAllemployee();
       return ResponseEntity.ok(employees);

    }
    //update employee
    @PutMapping("{id}")
    public ResponseEntity<EmployeeDto> UpdateEmployee(@PathVariable("id") Long employeeId, @RequestBody EmployeeDto updatedEmployee){
        EmployeeDto employeeDto=employeeService.updateEmployee(employeeId,updatedEmployee);
        return ResponseEntity.ok(employeeDto);
    }
    @DeleteMapping("{id}")
    public ResponseEntity<EmployeeDto> DeleteEmployee(@PathVariable("id") Long employeeid){
       EmployeeDto employeeDto= employeeService.deleteEmployee(employeeid);
       return  ResponseEntity.noContent().build();
    }
    @DeleteMapping("/delete-all")
    public ResponseEntity<EmployeeDto>DeleteAllEmployee(){
        return ResponseEntity.noContent().build();
    }

}
