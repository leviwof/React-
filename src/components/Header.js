import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "./UserContext";
import { useSelector } from "react-redux";

// Header component
export const Header = () => {
    const [btnState, setBtnState] = useState("Logout")

    const onlineStatus = useOnlineStatus();

    const { LoggedInUser } = useContext(UserContext)

    const cartItems = useSelector((store) => store.cart.items)

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg m-2 sm:bg-yellow-50 lg:bg-green-50">
            <div className="w-56">
                <img src={LOGO_URL} />
            </div>
            <div className="flex items-center justify-between ">
                <ul className="flex px-5 py-5   font-bold border border-solid border-black rounded-lg">
                    <li className="px-4">
                        Online Status:{onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link></li>
                    <li className="px-4">
                        <Link to="/about">AboutUs</Link></li>
                    <li className="px-4">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/cart">Cart({cartItems.length}) items</Link>
                    </li>
                    <button className="rounded-lg hover:bg-red-200 border border-solid bolder-black px-4 py-2 m-4 "
                        onClick={() => {
                            btnState === "Logout" ? setBtnState("Login") : setBtnState("Logout")
                        }}>{btnState}{LoggedInUser}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;