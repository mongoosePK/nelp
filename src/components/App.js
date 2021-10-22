
import React, { useState } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route 
} from 'react-router-dom';
import Home from './Home';
import SearchBar from './SearchBar';

import './App.css';
import DetailView from './DetailView';

function App() {
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('');


  return (
    <div>
      <Router>
        <SearchBar
          query={query}
          setQuery={setQuery}
          setSearch={setSearch}
        />
        <Switch>
          <Route
            path='/search/DetailView'
            render={props =>(
              <DetailView
                {...props}
              />
            )}
          />
          <Route
            exact
            path="/"
            render={props => (
              <Home
                {...props}
                query = {query}
                search = {search}
              />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
