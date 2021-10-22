import { useState, useEffect } from 'react';
import yelpapi from './FusionAPI';

export function BusinessSearch( props ) {
    const [businesses, setBusinesses] = useState({ hits: [] });
    const term = props;
    console.log("...preparing to call Yelp")
    
    useEffect(() => {
        const fetchData = async () => {
        const response = await yelpapi
        .get(`/businesses/search?term=${term}&location=naperville&limit=5`)
            .then(response => {
                setBusinesses(response.data.businesses)
                console.log("the api made the call")
                console.log(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    };
    fetchData();
    }, [term]);
};