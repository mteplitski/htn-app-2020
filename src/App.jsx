import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/Login';
import Overview from './components/Overview';
import AuthProvider from './components/AuthProvider';

function App() {
  return (
    <AuthProvider render={(renderProps) => {
      const { loggedIn, handleLogIn, handleLogOut } = renderProps;
      if(!loggedIn){
        return <Login onLogIn={handleLogIn}/>
      }

      return <Overview onLogOut={handleLogOut} />
    }}/>
  );
}

export default App;
