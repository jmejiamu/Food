import { useEffect, useState } from 'react';
import yelp from '../api/yelp';


export default () => {
    const [ result, setResults ] = useState([]);
    const [ errorMessage, setErrorMessage ] = useState('');
    
    const searchApi = async (searchTerm) => {
        try{
        const response = await yelp.get('/searh',{
            params:{
                limit:50,
                term: searchTerm,
                location: 'san jose'
            }
        });
        setResults (response.data.businesses);
    } catch(err){
        setErrorMessage('Something went wrong')
    }
    };

    //Call searchApi when component 
    // is first rendered
    // searchApi('pasta');
    useEffect(() => {
        searchApi('pasta');
    },[])
    return [searchApi, result, errorMessage]
};