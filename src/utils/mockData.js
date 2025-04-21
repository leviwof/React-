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
            cost: 30000,
            cuisines: ["Pizzas"],
            promoted: true,
            avgRating: 4.3,
            parentId: "721",
            avgRatingString: "4.3",
            totalRatingsString: "7.1K+",
            deliveryTime: 30,
            isOpen: true,
            recommended: {
                item1: "Margherita Pizza",
                item2: "Peppy Paneer Pizza",
                item3: "Chicken Supreme Pizza",
                item4: "Garlic Bread",
                item5: "Cheesy Dip",
                item6: "Tandoori Paneer Pizza" // Extra item for variety
            }
        },
    },
    {
        data: {
            id: "519377",
            name: "Grameen Kulfi",
            cloudinaryImageId: "yak0vqlrjfl6cp9vs0pe",
            locality: "Abade Faria Road",
            areaName: "Margaon",
            cost: 12000,
            cuisines: ["Ice Cream", "Desserts"],
            avgRating: 4.7,
            veg: true,
            promoted: false,
            parentId: "12175",
            avgRatingString: "4.7",
            totalRatingsString: "455",
            deliveryTime: 22,
            isOpen: true,
            recommended: {
                item1: "Mango Kulfi",
                item2: "Pista Kulfi",
                item3: "Malai Kulfi",
                item4: "Sitaphal Kulfi",
                item5: "Rose Kulfi",
                item6: "Kesar Kulfi" // Extra item for variety
            }
        },
    },
    {
        data: {
            id: "99093",
            name: "Hayatt Restaurant And Caterers",
            cloudinaryImageId: "rdqpzyqp0t2wfspq47iw",
            locality: "Margao",
            areaName: "Aquem",
            cost: 80000,
            cuisines: ["North Indian", "Chinese"],
            avgRating: 4.3,
            promoted: true,
            parentId: "94667",
            avgRatingString: "4.3",
            totalRatingsString: "12K+",
            deliveryTime: 35,
            isOpen: true,
            recommended: {
                item1: "Butter Chicken",
                item2: "Paneer Tikka Masala",
                item3: "Chilli Chicken",
                item4: "Hakka Noodles",
                item5: "Dal Makhani",
                item6: "Manchurian" // Extra item for variety
            }
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
            cost: 45000,
            cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
            avgRating: 4.3,
            promoted: false,
            parentId: "547",
            avgRatingString: "4.3",
            totalRatingsString: "8.7K+",
            deliveryTime: 24,
            isOpen: true,
            recommended: {
                item1: "Zinger Burger",
                item2: "Chicken Popcorn",
                item3: "Hot & Crispy Chicken",
                item4: "Chicken Roll",
                item5: "Peri-Peri Fries",
                item6: "Spicy Wrap" // Extra item for variety
            }
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
            cost: 35000,
            cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
            avgRating: 4.1,
            promoted: true,
            parentId: "2",
            avgRatingString: "4.1",
            totalRatingsString: "964",
            deliveryTime: 25,
            isOpen: true,
            recommended: {
                item1: "Veg Delight Sandwich",
                item2: "Chicken Teriyaki",
                item3: "Tuna Salad",
                item4: "Veggie Wrap",
                item5: "Italian BMT",
                item6: "Fresh Green Salad" // Extra item for variety
            }
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
            cost: 40000,
            cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
            avgRating: 4.4,
            promoted: false,
            parentId: "2456",
            avgRatingString: "4.4",
            totalRatingsString: "2.4K+",
            deliveryTime: 25,
            isOpen: true,
            recommended: {
                item1: "Pepperoni Pizza",
                item2: "Margherita Pizza",
                item3: "Chicken Dominator",
                item4: "Garlic Breadsticks",
                item5: "Chocolate Lava Cake",
                item6: "Pasta Italiano" // Extra item for variety
            }
        },
    },
    {
        data: {
            id: "102200",
            name: "Red Carpet",
            cloudinaryImageId: "v0qi2r8tpznipzbvd2fa",
            locality: "Margao",
            areaName: "Margao",
            cost: 30000,
            cuisines: ["North Indian", "Indian"],
            avgRating: 4.3,
            promoted: true,
            parentId: "3026",
            avgRatingString: "4.3",
            totalRatingsString: "11K+",
            deliveryTime: 33,
            isOpen: true,
            recommended: {
                item1: "Butter Chicken",
                item2: "Paneer Butter Masala",
                item3: "Naan Basket",
                item4: "Dal Tadka",
                item5: "Rogan Josh",
                item6: "Tandoori Roti" // Extra item for variety
            }
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
            cost: 25000,
            cuisines: ["Desserts", "Ice Cream"],
            avgRating: 4.6,
            veg: true,
            promoted: false,
            parentId: "5588",
            avgRatingString: "4.6",
            totalRatingsString: "182",
            deliveryTime: 27,
            isOpen: true,
            recommended: {
                item1: "Chocolate Chip Ice Cream",
                item2: "Vanilla Scoop",
                item3: "Strawberry Delight",
                item4: "Butterscotch Blast",
                item5: "Mint Chocolate Chip",
                item6: "Caramel Swirl" // Extra item for variety
            }
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
            cost: 20000,
            cuisines: ["Burgers", "American", "Fast Food", "Snacks"],
            avgRating: 4.4,
            parentId: "972",
            promoted: true,
            avgRatingString: "4.4",
            totalRatingsString: "908",
            deliveryTime: 31,
            isOpen: true,
            recommended: {
                item1: "Classic Baconator",
                item2: "Spicy Chicken Burger",
                item3: "Wendy’s Fries",
                item4: "Chicken Nuggets",
                item5: "Frosty Dessert",
                item6: "Cheeseburger Deluxe" // Extra item for variety
            }
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
            cost: 12000,
            cuisines: ["Ice Cream", "Desserts"],
            avgRating: 4.7,
            veg: true,
            promoted: false,
            parentId: "6249",
            avgRatingString: "4.7",
            totalRatingsString: "1.4K+",
            deliveryTime: 22,
            isOpen: true,
            recommended: {
                item1: "Alphonso Mango Ice Cream",
                item2: "Chocolate Fudge",
                item3: "Vanilla Bean",
                item4: "Butterscotch Crunch",
                item5: "Strawberry Swirl",
                item6: "Pistachio Delight" // Extra item for variety
            }
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
            cost: 15000,
            cuisines: ["Ice Cream", "Desserts"],
            avgRating: 4.8,
            veg: true,
            promoted: false,
            parentId: "2093",
            avgRatingString: "4.8",
            totalRatingsString: "2.9K+",
            deliveryTime: 22,
            isOpen: true,
            recommended: {
                item1: "Tender Coconut Ice Cream",
                item2: "SITAFAL Ice Cream",
                item3: "Jackfruit Ice Cream",
                item4: "Alphonso Mango",
                item5: "Chocolate Ecstasy",
                item6: "Pistachio Almond" // Extra item for variety
            }
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
            cost: 20000,
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
            promoted: true,
            avgRatingString: "4.4",
            totalRatingsString: "1.3K+",
            deliveryTime: 29,
            isOpen: true,
            recommended: {
                item1: "Chicken Tikka Roll",
                item2: "Paneer Tikka Wrap",
                item3: "Shawarma Chicken",
                item4: "Veg Kebab Platter",
                item5: "Chocolate Lava Cake",
                item6: "Iced Lemon Tea" // Extra item for variety
            }
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
            cost: 25000,
            cuisines: ["Desserts", "Ice Cream"],
            avgRating: 4.6,
            veg: true,
            promoted: false,
            parentId: "5588",
            avgRatingString: "4.6",
            totalRatingsString: "182",
            deliveryTime: 27,
            isOpen: true,
            recommended: {
                item1: "Chocolate Chip Ice Cream",
                item2: "Vanilla Scoop",
                item3: "Strawberry Delight",
                item4: "Butterscotch Blast",
                item5: "Mint Chocolate Chip",
                item6: "Caramel Swirl" // Extra item for variety
            }
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
            cost: 20000,
            cuisines: ["Burgers", "American", "Fast Food", "Snacks"],
            avgRating: 4.4,
            promoted: true,
            parentId: "972",
            avgRatingString: "4.4",
            totalRatingsString: "908",
            deliveryTime: 31,
            isOpen: true,
            recommended: {
                item1: "Classic Baconator",
                item2: "Spicy Chicken Burger",
                item3: "Wendy’s Fries",
                item4: "Chicken Nuggets",
                item5: "Frosty Dessert",
                item6: "Cheeseburger Deluxe" // Extra item for variety
            }
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
            promoted: false,
            cuisines: ["Pizzas"],
            avgRating: 4.3,
            parentId: "721",
            avgRatingString: "4.3",
            deliveryTime: 30,
            isOpen: true,
            recommended: {
                item1: "Margherita Pizza",
                item2: "Peppy Paneer Pizza",
                item3: "Chicken Supreme Pizza",
                item4: "Garlic Bread",
                item5: "Cheesy Dip",
                item6: "Tandoori Paneer Pizza" // Extra item for variety
            }
        }
    },
];

export default resDataList;