import resDataList from "./mockData";
import { useEffect } from "react";

const useRestaurantMenu = (resId) => {

    useEffect(() => {
        fetchData(resId)
    }, [])

    return resInfo;
}

export default useRestaurantMenu;