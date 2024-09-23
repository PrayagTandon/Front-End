import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// function userProfile({ match }) {
//   const userId = match.param.id;

//   return (
//     <div>
//       <h2>User Profile</h2>
//       <p>User ID: {userId}</p>
//     </div>
//   );
// }

function Dashboard() {
  return <h2>Dashboard</h2>;
}

function Login() {
  return <h2>Login</h2>;
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          {loggedIn ? <Dashboard /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login" component={Login} />
        <Redirect from='/' to="/dashboard" />
      </Switch>
    </Router>
  );
}

export default App;