import {useState,useEffect} from 'react'
// import {API_Key} from '../photos/key';

const API_KEY ="AIzaSyBEiohmEiaX00BD6aySZrcUDhLbUjN4e8M";
const CONTEXT_KEY ="e00d6582a4eda1cd0"

// const term = 'aap'

const useGoogleSearch =  (term) => {
    
    const [data, setData] = useState(null);

      console.log({term} + " useGooleSearch");
    useEffect(() => {

        const fetchData = async()=>{
           fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
            .then(response => response.json())
            .then(result =>{
                setData(result)
                console.log(result);
            })
        }
        fetchData();
    }, [term])
    //  console.log({data});
    //whenever we type this useEffect refresh and show the new related dATA
return {data}
}

export default useGoogleSearch