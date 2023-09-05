import React from "react";
import { restaurantList } from "../constant";
import RestaurantCard from "./RestaurantCard";

import { useState } from "react";

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);

  const [searchText, setSearchText] = useState("");

  function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
      restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;
  }

  return (
    <>
    

      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search restaurant"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>

        <button
          className="search-btn"
          onClick={() => {
            // filter the data
            const data = filterData(searchText, restaurants);
            // update the state of restaurants list
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
