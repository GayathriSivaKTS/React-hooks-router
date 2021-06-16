import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route, Switch,
  Link,
} from 'react-router-dom';
import Header from './Components/Head/Header';
import StateEffect from './Components/StateEffect';
import Services from './Components/Services';
import ContextCom from './Components/ContextCom';
import ReducerCom from './Components/ReducerCom';
import CallbackCom from './Components/CallbackCom';
import NotFound from './NotFound';
import Params from './Components/Params';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/ContextCom" component={ContextCom} />
          <Route path="/StateEffect" component={StateEffect} />
          <Route path="/ReducerCom" component={ReducerCom} />
          <Route path="/CallbackCom" component={CallbackCom} />
          <Route path="/Services/:id" component={Services} />
          <Route component={NotFound} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
