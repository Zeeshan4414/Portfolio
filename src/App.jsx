import React from 'react'
import Portfolio from './pages/Portfolio.jsx'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Admin from './features/auth/components/AdminLogin.jsx';
import DashBoard from './features/dashboard/components/Dashboard.jsx';
import ProtectedRoute from './components/ui/ProtectedRoute.jsx';

const App = () => {
  return (
    <>
    <Router>
     <Routes>
      <Route    path='/' element={<Portfolio/>}/>
      <Route    path='/ZeeshanAhmad4414/Admin' element={<Admin/>}/>
      <Route    
        path='/Admin/Dashboard/*' 
        element={
          <ProtectedRoute>
            <DashBoard />
          </ProtectedRoute>
        }
      />
      </Routes> 
    </Router>  
    </>
  )
}

export default App
