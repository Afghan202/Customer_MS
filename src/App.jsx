import './App.css';
import AddUser from './addUser/AddUser';
import User from './getuser/User';
import {BrowserRouter, Route, Routes,} from 'react-router-dom'
import Navbar from './navbar/Navbar';
import Login from './component/Login';

function App() {
  return (
    <>
    <BrowserRouter>
   <Navbar/>
     <Routes>
      <Route path='/' element={<Login/>}/>
    <Route path='/customer/records' element={<User/>}/>
    <Route path='/add' element={<AddUser/>}/>
     </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
