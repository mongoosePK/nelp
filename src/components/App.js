import React, { useState } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route 
} from 'react-router-dom';
import SearchBar from './SearchBar';
import LandingPage from './LandingPage';
import ResultList from './ResultList';
import Details from './Details';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('');
  const [businesses, setBusinesses] = useState([]);
  const [bizDetails, setBizDetails] = useState([]);
  const [bizID, setBizID] = useState('');

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
                businesses={businesses}
                setBusinesses={setBusinesses}
              />
               { 
                search === '' ?
                <LandingPage/> :
                <ResultList 
                search={search}
                businesses={businesses}
                setBusinesses={setBusinesses}
                bizID={bizID}
                setBizID={setBizID}
                setBizDetails={setBizDetails}
                /> 
                }  
          </Route>
          <Route path="/Details">
              <Details
                bizID={bizID}
                setBizID={setBizID}
                bizDetails={bizDetails}
                setBizDetails={setBizDetails}
              />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
