import Navbar from './components/Navbar';
import Home from './views/Home';
import NotFound from './views/NotFound';
import Publications from './views/Publications';
import Experience from './views/Experience';
import Projects from './views/Projects';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path="/publications" exact={true} component={Publications} />
          <Route path="/experience" exact={true} component={Experience} />
          <Route path="/projects" exact={true} component={Projects} />
          <Route path="/" exact={true} component={Home} />
          <Route path='*' exact={true} component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
