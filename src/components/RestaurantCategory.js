import React, { useState } from "react";
import { useDispatch } from "react-redux"
import { addItem } from "../utils/cartSlice";

// Dummy descriptions for each item (replace with real data later)
const itemDescriptions = {
    "Margherita Pizza": "A classic pizza with fresh tomatoes, mozzarella, and basil.",
    "Peppy Paneer Pizza": "Spicy paneer topping with bell peppers and onions.",
    "Chicken Supreme Pizza": "Loaded with chicken, veggies, and extra cheese.",
    "Garlic Bread": "Crispy bread with garlic butter spread.",
    "Cheesy Dip": "Creamy cheese dip perfect for sides.",
    "Tandoori Paneer Pizza": "Tandoori-spiced paneer on a flavorful base.",
    "Mango Kulfi": "Rich mango-flavored traditional Indian ice cream.",
    "Pista Kulfi": "Creamy pistachio kulfi with a nutty taste.",
    "Malai Kulfi": "Smooth and rich cream-based kulfi.",
    "Sitaphal Kulfi": "Unique custard apple flavor in kulfi form.",
    "Rose Kulfi": "Aromatic rose-flavored dessert.",
    "Kesar Kulfi": "Saffron-infused kulfi for a royal touch.",
    // Add more as needed for other restaurants...
};

const RestaurantCategory = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
    const description = itemDescriptions[item] || "Delicious dish with a unique twist!";

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    const dispatch = useDispatch(item);
    const handleAddItem = () => {
        dispatch(addItem(item))
    }

    return (
        <div className="mb-4 border border-gray-300 rounded-lg shadow-md">
            <div
                className="flex justify-between items-center p-4 cursor-pointer bg-gray-100 hover:bg-gray-200"
                onClick={toggleAccordion}
            >
                <h3 className="font-semibold text-lg">{item}</h3>
                <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
                    onClick={() => handleAddItem(item)}>
                    Add+
                </button>
                <span>{isOpen ? "▲" : "▼"}</span>
            </div>
            {isOpen && (
                <div className="p-4 bg-white">
                    <p className="text-gray-800">{description}</p>
                </div>
            )}
        </div>
    );
};

export default RestaurantCategory;