import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './components/auth/Login';
import NewAccount from './components/auth/NewAccount';
import Projects from './components/projects/Projects';
import PrivateRoute from './components/routes/PrivateRoute';
import tokenAuth from './config/tokenAuth';
import AlertState from './context/alerts/AlertState';
import AuthState from './context/auth/AuthState';
import ProjectState from './context/projects/ProjectState'
import TaskState from './context/tasks/taskState';



//check if token
const token = localStorage.getItem('token')

if(token) {
    tokenAuth(token)
}


function App() {
  console.log(process.env.REACT_APP_BACKEND_URL)
  return (
    <ProjectState>
      <TaskState>
        <AlertState>
          <AuthState>
          <Router>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/new-account" component={NewAccount} />
                <PrivateRoute exact path="/projects" component={Projects} />
              </Switch>
            </Router>  
          </AuthState>
        </AlertState>  
      </TaskState>
    </ProjectState>
  );
}

export default App;


