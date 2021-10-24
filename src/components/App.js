
import React, { useState } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route 
} from 'react-router-dom';
import SearchBar from './SearchBar';

import './App.css';
import Details from './Details';

function App() {
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('');
  const [businesses, setBusinesses] = useState([]);


  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
              <SearchBar
                query={query}
                setQuery={setQuery}
                search={search}
                setSearch={setSearch}
                businesses = {businesses}
                setBusinesses = {setBusinesses}
              />
          </Route>
          <Route path="/Details">
              <Details

                // bizDetails={bizDetails}
                // setBizDetails={setBizDetails}
              />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
