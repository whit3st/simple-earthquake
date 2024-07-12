import { useState, useEffect, createContext, ReactNode } from "react";
export type EarthquakeData = {
    id: string;
    __v: number;
    body: Array<{
        tarih: string;
        enlem: string;
        boylam: string;
        derinlik: string;
        md: string;
        ml: string;
        mw: string;
        yer: string;
        nitelik: string;
        veriKaynagi: string;
        buyukluk: string;
        yontem: string;
        adres: string;
    }>;
};

export const EarthquakeDataContext = createContext<EarthquakeData[] | null>(null);

export const EarthquakeDataContextProvider = ({ children }: { children: ReactNode }) => {
    const [earthquakeData, setEarthquakeData] = useState<EarthquakeData[] | null>(null);
    useEffect(() => {
        const fetchContent = async () => {
            const req = await fetch("https://api.sismikharita.com/week");
            const res = await req.json();
            new Promise(() => {
                setTimeout(() => {
                    setEarthquakeData(res.results);
                }, 500);
            });
        };
        fetchContent();
    }, []);

    return (
        <EarthquakeDataContext.Provider value={earthquakeData}>
            {children}
        </EarthquakeDataContext.Provider>
    );
};
