import { useNavigate } from "react-router";

function Employ({ employ, deleteEmployee }){
    
    const navigate = useNavigate();
    const editEmployee=(e,id)=>{
        e.preventDefault();
        navigate(`/UpdateEmployee/${id}`);
    };
    
    return(

        <tr key={employ.reg_id}>
            <td className="text-left">{employ.reg_name}</td>
            <td>{employ.reg_mail}</td>
            <td>{employ.reg_number}</td>
            <td className="text-right">
                <a onClick={(e,id)=>editEmployee(e,employ.reg_id)} className="px-2 py-4 text-blue-200 hover:text-blue-400 ml-1 border-black">Edit</a>
                <a onClick={(e,id)=>{deleteEmployee(e,employ.reg_id)}} href="#" className="px-2 py-4 text-red-400 hover:text-red-600">Delete</a>
            </td>
        </tr>
    );

}

export default Employ;