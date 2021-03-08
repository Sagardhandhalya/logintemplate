import './App.css';
import {BrowserRouter as Router , Link , Route} from 'react-router-dom'
import { useAuth } from './context/auth_context';
import Profile from './components/Profile';
import Login from './components/Login';
import Register from './components/Register';
import SnackbarProvider from 'react-simple-snackbar'
import {auth} from './firebase'

function App() {
 
  console.log(auth.currentUser);
const authContext = useAuth()
//   auth.signOut().then(() => {
//     console.log('sign out success');
//     localStorage.removeItem('user')
// }).catch((error) => {
//     console.log(error);
// });

  return (
<SnackbarProvider>
    <div className="App">
    
       { authContext.user ?
          <Profile/> 
          
          :<Router>
            <Route exact path="/" component={Login} />
            <Route path="/register" component={Register} />
          </Router>
        
       }
    </div>
    </SnackbarProvider>
  );
}

export default App;
