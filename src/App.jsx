import React from 'react'
import Portfolio from './Components/Portfolio.jsx'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Admin from './Components/Auth/Admin.jsx';
import DashBoard from './Components/Panel/DashBoard.jsx';

const App = () => {
  return (
    <>
    <Router>
     <Routes>
      <Route    path='/' element={<Portfolio/>}/>
      <Route    path='/ZeeshanAhmad4414/Admin' element={<Admin/>}/>
      <Route    path='/Admin/Dashboard/*' element={<DashBoard/>}/>
      </Routes> 
    </Router>  
    </>
  )
}

export default App
