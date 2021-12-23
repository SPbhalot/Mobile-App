
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
// import NotFound from './coponent/pages/NotFound'
import Registration from './coponent/Registration';
import Login from './coponent/Login';

function App() {  
 
  return (
    <div className='App'> 
   <Router>
    <Switch>
      <Route path="/Registration"> <Registration/> </Route>
      <Route path="/"> <Login/> </Route>
    </Switch>
    </Router>
    
    </div>
  )
}






export default App