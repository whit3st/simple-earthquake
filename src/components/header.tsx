import { Brackets } from 'lucide-react';

const Header = () => {
    return (
        <a href="/" className="flex mx-auto gap-2 mb-4">
            <Brackets size={32} />
            <h1 className="text-3xl">Deprem</h1>
            <p className="self-end text-xs">[haftalık]</p>
        </a>
    );
};

export default Header;