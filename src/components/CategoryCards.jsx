import { Link } from "react-router-dom";


const CategoryCards = () => {
    return (
        <div className="my-3">
            <div className=" flex justify-center my-5">
                <p className="text-4xl border-y-2 py-2 border-orange-500 text-center text-white w-fit">Explore By <span className="text-orange-500 ">Category</span></p>
            </div>
            <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-9">
                <div className="card card-compact bg-gray-800 w-96 shadow-xl">
                    <figure className="h-[290px] bg-black">
                        <img
                        className=" w-full"
                        src="https://media1.tenor.com/m/LWHfISDLLH4AAAAC/spin-world.gif"
                        alt="Shoes" />
                    </figure>
                    <div className="card-body text-white">
                        <h2 className="card-title text-orange-500">Planets</h2>
                        <p>Know about previously discovered Planets</p>
                        <div className="card-actions justify-end">
                        <Link to={'/allplanets'}><button className="btn btn-primary">Explore</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-gray-800 w-96 shadow-xl">
                    <figure className="bg-black">
                        <img
                        className="h-[290px]"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Dscovrepicmoontransitfull.gif/450px-Dscovrepicmoontransitfull.gif"
                        alt="Shoes" />
                    </figure>
                    <div className="card-body text-white">
                        <h2 className="card-title text-orange-500">Natural Satelites</h2>
                        <p>Know about previously discovered Planets</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary">Explore</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-gray-800 w-96 shadow-xl">
                    <figure>
                        <img
                        className="h-[290px]"
                        src="https://science.nasa.gov/wp-content/uploads/2023/06/Animated_GIF_of_Spacecraft_Over_Earth.gif?w=1536&format=webp"
                        alt="Shoes" />
                    </figure>
                    <div className="card-body text-white">
                        <h2 className="card-title text-orange-500">Satelites</h2>
                        <p>Know about previously discovered Planets</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary">Explore</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="flex justify-center my-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-9">
                <div className="card card-compact bg-gray-800 w-96 shadow-xl">
                    <figure className="h-[290px] bg-black">
                        <img
                        className=" w-full"
                        src="	https://media1.tenor.com/m/5RIvOG_l6hEAAAAC/meteor-showers-meteor-showers101.gif"
                        alt="Shoes" />
                    </figure>
                    <div className="card-body text-white">
                        <h2 className="card-title text-orange-500">Asteroid</h2>
                        <p>Know about previously discovered Planets</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary">Explore</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-gray-800 w-96 shadow-xl">
                    <figure className="bg-black">
                        <img
                        className="h-[290px]"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Dscovrepicmoontransitfull.gif/450px-Dscovrepicmoontransitfull.gif"
                        alt="Shoes" />
                    </figure>
                    <div className="card-body text-white">
                        <h2 className="card-title text-orange-500">Natural Satelites</h2>
                        <p>Know about previously discovered Planets</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary">Explore</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default CategoryCards;