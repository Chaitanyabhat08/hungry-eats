import { useEffect, useState } from "react";

const useResMenuData = (
  swiggy_menu_api_URL,
  resId,
  RESTAURANT_TYPE_KEY,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_ADDRESS_KEY,
  RESTAURANT_LICENCE_KEY
) => {
  const [restaurant, setRestaurant] = useState(null); // use useState to store restaurant data
  const [menuItems, setMenuItems] = useState([]); // use useState to store restaurant Menu Item data
  const [offers, setOffers] = useState([]); // use useState to store offers for restaurant
  const [resLicenceInfo, setResLicenceInfo] = useState(); // use useState to store license information
  const [resAddressInfo, setResAddressInfo] = useState(); // use useState to store restaurant address information

  useEffect(() => {
    getRestaurantInfo(); // call getRestaurantInfo function so it fetch api data and set data in restaurant state variable
  }, []);

  async function getRestaurantInfo() {
    try {
      const response = await fetch(swiggy_menu_api_URL + resId);
      if (!response.ok) {
        const err = response.status;
        throw new Error(err);
      } else {
        const json = await response.json();
        console.log("Menu response", json?.data?.cards);

        // Set restaurant data
        const restaurantData =
          json?.data?.cards
            ?.map((x) => x.card)
            ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
            ?.info || null;
        setRestaurant(restaurantData);

        // Set menu item data
        const menuItemsData =
          json?.data?.cards
            .find((x) => x.groupedCard)
            ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
              (x) => x.card?.card
            )
            ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
            ?.map((x) => x.itemCards)
            .flat()
            .map((x) => x.card?.info) || [];
        
        const currentOffers = json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.offers;
        setOffers(currentOffers);

        const addressData =
          json?.data?.cards
            .find((x) => x.groupedCard)
            ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
              (x) => x.card?.card
            )
            ?.filter((x) => x["@type"] == RESTAURANT_ADDRESS_KEY);
        setResAddressInfo(addressData);

        const licenceData =
          json?.data?.cards
            .find((x) => x.groupedCard)
            ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
              (x) => x.card?.card
            )
            ?.filter((x) => x["@type"] == RESTAURANT_LICENCE_KEY);
        setResLicenceInfo(licenceData);
        
        const uniqueMenuItems = [];
        menuItemsData.forEach((item) => {
          if (!uniqueMenuItems.find((x) => x.id === item.id)) {
            uniqueMenuItems.push(item);
          }
        });
        setMenuItems(uniqueMenuItems);
      }
    } catch (err) {
      setMenuItems([]);
      setRestaurant(null);
      setOffers([]);
      console.error(err);
    }
  }
  return [restaurant, menuItems, offers, resAddressInfo,resLicenceInfo];
};

export default useResMenuData;