const Hero = () => {
    return(
        <div className="relative flex flex-col justify-between items-start bg-[url('/hero.png')] 
        bg-cover bg-center bg-no-repeat w-full h-[90vh] px-16 py-12">
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="relative flex justify-between w-full">
                <div className="flex gap-10">
                    <div><a className="text-2xl font-medium text-gray-400">About Us</a></div>
                    <div><a className="text-2xl font-medium text-gray-400">Courts</a></div>
                    <div><a className="text-2xl font-medium text-gray-400">Membership</a></div>
                </div>
                <div className="absolute flex h-fit inset-0 m-auto w-fit gap-2">
                    <div className="text-4xl tracking-tight font-semibold">PADEL</div>
                    <div className="text-4xl tracking-tight">SPORT</div>
                </div>
                <p>Right Section</p>
            </div>
            <div className="flex gap-4 flex-col items-start">
                <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white text-sm shadow-md">
                Sport Center</span>
                <p className="text-white text-7xl font-[200] tracking-tight">Your Game, Your Style - <br/> Modern Padel Courts for <br/> Every Level</p>
            </div>
            
        </div>
    );
}

export default Hero;