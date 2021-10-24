import { Link, withRouter } from 'react-router-dom';
import { DetailSearch } from '../api/DetailSearch';
import Details from './Details';
import { useState } from 'react';

function BusinessCard ({business}) {

    const [bizDetails, setBizDetails] = useState([]);
    const [bizID, setBizID] = useState('');
    const setID = (id) => {setBizID(id)}
    console.log(business.id)
    
    DetailSearch({bizID, setBizDetails})
    //{bizDetails === '' ? }

    // const details = bizDetails.map(detail =>
    //      <Details key={detail.id} detail={detail}/>)


    return(
        <>
        <Link to="/Details">
            <div onClick={() =>  setID(business.id)}>
                <h2>{business.name}</h2>
                <img src={business.image_url} height="300" width="150" />
            </div>
        </Link>
        </>
    );
}

export default withRouter(BusinessCard);