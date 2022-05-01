import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Event from './pages/Event';
import AddEvent from './pages/AddEvent';
import EditEvent from './pages/EditEvent';
import Pin from './pages/Pin';
import Usermanagement from './pages/UserManagement';
import Userpetition from './pages/Petition';

function App() {
  return (
      <Router>
          <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/event' element={<Event />} />
              <Route path='/event/addevent' element={<AddEvent />} />
              <Route path='/event/editevent' element={<EditEvent />} />
              <Route path='/pin' element={<Pin />} />
              <Route path='/usermanagement' element={<Usermanagement />} />
              <Route path='/petition' element={<Userpetition />} />
              <Route path='*' element={<Login />} />
          </Routes>
      </Router>
  );
}

export default App;
