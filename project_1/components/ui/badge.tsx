const Badge = ({ children }: { children: React.ReactNode }) => {
    return (
        <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white
        text-sm shadow-md font-extralight">
            { children }
        </span>
    );
}

export default Badge;