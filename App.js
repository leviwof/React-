import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

// Header component -> logo, navbar
// Main/Body component -> Search, Cards,RestaurntsContianer
// Footer component -> Social media links, contact us

// Restaurant data
const resDataList = [
    {
        data: {
            id: "137337",
            name: "Pizza Hut",
            cloudinaryImageId:
                "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/16a70b18-197d-485a-bca9-d1b91c469d8d_137337.jpg",
            image: "https:www.swiggy.com/city/central-goa/red-carpet-margao-rest102200",
            locality: "Margao",
            areaName: "Fatorda",
            costForTwo: "₹300 for two",
            cuisines: ["Pizzas"],
            avgRating: 4.3,
            parentId: "721",
            avgRatingString: "4.3",
            totalRatingsString: "7.1K+",
            deliveryTime: 30,
            isOpen: true,
        },
    },
    {
        data: {
            id: "519377",
            name: "Grameen Kulfi",
            cloudinaryImageId: "yak0vqlrjfl6cp9vs0pe",
            locality: "Abade Faria Road",
            areaName: "Margaon",
            costForTwo: "₹120 for two",
            cuisines: ["Ice Cream", "Desserts"],
            avgRating: 4.7,
            veg: true,
            parentId: "12175",
            avgRatingString: "4.7",
            totalRatingsString: "455",
            deliveryTime: 22,
            isOpen: true,

        },
    },
    {
        data: {
            id: "99093",
            name: "Hayatt Restaurant And Caterers",
            cloudinaryImageId: "rdqpzyqp0t2wfspq47iw",
            locality: "Margao",
            areaName: "Aquem",
            costForTwo: "₹800 for two",
            cuisines: ["North Indian", "Chinese"],
            avgRating: 4.3,
            parentId: "94667",
            avgRatingString: "4.3",
            totalRatingsString: "12K+",
            deliveryTime: 35,
            isOpen: true,
        },
    },
    {
        data: {
            id: "83824",
            name: "KFC",
            cloudinaryImageId:
                "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/0bd66b0d-d034-498a-ae54-3fc8ebd8c39b_83824.JPG",
            locality: "Collector Office",
            areaName: "Fatorda",
            costForTwo: "₹450 for two",
            cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
            avgRating: 4.3,
            parentId: "547",
            avgRatingString: "4.3",
            totalRatingsString: "8.7K+",
            deliveryTime: 24,
            isOpen: true,
        },
    },
    {
        data: {
            id: "725662",
            name: "Subway",
            cloudinaryImageId:
                "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/de74d8e3-0509-474f-9b86-150b455b1ff2_725662.JPG",
            locality: "OPPOSITE INOX",
            areaName: "MARGAO",
            costForTwo: "₹350 for two",
            cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
            avgRating: 4.1,
            parentId: "2",
            avgRatingString: "4.1",
            totalRatingsString: "964",
            deliveryTime: 25,
            isOpen: true,
        },
    },
    {
        data: {
            id: "74529",
            name: "Domino's Pizza",
            cloudinaryImageId:
                "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/13/ebcff45d-4121-4b11-91d9-3ba388963a36_74529.JPG",
            locality: "Colva-Benaulim Main Road",
            areaName: "Benaulim",
            costForTwo: "₹400 for two",
            cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
            avgRating: 4.4,
            parentId: "2456",
            avgRatingString: "4.4",
            totalRatingsString: "2.4K+",
            deliveryTime: 25,
            isOpen: true,
        },
    },
    {
        data: {
            id: "102200",
            name: "Red Carpet",
            cloudinaryImageId: "v0qi2r8tpznipzbvd2fa",
            locality: "Margao",
            areaName: "Margao",
            costForTwo: "₹300 for two",
            cuisines: ["North Indian", "Indian"],
            avgRating: 4.3,
            parentId: "3026",
            avgRatingString: "4.3",
            totalRatingsString: "11K+",
            deliveryTime: 33,
            isOpen: true,
        },
    },
    {
        data: {
            id: "787006",
            name: "Baskin Robbins - Ice Cream Desserts",
            cloudinaryImageId:
                "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/12/8e1a5f75-c9ce-49e9-8830-d31672b90ba8_787006.jpg",
            locality: "Atlas Business Center",
            areaName: "Aquem",
            costForTwo: "₹250 for two",
            cuisines: ["Desserts", "Ice Cream"],
            avgRating: 4.6,
            veg: true,
            parentId: "5588",
            avgRatingString: "4.6",
            totalRatingsString: "182",
            deliveryTime: 27,
            isOpen: true,
        },
    },
    {
        data: {
            id: "795332",
            name: "Wendy's Burgers",
            cloudinaryImageId:
                "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/11/5067da1b-bcc4-4c62-bc79-3f7f3105fe96_795332.JPG",
            locality: "Margao",
            areaName: "Supreme City center",
            costForTwo: "₹200 for two",
            cuisines: ["Burgers", "American", "Fast Food", "Snacks"],
            avgRating: 4.4,
            parentId: "972",
            avgRatingString: "4.4",
            totalRatingsString: "908",
            deliveryTime: 31,
            isOpen: true,
        },
    },
    {
        data: {
            id: "519376",
            name: "NIC Ice Creams",
            cloudinaryImageId:
                "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/10/7e6a3033-54d0-4419-85da-5a107cf2615d_519376.JPG",
            locality: "Gomant vidya Niketan",
            areaName: "Damodar Building",
            costForTwo: "₹120 for two",
            cuisines: ["Ice Cream", "Desserts"],
            avgRating: 4.7,
            veg: true,
            parentId: "6249",
            avgRatingString: "4.7",
            totalRatingsString: "1.4K+",
            deliveryTime: 22,
            isOpen: true,

        },
    },
    {
        data: {
            id: "122512",
            name: "Natural Ice Cream",
            cloudinaryImageId:
                "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/8/096480e5-3682-4dd7-b97b-3dc1f96457cb_122512.JPG",
            locality: "GTDC",
            areaName: "Margao",
            costForTwo: "₹150 for two",
            cuisines: ["Ice Cream", "Desserts"],
            avgRating: 4.8,
            veg: true,
            parentId: "2093",
            avgRatingString: "4.8",
            totalRatingsString: "2.9K+",
            deliveryTime: 22,
            isOpen: true,
        },
    },
    {
        data: {
            id: "494539",
            name: "Faasos - Wraps, Rolls & Shawarma",
            cloudinaryImageId:
                "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/28/dac4d365-894f-4838-8a08-60e0e714f86b_494539.JPG",
            locality: "Salcete",
            areaName: "Margao",
            costForTwo: "₹200 for two",
            cuisines: [
                "Kebabs",
                "Fast Food",
                "Snacks",
                "American",
                "Healthy Food",
                "Desserts",
                "Beverages",
            ],
            avgRating: 4.4,
            parentId: "21809",
            avgRatingString: "4.4",
            totalRatingsString: "1.3K+",
            deliveryTime: 29,
            isOpen: true,

        },
    },
    {
        data: {
            id: "787006",
            name: "Baskin Robbins - Ice Cream Desserts",
            cloudinaryImageId:
                "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/12/8e1a5f75-c9ce-49e9-8830-d31672b90ba8_787006.jpg",
            locality: "Atlas Business Center",
            areaName: "Aquem",
            costForTwo: "₹250 for two",
            cuisines: ["Desserts", "Ice Cream"],
            avgRating: 4.6,
            veg: true,
            parentId: "5588",
            avgRatingString: "4.6",
            totalRatingsString: "182",
            deliveryTime: 27,
            isOpen: true,
        },
    },
    {
        data: {
            id: "795332",
            name: "Wendy's Burgers",
            cloudinaryImageId:
                "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/11/5067da1b-bcc4-4c62-bc79-3f7f3105fe96_795332.JPG",
            locality: "Margao",
            areaName: "Supreme City center",
            costForTwo: "₹200 for two",
            cuisines: ["Burgers", "American", "Fast Food", "Snacks"],
            avgRating: 4.4,
            parentId: "972",
            avgRatingString: "4.4",
            totalRatingsString: "908",
            deliveryTime: 31,
            isOpen: true,
        },
    },
    {
        data: {
            id: "137337",
            name: "Pizza Hut",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/16a70b18-197d-485a-bca9-d1b91c469d8d_137337.jpg",
            locality: "Margao",
            areaName: "Fatorda",
            cost: 30000,
            cuisines: ["Pizzas"],
            avgRating: 4.3,
            parentId: "721",
            avgRatingString: "4.3",
            deliveryTime: 30,
            isOpen: true,
        }
    },

]

