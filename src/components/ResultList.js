import { withRouter } from 'react-router-dom';
import { BusinessSearch } from '../api/BusinessSearch';
import { useState } from 'react';

function ResultList ( {search} ) {

    const [businesses, setBusinesses] = useState({ hits: [] });
    
    BusinessSearch( {search, businesses, setBusinesses} );

    return(
        <>
        <p>Result List for {search} Coming</p>
        {/* <ul>
            {businesses.hits.map(item => (
                <li key={item.id}>
                    <a href={item.url}>{item.name}</a>
                </li>
            ))};
        </ul> */}
        </>
    );
}

export default withRouter(ResultList);