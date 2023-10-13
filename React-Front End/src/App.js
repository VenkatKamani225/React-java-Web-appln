
import './App.css';
import Navbar from './Components/Navbar';
import AddEmployee from './Components/AddEmployee';
import { Navigate, Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import EmployeeList from './Components/DisplayList';
import UpdateEmployee from './Components/UpdateEmployee';

function App() {
  return (
  <>
    
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route index element={<EmployeeList />}></Route>
        <Route path="/" element={<EmployeeList />}></Route>
        <Route path="/addEmployee" element={<AddEmployee />}></Route>
        <Route path="/registerDetails" element={<AddEmployee />}></Route>
        <Route path="/listEmployees" element={<EmployeeList />}></Route>
        <Route path="/updateEmployee/:id" element={<UpdateEmployee />}></Route>
          
          
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
