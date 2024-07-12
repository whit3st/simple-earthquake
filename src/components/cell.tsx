import { ReactNode } from "react";

const Cell = ({ title, children }: { title?: string, children: ReactNode }) => {
    return <div title={title} className="flex gap-2 items-center">{children}</div>;
};

export default Cell;
