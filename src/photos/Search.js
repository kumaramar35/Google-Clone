import React,{useState} from 'react';
import './Search.css';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from '@mui/material';
import {useNavigate} from "react-router-dom";
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Search ({hideButtons=false}) {
    // console.log(hideButtons )
    const [state, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const history =  useNavigate();  

    const search = (e) =>{
        e.preventDefault();
        //  console.log("you wrote this" + input);
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })
        history('/search')
    }


  return (
    <form className='search'>
        <div className="search__input">
            <SearchIcon className="search__inputIcon"></SearchIcon>
            <input type="text"  value={input} onChange= { (e) =>setInput(e.target.value) }/>
            <MicIcon></MicIcon>
        </div>
        {!hideButtons? (
            <div className="search__buttons">
            <Button   type='submit' variant='outlined' onClick={search}>Google Search</Button>
            <Button variant='outlined'>I'm Feeling Lucky</Button>
            
        </div>
        ) :(
            
            <div className="search__buttons">
            <Button  className='search__buttonsHidden' type='submit' variant='outlined' onClick={search}>Google Search</Button>
            <Button  className='search__buttonsHidden' variant='outlined'>I'm Feeling Lucky</Button>
            
        </div>
        )}
        
    </form>
  )
}

export default Search;