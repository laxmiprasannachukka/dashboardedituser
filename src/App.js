import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar';
import Topbar from './topbar';
import Dashboard from './dashboard';
import Users from './users';
import Createuser from './createuser';
import Edituser from './edituser';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Profile from './profile';
import { UserProvider } from './usercontext';


function App() {
  return (
  <>
   <Router>
  <div id="wrapper">
  <Sidebar></Sidebar>
  <UserProvider>
  <div id="content-wrapper" class="d-flex flex-column">
  <div id="content">
  <Topbar></Topbar>
  <div class="container-fluid">
  <Switch>
          <Route path="/" exact="true">
          <Dashboard></Dashboard>
          </Route>
          <Route path="/users" exact="true">
          <Users></Users>
          </Route>
          <Route path="/createuser" exact="true">
          <Createuser></Createuser>
          </Route>
          <Route path="/edituser/:id" component={Edituser} exact="true">
          </Route>
          <Route path="/profile" exact="true">
          <Profile></Profile>
          </Route>
  </Switch>
  </div>
  </div>
  </div>
  </UserProvider>
  </div>
  </Router>
  </>
  );
}

export default App;
