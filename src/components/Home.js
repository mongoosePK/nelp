import { withRouter } from 'react-router-dom';
import LandingPage from './LandingPage';
import ResultList from './ResultList';

function Home ({query, search}) {
    
    
    return(
        <>
        { 
        search === '' ?
        <LandingPage/> :
        <ResultList search={search}/> 
        }

        <p>home component Coming</p>
        <p>query={query}</p>
        <p>search={search}</p>
        </>
    );
}
export default withRouter(Home);