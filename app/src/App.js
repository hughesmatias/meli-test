import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Layout from './components/Layout';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/items/:id">
            <Item />
          </Route>
          <Route path="/items?search=:query">
            <Items />
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
