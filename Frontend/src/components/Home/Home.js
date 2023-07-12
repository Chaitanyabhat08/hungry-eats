import { useEffect, useState,useRef } from 'react';
import './Home.css';
import RestaurantCard from './RestaurantCard';
import Shimmer from "../../utils/Shimmer"; /* This is default export */
import { swiggy_api_URL, IMG_CDN_URL } from "../../constants/constansts";
import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Loader from '../layout/Loader';
import { filterData } from '../../utils/filterData';

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [slideshowElements, setSlideshowElements] = useState([]);
  // use useEffect for one time call getRestaurants using empty dependency array
  useEffect(() => {
    getRestaurants();
  }, []);

  // async function getRestaurant to fetch Swiggy API data
  async function getRestaurants() {
    // handle the error using try... catch
    try {
      const data = await fetch(swiggy_api_URL);
      const json = await data.json();
      console.log('Main Data', json);;
      setSlideshowElements(json?.data?.cards[0]?.data?.data?.cards)
      // updated state variable restaurants with Swiggy API data
      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
     
    } catch (error) {
      console.log(error);
    }
  }
  // use searchData function and set condition if data is empty show error message
  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const data = filterData(searchText, restaurants);
      setFilteredRestaurants(data);
      setErrorMessage("");
      if (data.length === 0) {
        setErrorMessage(`No matches restaurant found with this name "${searchText}"`);
      }
    } else {
      setErrorMessage("");
      setFilteredRestaurants(restaurants);
    }
  };
  const clearHandler = () => {
    setSearchText("");
    setErrorMessage('');
    getRestaurants();
  }
  // if allRestaurants is empty don't render restaurants cards
  if (!allRestaurants) return null;
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="carousel slide multi-item-carousel" id="theCarousel" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', overflowX: 'scroll', height: "350px",
        width: "100%",
            backgroundColor: "rgb(1, 5, 35)"
          }}>
            <div className="slideshow-container">
        {slideshowElements.length > 0 && slideshowElements.map((Element, index) =>
          <div className='item active' style={{ margin: '30px', padding: '30px' }} key={index}>
            <img className='carouselImg' style={{ width: '280px', height: '280px', borderRadius: '5px', transition: '0.5s all ease-in -out'}} src={IMG_CDN_URL + Element.data.creativeId} alt={`Slide ${index + 1}`} />
          </div>
              )}
            </div>
          </div>
        </div>
        <a class="left carousel-control" href="#theCarousel" data-slide="prev"><i class="glyphicon glyphicon-chevron-left"></i></a>
        <a class="right carousel-control" href="#theCarousel" data-slide="next"><i class="glyphicon glyphicon-chevron-right"></i></a>
        </div>
        <div className='homeHeader'>
          <h2 style={{ fontFamily: 'Montserrat', fontWeight: 'bold', fontStyle: 'italic', padding: '15px' }}>{allRestaurants.length} Restaurants around you</h2>
        </div>
      <hr/>
      <div style={{ margin: 0, marginTop: '25px',paddingLeft:'80px' }}>
        <form style={{ display: 'flex' }}>
          <input
            style={{ margin: 0, height: '2.4vmax', width: '18vmax', border: '0px solid gray', boxShadow:'1px 4px 3px 1px lightgray' }}
            placeholder="Enter Restaurant,Dishes and more"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button
            type="button"
            style={{
              backgroundColor: 'gray',
              color: 'whitesmoke',
              width: '60px',
              margin: 0,
              marginLeft: '5px',
              boxShadow: '1px 4px 3px 0px lightgray',
            }}
            onClick={() => {
              // user click on button searchData function is called
              searchData(searchText, allRestaurants);
            }}
          >
            <SearchIcon />
          </Button>
          <Button
            type="button"
            style={{
              backgroundColor: 'gray',
              color: 'whitesmoke',
              width: '90px',
              margin: 0,
              marginLeft: '5px',
              boxShadow: '1px 4px 3px 0px lightgray'
            }}
            onClick={clearHandler}
          >
            Clear
          </Button>
        </form>
      </div>
      {errorMessage && <div className="error-container">{errorMessage}</div>}
      {/* if restaurants data is not fetched then display Shimmer UI after the fetched data display restaurants cards */}
      {allRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-list">
          {/* We are mapping restaurants array and passing JSON array data to RestaurantCard component as props with unique key as restaurant.data.id */}
          {filteredRestaurants.map((restaurant) => {
            return (
              <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
            );
          })}
        </div>
      )}
    </>
);
}
export default Home;