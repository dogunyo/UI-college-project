import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar'; // Ensure you have a Navbar component
import Home from './Components/Home'; // Ensure you have a Home component
import Login from './Components/Register'; // Import Login component
import Signup from './Components/Login'; // Import Signup component
import AddStudent from './Components/AddStudent'; // Import AddUser component
import NotFound from './Components/NotFound'; // Ensure you have a NotFound component
import GetMyStudents from './Components/GetMyStudents';
import UpdateStudent from './Components/UpdateStudent';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/register">
              <Login />
            </Route>
            <Route path="/login">
              <Signup />
            </Route>
            <Route path="/AddStudent">
              <AddStudent />
            </Route>
            <Route path="/GetMyStudents">
              <GetMyStudents />
            </Route>
            <Route path="/UpdateStudent/:id">
              <UpdateStudent />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;