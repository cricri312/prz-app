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
            {/* 
            <Route path='/team' component={Team}/>   
            <Route path='/contact' component={Contact}/>  
            <Route path='/about' component={About}/>
            <Route path='/NFT' component={NFT}/>                       */}
        </Switch>
      );
    
  }
  
  export default Routes;
