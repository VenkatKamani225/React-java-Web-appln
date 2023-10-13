import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import RegistrationService from "../Service/RegistrationService";
import Employ from "./Employ";

function EmployeeList(){

    const navigate=useNavigate();
    const [loading, setLoading]=useState(true);
    const [employees, setEmployees]=useState(null);
    
    useEffect(()=>{
        
        const fetchData=async ()=>{
            setLoading(true);
            try{
               const response= await RegistrationService.getEmployees();
               setEmployees(response.data);
            }catch(error){
                console.log(error);
                console.log("hhh");
            }
            setLoading(false);
        };
        fetchData();
        
    },[]);

    const deleteEmployee=(e,id)=>{
        e.preventDefault();
        RegistrationService.deleteEmployee(id).then((res)=>{
            if(employees){
                setEmployees((prevElement)=>{
                    return prevElement.filter((employee)=>employee.reg_id !== id);
                });
            }
        });
    
    };

    return(
        <div className="container m-auto">
            <div className="h-12 ">
                <button onClick ={()=>{navigate("/addEmployee")}} className="rounded bg-slate-400 text-white px-2 py-2 font-semibold">Add Employee</button>
            </div>
            <div className="flex shadow border-b">
                <table className="min-w-full px-2 py-2">
                    <thead>
                        <tr>
                            <th className="text-left uppercase tracking-wider">REG NAME</th>
                            <th className="text-left uppercase tracking-wider">REG MAIL</th>
                            <th className="text-left uppercase tracking-wider">REG NUMBER</th>
                            <th className="text-right uppercase tracking-wider">ACTION</th>
                        </tr>
                    </thead>
                    {!loading && (
                    <tbody>
                        {employees.map((emp)=>(
                        <Employ employ={emp} deleteEmployee={deleteEmployee} key={emp.reg_id}></Employ>
                        ))}
                    </tbody>
                    )}
                </table>
            </div>
        </div>
    );
}

export default EmployeeList;