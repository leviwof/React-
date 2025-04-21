import { useParams } from "react-router";
import resDataList from "../utils/mockData.js";
import Shimmer from "./Shimmer.js";
import { CDN_URL } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory.js";

const RestaurantMenu = () => {
    const { id } = useParams(); // Get restaurant ID from URL
    const restaurant = resDataList.find((res) => res.data.id === id);

    if (!restaurant) {
        return <Shimmer />; // Fallback if no restaurant is found
    }

    const {
        name,
        cloudinaryImageId,
        locality,
        areaName,
        cost,
        cuisines,
        avgRating,
        totalRatingsString,
        deliveryTime,
        isOpen,
        recommended
    } = restaurant.data;

    // Convert recommended object to array of values
    const recommendedItems = Object.values(recommended);

    return (
        <div className="shadow-bg" style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
            <h1 className="font-bold my-6 text-3xl">{name}</h1>
            <img
                src={CDN_URL + cloudinaryImageId}
                alt={name}
                style={{ width: "100%", maxHeight: "400px", objectFit: "cover", borderRadius: "8px" }}
            />
            <div style={{ marginTop: "20px" }}
                className="border border-solid border-gray-300 p-4 rounded-lg shadow-lg bg-white">
                <p className="static"><strong className="inline-block">Location:</strong> {locality}, {areaName}</p>
                <p><strong>Cost:</strong> ₹{cost / 100} for two</p>
                <p><strong>Cuisines:</strong> {cuisines.join(", ")}</p>
                <p><strong>Rating:</strong> {avgRating} ({totalRatingsString} reviews)</p>
                <p><strong>Delivery Time:</strong> {deliveryTime} mins</p>
                <p><strong>Status:</strong> {isOpen ? "Open" : "Closed"}</p>
            </div>
            <div>
                <h2 className="font-bold my-6 text-2xl">Recommended Dishes</h2>
                {/* Map through recommended items and render RestaurantCategory */}
                {recommendedItems.map((item, index) => (
                    <RestaurantCategory
                        key={index}
                        item={item}
                    />
                ))}
            </div>
            <button
                onClick={() => window.history.back()}
                className="bg-blue-500 text-white rounded-lg hover:bg-amber-500 mt-20 px-4 py-2"
                style={{ marginTop: "20px", padding: "10px 20px" }}
            >
                Back to List
            </button>
        </div>
    );
};

export default RestaurantMenu;