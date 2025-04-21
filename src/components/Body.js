import { useEffect, useState } from "react";
import { Link } from "react-router"; // Correct import
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard.js";
import resDataList from "../utils/mockData.js";
import Shimmer from "./Shimmer.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRes, setFilteredRes] = useState([]);
    const [searchText, setSearchText] = useState(""); // Default to empty string
    const [isLoading, setIsLoading] = useState(true);

    const RestaurantCardWithPromotedLabel = withPromotedLabel(RestaurantCard);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const resData = resDataList; // Mock data (replace with API call in real app)
            setListOfRestaurants(resData);
            setFilteredRes(resData);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSearch = () => {
        const filteredRestaurants = listOfRestaurants.filter((res) =>
            res.data.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredRes(filteredRestaurants);
    };

    const handleTopRatedFilter = () => {
        const filteredRestaurants = listOfRestaurants.filter(
            (res) => res.data.avgRating >= 4.7
        );
        setFilteredRes(filteredRestaurants); // Update filteredRes instead
    };

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) {
        <h1>Look Like internet is preseent..</h1>
    }
    return isLoading ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4 flex items-center">
                    <input
                        type="text"
                        className="border border-solid border-black w-70 h-10"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        placeholder="Search restaurants..."
                    />
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={handleSearch}>
                        Search
                    </button>
                    <button className="px-4 py-2 bg-gray-200 rounded-lg" onClick={handleTopRatedFilter}>
                        Top Rated Restaurants
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap">
                {filteredRes.map((restaurant) => (
                    <Link
                        key={restaurant.data.id}
                        to={`/restaurant/${restaurant.data.id}`} // Dynamic route
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        {/* Use the HOC to add the promoted label */}
                        {restaurant.data.promoted ? (<RestaurantCardWithPromotedLabel resData={restaurant} />) : (<RestaurantCard resData={restaurant} />
                        )}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;