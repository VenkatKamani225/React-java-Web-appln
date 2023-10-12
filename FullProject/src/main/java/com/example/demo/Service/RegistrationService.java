package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.Model.RegistrationDetails;
import com.example.demo.Repo.RegistrationRepo;

@Service
public class RegistrationService {
	@Autowired
	RegistrationRepo regRepo;

	public List<RegistrationDetails> getAllRegDetails() {
		// TODO Auto-generated method stub
		return regRepo.findAll();
		
	}

	public void setNewData(RegistrationDetails reg) {
		// TODO Auto-generated method stub
		regRepo.save(reg);
		
		
	}

	public boolean deleteDataById(int id) {
		// TODO Auto-generated method stub
		RegistrationDetails reg = (regRepo.findById(id).get());
		
		
		regRepo.delete(reg);
		return true;
		
	}

	public RegistrationDetails updateEmployeeById(int id, RegistrationDetails emp) {
		// TODO Auto-generated method stub
		RegistrationDetails r = regRepo.findById(id).get();
		r.setReg_mail(emp.getReg_mail());
		r.setReg_name(emp.getReg_name());
		r.setReg_number(emp.getReg_number());
		regRepo.save(r);
		return r;
		
		
		
		
	}

	public RegistrationDetails getEmployeeById(int id) {
		// TODO Auto-generated method stub
		RegistrationDetails reg = regRepo.findById(id).get();
		return reg;
	}
	
	

}
