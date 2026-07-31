const NAV_LINKS = [
    { label:'About Us', href:"#about"},
    { label:'Courts', href:"#courts"},
    { label:"Membership", href:"#membership"},
];


const NavLink = ({label,href} : {label:string, href:string}) => {
    return(
        <div className="text-2xl font-medium text-gray-400 hover:text-white transition-colors">
            {label}
        </div>
    );
}

const NavLinks = () => {
    return(
        <div className="flex gap-10">
            {NAV_LINKS.map((link) => (
                <NavLink key={link.label} label={link.label} href={link.href} />
            ))}
        </div>
    );
}


export default NavLinks;