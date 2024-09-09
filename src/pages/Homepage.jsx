import Navbar from "../components/Navbar";


const Homepage = () => {
    return (
        <div>
            <div className='relative '>
            <Navbar className='absolute'></Navbar>
            <div className="w-full h-[600px] flex justify-around items-center bg-custom-pattern bg-center bg-cover bg-no-repeat">
                <div>
                    <p className="text-3xl text-white">EXPLORE <br /> <span className="font-semibold my-6">THE UNIVERSE</span><br /> <span className="text-base my-6">Explore the cosmos with real-time data on planets, asteroids, and satellites.<br />Discover space facts and gain insights into the <br />wonders of the universe, all in one place!</span><br /><button className="p-2 font-medium rounded-md my-6 bg-orange-500">Get Started</button></p>
                    
                </div>
                <div className="space-y-5">
                    <div>
                        <p className="text-2xl font-semibold text-white">Constellations</p>
                        <p className="text-orange-500">Star patterns shaping celestial stories</p>
                    </div>
                    <div>
                        <p className="text-2xl font-semibold text-white">Planets</p>
                        <p className="text-orange-500">Celestial bodies orbiting stars in space.</p>
                    </div>
                    <div>
                        <p className="text-2xl font-semibold text-white">Satellites</p>
                        <p className="text-orange-500">Man-made or natural objects orbiting planets</p>
                    </div>
                    <div>
                        <p className="text-2xl font-semibold text-white">Asteroids</p>
                        <p className="text-orange-500">Rocky remnants from the early solar system</p>
                    </div>
                </div>
            </div>
            <div className="my-4">
                <p className="text-white text-3xl font-semibold text-center">Explore Live Positions</p>
            </div>
            <div className="flex justify-center">
            <iframe className="h-[700px] w-[95%]" src="https://eyes.nasa.gov/apps/solar-system/#/home?featured=false&shareButton=false&menu=false&collapseSettingsOptions=true" allowfullscreen ></iframe>
            </div>
            </div>
        </div>
    );
};

export default Homepage;