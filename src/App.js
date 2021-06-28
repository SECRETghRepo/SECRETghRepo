import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Navbar} from './components/Navbar';
import {Tree} from './components/Tree'
import {Home} from './components/Home'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
          <Navbar/>
          <Switch>
            <Route exact path = '/matrix-to-tree'>
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