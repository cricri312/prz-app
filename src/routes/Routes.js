import { Route, Switch } from 'react-router-dom';
import FileAndPayment from '../components/FileAndPayment';
import Roadmap from '../components/Roadmap';
import Contact from '../components/Contact';
import About from '../components/About'
import Team from "../components/Team";
import NFT from "../components/NFT";
const Routes = () => {
      return (
        <Switch>                
            <Route exact path="/" component={FileAndPayment}/>
            <Route path="/home" component={FileAndPayment}/>  
            <Route path='/roadmap' component={Roadmap}/>  
            <Route path='/team' component={Team}/>   
            <Route path='/contact' component={Contact}/>  
            <Route path='/about' component={About}/>
            <Route path='/NFT' component={NFT}/>                      
        </Switch>
      );
    
  }
  
  export default Routes;
