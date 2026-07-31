import NavLinks from "./nav-links";
import Badge from "../ui/badge";

const Hero = () => {
    return(
        <div className="relative flex flex-col justify-between items-start bg-[url('/hero.png')] 
        bg-cover bg-center bg-no-repeat w-full h-[90vh] px-16 py-12">
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="relative flex justify-between w-full">
                <NavLinks/>
                <div className="absolute flex h-fit inset-0 m-auto w-fit gap-2">
                    <div className="text-4xl tracking-tight font-semibold">PADEL</div>
                    <div className="text-4xl tracking-tight font-light">SPORT</div>
                </div>
                <p>Right Section</p>
            </div>
            <div className="flex gap-4 flex-col items-start">
                <Badge>Sport Center</Badge>
                <p className="text-white text-7xl font-[200] tracking-tight">Your Game, Your Style - <br/> Modern Padel Courts for <br/> Every Level</p>
            </div>
            
        </div>
    );
}

export default Hero;