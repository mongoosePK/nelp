import { Link, withRouter } from 'react-router-dom';
import { DetailSearch } from '../api/DetailSearch';
import Details from './Details';
import { useState } from 'react';

function BusinessCard ({business, bizID, setBizID }) {

    const setID = (id) => {setBizID(id)}
    console.log(bizID)
    // const details = bizDetails.map(detail =>
    //      <Details key={detail.id} detail={detail}/>)

    return(
        <>
        <Link to="/Details">
            <button onClick={() =>  setID(business.id)} value={business.id}>
                <h2>{business.name}</h2>
                <img src={business.image_url} height="300" width="150" />
            </button>
        </Link>
        </>
    );
}

export default withRouter(BusinessCard);