package com.example.demo.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.RegistrationDetails;
import com.example.demo.Service.RegistrationService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("api")
public class RegistrationController {
	@Autowired
	RegistrationService regService;
	
	@GetMapping("/")
	public String beginningPage() {
		return "<h2>Welcome</h2>";
	}
	
	@GetMapping("/allRegs")
	public List<RegistrationDetails> getAllRegDetails(){
		return regService.getAllRegDetails();
	}
	
	
	@PostMapping("/set")
	public void setNewData(@RequestBody RegistrationDetails reg) {
		regService.setNewData(reg);
	}
	@DeleteMapping("/delete/{id}")
		public ResponseEntity<Map<String,Boolean>> deleteDataById(@PathVariable("id") int id) {
		Boolean deleted=false;	
		deleted=regService.deleteDataById(id);
		Map<String,Boolean> response=new HashMap<>();
		response.put("deleted", deleted);
		return ResponseEntity.ok(response);
		
	}
	
	@GetMapping("/update/{id}")
	public ResponseEntity<RegistrationDetails> getEmployeeById(@PathVariable("id") int id){
		RegistrationDetails reg = regService.getEmployeeById(id);
		
		return ResponseEntity.ok(reg);
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<RegistrationDetails> updateEmployeeById(@PathVariable("id") int id,@RequestBody RegistrationDetails reg) {
		RegistrationDetails r = regService.updateEmployeeById(id,reg);
		return ResponseEntity.ok(r);
				
		
	}

}
