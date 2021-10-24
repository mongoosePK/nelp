import yelpapi from  './FusionAPI';
import { useEffect } from 'react';

//
export function DetailSearch( {bizID, setBizDetails}) {
    console.log(bizID)
    useEffect(() => {
        setBizDetails([]);
        const fetchData = async () => {
            const response = await yelpapi
            .get(`/businesses/${bizID}`)
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
    }, [bizID]);
};