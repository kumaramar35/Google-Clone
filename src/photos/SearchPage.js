import React from 'react'
import useGoogleSearch from '../components/useGoogleSearch';
import './SearchPage.css'
import { useStateValue } from './StateProvider'
import response from '../components/response';
import { Link } from 'react-router-dom';
import Search from './Search';
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RoomIcon from '@mui/icons-material/Room';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function SearchPage() {
  const [state, dispatch] = useStateValue();
  //  console.log(state.term + " yuiop");
  //  const term = state.term;
   console.log(state.term);
   const term = state.term;
  // Live google search API call
      const {data} = useGoogleSearch(term);
    // const data = response;
    
    console.log(data + " newly");
   return (
    <div className='searchPage'>
      <div className="searchPage__header">
        <Link to="/">
          <img className='searchPage__logo' src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' alt='nope'></img>
        </Link>
        {/* <h1>{state.term}</h1> */}

        <div className="searchPage__headerBody">
          <Search hideButtons></Search>
        </div>
        <div className="searchPage__options">

          <div className="searchPage__optionsLeft">

            <div className="searchPage__option">
              <SearchIcon></SearchIcon>
              <Link to="/all">All</Link>
            </div>

            <div className="searchPage__option">
              <DescriptionIcon></DescriptionIcon>
              <Link to="/news">news</Link>
            </div>

            <div className="searchPage__option">
              <ImageIcon></ImageIcon>
              <Link to="/images">images</Link>
            </div>

            <div className="searchPage__option">
              <LocalOfferIcon></LocalOfferIcon>
              <Link to="/shopping">shopping</Link>
            </div>

            <div className="searchPage__option">
              <RoomIcon></RoomIcon>
              <Link to="/maps">maps</Link>
            </div>

            <div className="searchPage__option">
              <MoreVertIcon></MoreVertIcon>
              <Link to="/more">more</Link>
            </div>

          </div>

          <div className="searchPage__optionsRight">

            <div className="searchPage__option">
              <Link to="/more">Settings</Link>
            </div>

            <div className="searchPage__option">
              <Link to="/more">Tools</Link>
            </div>

          </div>

        </div>
      </div>

      {term && (
        <div className="searchPage__results">
          <p className="serachPage__resultCount">{data?.searchInformation.formattedTotalResults} result ({data?.searchInformation.formattedSearchTime} seconds) for {term}</p>
          {data?.items.map(item => (
            <div className="searchPage__result">
            <a className="searchPage__resultLink" href={item.Link}>
              {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                <img className="searchPage__resultImage" src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src} alt="" />
              )}
            </a>
              <a href={item.link}>{item.displayLink} </a>

              <a className="searchPage__reultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}


    </div>
  )
}

export default SearchPage