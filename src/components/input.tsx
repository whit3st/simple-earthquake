import { Dispatch, SetStateAction } from "react";

const Input = ({ setterFn }: { setterFn: Dispatch<SetStateAction<string>> }) => {
    return (
        <input
            type="text"
            placeholder="şehre göre filtrele"
            className="w-full px-4 py-2 border bg-transparent border-neutral-300 rounded-md shadow-sm focus:ring-2 sm:text-sm"
            onChange={(e) => setterFn(e.target.value)}
        />
    );
};

export default Input;
