import { withRouter } from 'react-router-dom';
import LandingPage from './LandingPage';
import ResultList from './ResultList';

function SearchBar ({query, setQuery, search, setSearch, businesses, setBusinesses}) {

  const submitSearchForm = (query) => {
    setSearch(encodeURI(query))
  };

  return(
    <>
    <form onSubmit={e => e.preventDefault()}>
      <input 
      className="searchForm"
      type="text"
      placeholder="Search Naperville..."
      value={ query }
      onChange={(e) => setQuery(e.target.value)}
      />
    <button
      className="search_button"
      type="submit"
      onClick={() => submitSearchForm(query)}
      >click</button>
    </form>
    // If the search term has been entered render Result list component
    <p>query={query}</p>
    <p>search={search}</p>

    { 
    search === '' ?
    <LandingPage/> :
    <ResultList 
    search={search}
    businesses = {businesses}
    setBusinesses = {setBusinesses}/> 
    }  
    </>
  );
};

export default withRouter(SearchBar);