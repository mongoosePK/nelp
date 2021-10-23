
import React, { useState } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route 
} from 'react-router-dom';
import SearchBar from './SearchBar';

import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('');
  const [businesses, setBusinesses] = useState([]);


  return (
    <div>
      <Router>
        <SearchBar
          query={query}
          setQuery={setQuery}
          search={search}
          setSearch={setSearch}
          businesses = {businesses}
          setBusinesses = {setBusinesses}
          />
        <Switch>
          {/* <Route
            path='/search/DetailCard'
            render={props =>(
              <DetailCard
                {...props}
              />
            )}
          /> */}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
