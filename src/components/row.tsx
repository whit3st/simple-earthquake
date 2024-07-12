import { EarthquakeData } from "../context/eartquake-data-context";
import Cell from "./cell";
import Col from "./col";
import Text from "./text";
import {
    Calendar,
    Ruler,
    Crosshair,
    Database,
    Compass,
    Gauge,
    Tag,
    MapPin,
    MoveRight,
} from "lucide-react";
const Row = ({ earthquake }: { earthquake: EarthquakeData }) => {
    const date = new Date(earthquake.body[0].tarih).toLocaleDateString("tr-TR", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const yer = earthquake.body[0].yer[0] + earthquake.body[0].yer.slice(1).toLocaleLowerCase();
    const adres =
        earthquake.body[0].adres[0] + earthquake.body[0].adres.slice(1).toLocaleLowerCase();

    const getMapURL = (enlem: string, boylam: string) => {
        return `https://yandex.com/maps/?ll=${boylam},${enlem}&z=10&pt=${boylam},${enlem},pm2rdl`;
    };
    return (
        <div className="flex flex-col md:flex-row md:items-center gap-8 px-8 py-4 border border-neutral-800 rounded-md shadow-neutral-900 hover:shadow-neutral-700 shadow-md bg-black/40 transition-all duration-500">
            <Col>
                <Cell title="Tarih">
                    <Calendar size={16} />
                    <Text>{date}</Text>
                </Cell>
                <Cell title="Yer">
                    <Crosshair size={16} />
                    <Text>{yer}</Text>
                </Cell>
                <Cell title="Adres">
                    <MapPin size={16} />
                    <Text>{adres}</Text>
                </Cell>
                <Cell title="Buyukluk">
                    <Gauge size={16} />
                    <Text>{earthquake.body[0].buyukluk}</Text>
                </Cell>
            </Col>
            <Col>
                <Cell title="Enlem/Boylam">
                    <Compass size={16} />
                    <Text>
                        {earthquake.body[0].enlem}, {earthquake.body[0].boylam}
                    </Text>
                </Cell>
                <Cell title="Derinlik">
                    <Ruler size={16} />
                    <Text>{earthquake.body[0].derinlik} km</Text>
                </Cell>
                <Cell title="Nitelik">
                    <Tag size={16} />
                    <Text>{earthquake.body[0].nitelik}</Text>
                </Cell>
                <Cell title="Veri Kaynagı">
                    <Database size={16} />
                    <Text>{earthquake.body[0].veriKaynagi}</Text>
                </Cell>
            </Col>
            <a
                className="flex group ml-auto gap-2 items-center justify-center bg-neutral-900 hover:bg-neutral-800 text-neutral-100 px-4 py-2 border border-neutral-600 rounded-md sm:text-sm transition-colors duration-200"
                target="_blank"
                href={getMapURL(earthquake.body[0].enlem, earthquake.body[0].boylam)}
            >
                Haritada Aç
                <MoveRight
                    size={16}
                    className="transition-transform group-hover:-rotate-45 duration-200"
                />
            </a>
        </div>
    );
};

export default Row;
