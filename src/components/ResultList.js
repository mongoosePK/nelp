import { withRouter } from 'react-router-dom';
import { BusinessSearch } from '../api/BusinessSearch';
import BusinessCard from './BusinessCard';

function ResultList ( {search, businesses, setBusinesses, setBizID, setBizDetails} ) {

    
    BusinessSearch({search, businesses, setBusinesses})
    const results = businesses.map(business => 
        <BusinessCard key={business.id} business={business} setBizID={setBizID} setBizDetails={setBizDetails}/>)
    
    console.log({businesses});
    
    return(
        <>
        <div>
            {results}
        </div>
        </>
    );
}

export default withRouter(ResultList);