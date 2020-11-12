import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Layout from './components/Layout';
import Home from './pages/Home';
import Item from './pages/Item';
import Items from './pages/Items';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/items">
            <Items />
          </Route>
          <Route exact path="/items/:id">
            <Item />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
