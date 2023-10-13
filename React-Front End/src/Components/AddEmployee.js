import { useState } from "react";
import RegistrationService from "../Service/RegistrationService";
import { useNavigate } from "react-router";

function AddEmployee(){
    const navigate=useNavigate();
    const[employee, setEmployee]=useState({
        reg_id:"",
        reg_name: "",
        reg_mail:"",
        reg_number:"",
    });

    const handleChange=(e)=>{
        const value=e.target.value;
        setEmployee({ ...employee, [e.target.name]:value});
    };

    const saveEmployee=(e)=>{
      e.preventDefault();
        RegistrationService.saveEmployee(employee)
        .then((response)=>{
            console.log(response);
            navigate("/listEmployees");
            
        })
        .catch((error)=>{
            console.log(error);
        });
    };
    const clearEmployee=(e)=>{
        
        setEmployee({
            reg_name: "",
            reg_mail:"",
            reg_number:"",
        });
    };

    return (
        <div className="flex max-w-2xl shadow border-b">
            <div className="px-8 py-8">
                <div className="font-thin text-2xl tracking-wider">

                    <h1> Register New USer</h1>

                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-250">Registration Name</label>
                    <input type="text" onChange={(e)=>handleChange(e)} name="reg_name" value={employee.reg_name} className="h-10 w-96 bg-slate-300 px-2 py-2"></input>
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block">Registration mail</label>
                    <input type="email" onChange={(e)=>handleChange(e)} name="reg_mail"  value={employee.reg_mail} className="h-10 w-96 bg-slate-300 px-2 py-2"></input>
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block">Registration Number</label>
                    <input type="text" onChange={(e)=>handleChange(e)} name="reg_number" value={employee.reg_number} className="h-10 w-96 bg-slate-300 px-2 py-2"></input>
                </div>
                <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-2s pb-2">
                    <button onClick={saveEmployee} className="rounded text-white bg-green-400 hover:bg-green-700">SAVE</button>
                    <button onClick={clearEmployee} className="rounded text-white bg-red-400 hover:bg-red-700">CLEAR</button>
                </div>
            </div>
        </div>

    );
}
export default AddEmployee;