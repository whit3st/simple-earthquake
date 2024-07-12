import { ReactNode } from "react";

const Col = ({ children }: { children: ReactNode }) => {
    return <aside className="flex flex-col md:w-1/3">{children}</aside>;
};

export default Col;
