import { ReactNode } from "react";

const Text = ({ children }: { children: ReactNode }) => {
    return <p className="truncate text-lg">{children}</p>;
};

export default Text;
