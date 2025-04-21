import { CDN_URL } from "../utils/constants";

// restaurant card component
const RestaurantCard = (props) => {
    const { resData } = props;
    console.log(resData);

    if (!resData || !resData.data) {
        return <div>Error:Restaurant are not available my Friends</div>
    }
    const { name, cost, deliveryTime, cuisines, avgRating, cloudinaryImageId } = resData.data;
    return (
        <div className="m-4 p-4 w-[270px] rounded-lg bg-gray-100 hover:bg-gray-200" >
            <img className="rounded-lg border-box size-60" alt="food-Image" src={CDN_URL + cloudinaryImageId} />
            <div className="resDatas">
                <h2 className="font-bold py-4 text-lg">{name}</h2>
                <p>{cuisines.join(", ")}</p>
                <h4>Rating: {avgRating}</h4>
                <h4>Cost:{cost / 100} for Two</h4>
                <h4>Delivery: {deliveryTime} mins</h4>
            </div>
        </div>
    )
}

// HOC for adding promoted label
export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div className="">
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <RestaurantCard{...props} />
            </div>
        )
    }
}

export default RestaurantCard;
