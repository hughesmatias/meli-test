import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Item from "./pages/Item";
import Items from "./pages/Items";

import ItemContext from "./utils/contexts/Item";

import "./assets/scss/index.scss";

const App = () => {
  const [search, setSearch] = useState('');

  return (
    <Router>
      <ItemContext.Provider value={{
        search,
        setSearch,
      }}>
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
      </ItemContext.Provider>
    </Router>
  );
};

export default App;
