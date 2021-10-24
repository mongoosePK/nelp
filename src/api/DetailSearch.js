import yelpapi from  './FusionAPI';
import { useEffect } from 'react';

//
export function DetailSearch( {id, setBizDetails}) {
    
    useEffect(() => {
        setBizDetails([]);
        const fetchData = async () => {
            const response = await yelpapi
            .get(`/businesses/${id}`)
                .then(response => {
                    setBizDetails(response.data)
                    console.log(response.data)
                    console.log("the api made the call");
                })
                .catch(err => {
                    console.log(err);
                });
        };
        fetchData();
    }, [id]);
};