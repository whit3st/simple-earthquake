import { useState } from "react";
import { useEarthquakeData } from "./hooks/earthquake-data";
import Header from "./components/header";
import Loading from "./components/loading";
import Input from "./components/input";
import Row from "./components/row";
import Footer from "./components/footer";
function App() {
    const earthquakes = useEarthquakeData();
    const [searchString, setSearchString] = useState("");
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
                                .toLowerCase()
                                .includes(searchString.toLowerCase())
                        )
                        .map((gg) => (
                            <Row key={gg.id} earthquake={gg} />
                        ))}
                    <Footer />
                </section>
            )}
        </main>
    );
}

export default App;
