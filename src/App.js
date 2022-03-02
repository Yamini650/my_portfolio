import React from "react"
import { Container } from "react-bootstrap"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import BusinessContacts from './components/businessContacts/businessContacts';
import Home from './components/home';
import ForgotPassword from './components/login/ForgotPassword';
import Login from './components/login/Login';
import PrivateRoute from './components/login/PrivateRoute';
import Signup from './components/login/Signup';
import UpdateProfile from './components/login/UpdateProfile';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100">
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path="/" component={Home} />
              <div style={{ maxWidth: "400px", margin:'auto' }}>
                <PrivateRoute path="/update-profile" component={UpdateProfile} />
                <PrivateRoute path="/business-contacts" component={BusinessContacts} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/forgot-password" component={ForgotPassword} />
              </div>
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App

