
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Navbar from './Components/common/Navbar';
import Contact from './Components/common/Contact';
import Nutrition from './Components/Nutrition/Nutrition';
import Workouts from './Components/Workouts/Workouts';
import Profile from './Components/Profile/Profile';
const Routess = () => {
    return (
        <Router>
          <div className="">
            <Navbar />
            <Routes>
    
              
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/" element={<Dashboard />} />
              <Route path="/Nutrition" element={<Nutrition/>} />
              <Route path="/Workouts" element={<Workouts/>} />
              <Route path="/Profile" element={<Profile/>} />
            
            </Routes>
            <Contact/>
          </div>
        </Router>
      );
};

export default Routess;