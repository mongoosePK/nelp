import { withRouter } from 'react-router-dom';
import { BusinessSearch } from '../api/BusinessSearch';


function ResultList ( {search} ) {

    BusinessSearch(search);

    return(

        <p>Result List for {search} Coming</p>
    );
}

export default withRouter(ResultList);