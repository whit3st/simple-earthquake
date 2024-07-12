import { LoaderCircle } from "lucide-react";

const Loading = () => {
    return (
        <div className="absolute inset-0 flex items-center justify-center">
            <LoaderCircle size={52} strokeWidth={1} className="animate-spin" />
        </div>
    );
};

export default Loading;
