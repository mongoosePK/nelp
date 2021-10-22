import { useState, useEffect } from 'react';
import yelpapi from './FusionAPI';

export function BusinessSearch( {search, businesses, setBusinesses} ) {
    
    console.log("...preparing to call Yelp")
    
    useEffect(() => {
        const fetchData = async () => {
        const response = await yelpapi
        .get(`/businesses/search?term=${search}&location=naperville&limit=5`)
            .then(response => {
                setBusinesses(response.data.businesses)
                console.log("the api made the call")
                console.log(response.data.businesses);
            })
            .catch(err => {
                console.log(err);
            });
    };
    fetchData();
    }, [search]);
    
};