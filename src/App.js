import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Router>
        <div className="App-header">
          <Navigation/>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
          </Switch>
          <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;
