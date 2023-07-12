import { useParams, Link } from "react-router-dom";
import React,{useState} from "react";
import {
  swiggy_menu_api_URL,
  IMG_CDN_URL,
  ITEM_IMG_CDN_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
  RESTAURANT_ADDRESS_KEY,
  RESTAURANT_LICENCE_KEY,
} from "../../constants/constansts";
import './Restaurant.css'
import { MenuShimmer } from "../../utils/Shimmer";
import useResMenuData from "../Hooks/useResMenuData";
import useOnline from "../Hooks/useOnline";
import UserOffline from "../User/userOffline";
import StarsTwoToneIcon from '@mui/icons-material/StarsTwoTone';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Cancel } from "@mui/icons-material";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import discountImg from '../../../public/images/discount.png';
const Restaurant = () => {
  const { resId } = useParams();
  const [restaurant, menuItems, offers,resAddressInfo,resLicenceInfo] = useResMenuData(
    swiggy_menu_api_URL,
    resId,
    RESTAURANT_TYPE_KEY,
    MENU_ITEM_TYPE_KEY,
    RESTAURANT_ADDRESS_KEY,
    RESTAURANT_LICENCE_KEY
  );
  const [searchInputVisible, setSearchInputVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  const filteredMenuItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );
  const groupedMenuItems = filteredMenuItems.reduce((result, item) => {
    if (!result[item.category]) {
      result[item.category] = [];
    }
    result[item.category].push(item);
    return result;
  }, {});
  const [expandedHeaders, setExpandedHeaders] = useState(
    Object.fromEntries(Object.entries(groupedMenuItems).map(([header]) => [header, true]))
  );
  const isOnline = useOnline();
  if (!isOnline) {
    return <UserOffline />;
  }
  return !restaurant ? (
    <MenuShimmer />
  ) : (
    <div className="restaurant-main" style={{border: '1px solid gray'}}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{marginBottom:'20px', display:'flex',justifyContent:'space-between'}}>
            <p className="restaurant-tags">{`Home/${restaurant.city}/${restaurant.areaName}`}</p>
            <div style={{ alignContent: 'center', alignItems: 'center', display: 'flex' }}>
              <div className='searchBox'>
              {searchInputVisible && (
                <input value={searchText} onChange={(e) => setSearchText(e.target.value)} style={{ border: '0px light gray',borderRadius:'15px' }} placeholder="search menu" />
                )}
              </div>
              {!searchInputVisible && (
                <span style={{ marginTop: '10px' }}><SearchOutlinedIcon onClick={() => setSearchInputVisible(true)} /></span>
              )}
              {searchInputVisible && (
                <span style={{ marginTop: '10px' }}><Cancel onClick={() => {
                  setSearchInputVisible(false);
                  setSearchText('');
                }} /></span>
              )}
              <div style={{marginTop:'10px',marginLeft:'10px'}}><FavoriteBorderOutlinedIcon /></div>
            </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex' }}>
            <img
              className="restaurant-img"
              src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
              alt={restaurant?.name}
            />
            <div style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
                <h3>{restaurant.name}<span>
                  {restaurant?.veg!==undefined && restaurant?.veg ? (
                    <i className="fa-solid fa-leaf" style={{ color: '#1fd62b' }}></i>
                  ) : (
                      <i class="fa-solid fa-drumstick-bite" style={{ "color": "#b42313"}}></i>
                  )}
                </span></h3>
               
                <p className="restaurant-tags"><i class="fa-solid fa-location-dot" style={{margin:'5px'}}></i>{restaurant.locality + ", "+ restaurant.areaName}</p>
                <p className="restaurant-tags"><i class="fa-solid fa-utensils" style={{ margin: '5px' }}></i>{restaurant?.cuisines?.join(", ")}</p>
                <p className="restaurant-tags"><i class="fa-solid fa-route" style={{ margin: '5px' }}></i>{Number(restaurant.sla.lastMileTravel / 1000).toFixed(2)} km</p>
            </div>
          </div>
            <div className="ratingBox" style={{ border: '1px solid lightgray', borderRadius: '5px', width: '100px', height: '90px', right: 0, alignItems: 'center', textAlign: 'center' }}>
              <div>
              <p style={{fontWeight:700}}>{restaurant?.avgRating >= 4 ?
                <StarsTwoToneIcon style={{ color: 'green' }} /> :
                  restaurant?.avgRating > 3 ?
                    <StarsTwoToneIcon style={{ color: 'orange' }} />
                    :
                    <StarsTwoToneIcon style={{ color: 'red' }} />
                }{restaurant?.avgRating}</p>
              </div>
              <hr />
              <div>
                <p className="restaurant-tags">{restaurant.totalRatingsString}</p>
              </div>
          </div>
          </div>     
      </div>
        <hr style={{ borderTop: "dotted 1px gray" }} />

        <p><CurrencyRupeeIcon style={{ border: '2px solid gray', borderRadius: '50%' }} /><span style={{ margin: '5px', marginBottom: '30px' }}>{restaurant.costForTwoMessage} </span></p>

          <div className='discountBar' style={{ padding: '10px', width: '100%' }}>
            <p style={{ color: 'green' }}>Best offer : {restaurant.aggregatedDiscountInfo?.header}</p>
            <div style={{ display: 'flex', width: '100%', overflow: 'scroll' }}>
              {offers?.map((discount) => (
                <div className="discountCard" style={{ border: '0px light green', boxShadow: 'green 0px 2px 2px 0px', width: '240px', height: '80px', alignItems: 'center', justifyContent: 'fill', margin: '10px', padding: '10px', borderRadius: '20px', flexShrink: 0 }}>
                  <parseFloat key={discount.info.offerIds[0]} style={{ fontWeight: 400, color: 'darkgreen' }}><img style={{ height: '25px', width: '25px' }} src={discountImg} />{discount.info.header}<br /> {discount.info.couponCode}</parseFloat>
                </div>
              ))}
            </div>
          </div>
        <hr style={{ borderTop: "dotted 1px gray" }} />
        <div className='menuItems'>
          {Object.entries(groupedMenuItems).map(([header, items]) => (
            <div key={header}>
              <h5 onClick={() => setExpandedHeaders(prevState => ({
                ...prevState,
                [header]: !prevState[header]
              }))}>
                <div style={{ display: 'flex', height: '70px', width: '100%', backgroundColor: 'white', border: '0px solid gray', borderRadius: '8px', padding: '10px', alignItems: 'center', boxShadow:'rgb(172, 164, 164) 0px 2px 2px 0px', transition:'ease-in 0.3s'}}>
                  <div style={{ flex: 1,fontFamily:'-moz-initial', fontWeight:'bold' }}>{header}</div>
                  <span style={{ right:0 }}>{expandedHeaders[header] ? '-' : '+'}</span>
                </div>
              </h5>
              {expandedHeaders[header] && (
                <div>
                  {items.map((item) => (
                    <div className="menu-item" key={item?.id}>
                      <div className="menu-item-details">
                        <h5 className="item-title">{item?.name}</h5>
                        <p className="item-cost">
                          {item?.price > 0
                            ? new Intl.NumberFormat("en-IN", {
                              style: "currency",
                              currency: "INR",
                            }).format(item?.price / 100)
                            :
                            " "
                          }
                        </p>
                        <p className="item-desc">{item?.description}</p>
                      </div>
                      <div className="menu-img-wrapper">
                        {item?.imageId && (
                          <img
                            className="menu-item-img"
                            src={ITEM_IMG_CDN_URL + item?.imageId}
                            alt={item?.name}
                          />
                        )}
                        <button className="add-btn"> ADD +</button>
                      </div>
                    </div>
                  )
                  )}
                </div>
                )
              }
              </div>
            ))
          }
        </div>
        <div className="resDetailsDiv" style={{ height: '300px', width: '100%', backgroundColor: "whitesmoke", marginTop: '200px', padding: '30px', justifyContent: 'contain' }}>
          <div style={{display: 'flex'}}>
            <img style={{ width: '70px', height: '40px',marginRight:'20px' }} src={IMG_CDN_URL + resLicenceInfo[0]?.imageId} /> 
            <p className="restaurant-tags">{resLicenceInfo[0].text}</p>
          </div>
          <hr />
          <div>
            <p className="restaurant-tags">{resAddressInfo[0]?.name}</p>
            <p className="restaurant-tags">{resAddressInfo[0]?.completeAddress}</p>
          </div>
        </div>
    </div>
  );
};

export default Restaurant;

