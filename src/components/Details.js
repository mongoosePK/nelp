import { withRouter } from "react-router";
import { DetailSearch } from "../api/DetailSearch";
import { useState } from "react"

function Details({bizID, bizDetails, setBizDetails}) {
    
    DetailSearch({bizID, setBizDetails})
    
    return (
        <>
        
        <p>{bizDetails.name} details</p>
        <p>{bizDetails.rating}</p>
        <p>{bizDetails.address1}</p>
        </>
    );
}

export default withRouter(Details);