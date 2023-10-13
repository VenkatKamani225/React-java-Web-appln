import axios from "axios";

const backend_Gateway_URL="http://localhost:8080/api/set";
const backend_Gateway_Fetch_URL="http://localhost:8080/api/allRegs";
const backend_Gateway_Delete_URL="http://localhost:8080/api/delete";
const backend_Gateway_Update_URL="http://localhost:8080/api/update";

class RegsitrationService{
    saveEmployee(employee){
        return axios.post(backend_Gateway_URL,employee);
    }
    
    getEmployees(){
        return axios.get(backend_Gateway_Fetch_URL);
    }
    deleteEmployee(id){
        return axios.delete(backend_Gateway_Delete_URL+"/"+id);
    }

    getEmployeebyId(id){
        return axios.get(backend_Gateway_Update_URL+"/"+id);
    }

    updateEmployeeById(id,employee){
        return axios.put(backend_Gateway_Update_URL+"/"+id,employee);
    }

}
export default new RegsitrationService();