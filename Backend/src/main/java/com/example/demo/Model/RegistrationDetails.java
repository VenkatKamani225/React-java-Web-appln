package com.example.demo.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="employeedetails")
public class RegistrationDetails {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int reg_id;
	private String reg_name;
	@Column(name="reg_mail")
	private String reg_mail;
	@Column(name="reg_number")
	private int reg_number;
	
	
	
	public int getReg_id() {
		return reg_id;
	}
	public void setReg_id(int reg_id) {
		this.reg_id = reg_id;
	}
	public String getReg_name() {
		return reg_name;
	}
	public void setReg_name(String reg_name) {
		this.reg_name = reg_name;
	}
	public String getReg_mail() {
		return reg_mail;
	}
	public void setReg_mail(String reg_mail) {
		this.reg_mail = reg_mail;
	}
	public int getReg_number() {
		return reg_number;
	}
	public void setReg_number(int reg_number) {
		this.reg_number = reg_number;
	}
	

}
