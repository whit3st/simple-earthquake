import { useState } from "react";
import { useEarthquakeData } from "./hooks/earthquake-data";
import Header from "./components/header";
import Loading from "./components/loading";
import Input from "./components/input";
import Row from "./components/row";
import Pagination from "./components/pagination";
import Footer from "./components/footer";
function App() {
    const earthquakes = useEarthquakeData();
    const [searchString, setSearchString] = useState("");
    const [currentPageNumber, setCurrentPageNumber] = useState(1);
    return (
        <main className="bg-gradient-to-b from-neutral-950 to-neutral-900 text-neutral-300 min-h-screen py-8">
            {!earthquakes && <Loading />}
            {earthquakes && (
                <section className="container flex flex-col gap-4">
                    <Header />
                    <Input setterFn={setSearchString} />
                    {earthquakes
                        .filter((gg) =>
                            gg.body[0].yer
                                .toLocaleLowerCase()
                                .includes(searchString.toLocaleLowerCase())
                        )
                        .slice(currentPageNumber * 20, currentPageNumber * 20 + 10)
                        .map((gg) => (
                            <Row key={gg.id} earthquake={gg} />
                        ))}
                    <Pagination
                        data={earthquakes}
                        state={{ setCurrentPageNumber, currentPageNumber }}
                    />
            <Footer />
                </section>
            )}
        </main>
    );
}

export default App;
