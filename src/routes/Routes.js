import { Route, Switch } from 'react-router-dom';
import Chart from '../components/Charts';
import Home from '../components/Home';
import Mqtt from '../components/Mqtt';
const Routes = (props) => {
      return (
        
        <Switch>     
            <Route exact path="/" component={Home}/> 
            <Route path="/mqtt" component={() => <Mqtt />}/>  
            <Route path='/chart' component={Chart}/>  
        </Switch>
      );
    
  }
  
  export default Routes;
