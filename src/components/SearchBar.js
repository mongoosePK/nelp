import { withRouter } from 'react-router-dom';


function SearchBar ({query, setQuery, setSearch}) {
  
  const submitSearchForm = (query) => {
    console.log(query + ' form submitted!!'); 
    const searchSlug = encodeURI(query);
    setSearch(searchSlug);
  };

  return(
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

  );
};

export default withRouter(SearchBar);