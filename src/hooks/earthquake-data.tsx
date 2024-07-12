import { useContext } from "react";
import { EarthquakeDataContext } from "../context/eartquake-data-context";

export const useEarthquakeData = () => {
    const context = useContext(EarthquakeDataContext);
    if (context === undefined) {
        throw new Error("useEarthquakeData must be used within a EarthquakeDataContextProvider");
    }
    return context;
};
