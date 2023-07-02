export const filterData = (searchText, restaurants) => {
  const resFilterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return resFilterData;
}