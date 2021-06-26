import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Navbar} from './components/Navbar';
import {Tree} from './components/Tree'
import {Home} from './components/Home'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
          <Switch>
            <Navbar/>
            <Route exact path = '/tree'>
              <Tree />
            </Route>
            <Route exact path = '/home'>
              <Home />
            </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;