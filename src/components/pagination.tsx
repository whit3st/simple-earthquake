import { Dispatch, SetStateAction } from "react";
import { EarthquakeData } from "../context/eartquake-data-context";
const Pagination = ({
    data,
    state: { setCurrentPageNumber, currentPageNumber },
}: {
    data: EarthquakeData[] | null;
    state: { setCurrentPageNumber: Dispatch<SetStateAction<number>>; currentPageNumber: number };
}) => {
    const totalPages = data ? Math.ceil(data.length / 21) : 0;
    const buttonStyles =
        "border border-neutral-800 text-neutral-300 hover:bg-neutral-700 w-8 rounded-sm";

    const onClickHandler = (index: number) => {
        setCurrentPageNumber(index);
        window.scrollTo(0, 0);
    };
    return (
        <div className="flex gap-2 mx-auto my-4">
            {currentPageNumber > 3 && (
                <button className={buttonStyles} onClick={() => onClickHandler(1)}>
                    1
                </button>
            )}
            {currentPageNumber > 4 && <span>...</span>}
            {currentPageNumber - 2 > 0 && (
                <button
                    className={buttonStyles}
                    onClick={() => onClickHandler(currentPageNumber - 2)}
                >
                    {currentPageNumber - 2}
                </button>
            )}
            {currentPageNumber - 1 > 0 && (
                <button
                    className={buttonStyles}
                    onClick={() => onClickHandler(currentPageNumber - 1)}
                >
                    {currentPageNumber - 1}
                </button>
            )}
            {currentPageNumber > 0 && (
                <button
                    className={buttonStyles + " bg-neutral-700"}
                    onClick={() => onClickHandler(currentPageNumber)}
                >
                    {currentPageNumber}
                </button>
            )}
            {currentPageNumber + 1 <= totalPages && (
                <button
                    className={buttonStyles}
                    onClick={() => onClickHandler(currentPageNumber + 1)}
                >
                    {currentPageNumber + 1}
                </button>
            )}
            {currentPageNumber + 2 <= totalPages && (
                <button
                    className={buttonStyles}
                    onClick={() => onClickHandler(currentPageNumber + 2)}
                >
                    {currentPageNumber + 2}
                </button>
            )}
            {currentPageNumber < totalPages - 3 && <span>...</span>}
            {currentPageNumber < totalPages - 2 && (
                <button className={buttonStyles} onClick={() => onClickHandler(totalPages)}>
                    {totalPages}
                </button>
            )}
        </div>
    );
};

export default Pagination;