// Header component
const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src="https://media-hosting.imagekit.io//bb60e162fccb49a2/theFood.jpg?Expires=1836713755&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=tuzTTIlm8FlCk4lpLzmGOJ3KmfTnwy-lAM6NwDSle7RXm~lU4Gn8mli8B4xlQMa8nDxSwZNoCH7vY95~7YQsuB1-DFylzc~Erf-7wgwg44TTsrHHBwh88oWSA8bjYQVq-nVz-G8kydfhQywOrVF64a5bpy6Fi6PT7PKs64qTZ8Ly18x0wHflvMmHmv52eylkD9yOvlJZe0Zjvijs8IAW8Pg5VYsPoqiqzVY9jC--yIU7Wm1q32j~eyDLvx0RwlkYc4rIWcYfSEyQcILYu9NDSj5HV~-y~paFhRK1zHXV3Kwc3N4lybu2MUlIYjAq~~RW73jwdkRv0FIJQjahcVQ2Ww__" />
            </div>
            <div className="navbar">
                <ul className="nav-list">
                    <li>Home</li>
                    <li>AboutUs</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

// restaurant card component
const RestaurantCard = (props) => {
    const { resData } = props;
    console.log(resData);

    if (!resData || !resData.data) {
        return <div>Error:Restaurant are not available my Friends</div>
    }
    const { name, cost, deliveryTime, cuisines, avgRating, cloudinaryImageId } = resData.data;
    return (
        <div className="res-card">
            <img className="res-logo" alt="food-Image" src={"https://media-assets.swiggy.com/swiggy/" + cloudinaryImageId} />
            <div className="resDatas">
                <h2>{name}</h2>
                <p>{cuisines.join(", ")}</p>
                <h4>Rating: {avgRating}</h4>
                <h4>Cost: ₹{cost / 100}</h4>
                <h4>Delivery: {deliveryTime} mins</h4>
            </div>
        </div>
    )
}

// Body component
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search here....</div>
            <div className="restaurant-card">
                {
                    // dont use index as key
                    // use unique id for key
                    resDataList.map((restaurant) => { return <RestaurantCard key={restaurant.data.id} resData={restaurant} /> })
                }
            </div>
        </div>
    )
}

// App layout
const AppLayout = () => {
    return (
        <div className="App">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);