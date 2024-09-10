import React from "react";

const AllPlanets = () => {
  return (
    <div className="w-full px-8 min-h-screen bg-[url(https://cdn.eso.org/images/screen/eso0932a.jpg)] bg-center bg-cover bg-no-repeat">
      <div>
        <h2 className="text-center text-3xl font-medium text-white py-10">
          Planet Details
        </h2>
      </div>
      <div className="flex justify-around pt-20">
        <div className="flex-col justify-center items-center">
            <figure className="">
            <img
                className=""
                src="https://media1.tenor.com/m/LWHfISDLLH4AAAAC/spin-world.gif"
                alt="Shoes"
            />
            </figure>
            <p className="text-white text-xl ml-44 ">Planet Earth</p>
        </div>
        <div className="w-1/2">
            <p className="text-white">Earth—our home planet—is the only place we know of so far that’s inhabited by living things. It's also the only planet in our solar system with liquid water on the surface.
            Earth is only the fifth largest planet in the solar system, just slightly larger than nearby Venus. Earth is the biggest of the four planets closest to the Sun, all of which are made of rock and metal. NASA has the most missions of all operating on our home planet. NASA’s Earth Observing System (EOS) is a coordinated series of polar-orbiting and low inclination satellites for long-term global observations of the land surface, biosphere, solid Earth, atmosphere, and oceans.</p>
            <div className="flex justify-start gap-5 mt-8">
                <button className="bg-orange-500 text-white p-2 rounded-md">Compare Size</button>
                <button className="bg-orange-500 text-white p-2 rounded-md">Measure Distance</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AllPlanets;
