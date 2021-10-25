import { withRouter } from 'react-router-dom';

function SearchBar ({query, setQuery, search, setSearch}) {


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
    </>
  );
};

export default withRouter(SearchBar);