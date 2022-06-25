import React from "react";

export const Feature = () => {
  
  return (
    <div>
      <section className="text-gray-50 bg-gradient-to-tl from-black to-purple-900 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-50">
              Earn Rewards , Cashback Every where
              <br className="hidden lg:inline-block" />
              readymade gluten
            </h1>
            <p className="mb-8 leading-relaxed">
              Earn up to 4% in points/rewards/cashback for everyday purchases
              like rideshares, coffees and your phone bills whenever you make
              use of refine card / refine upi Every thing comes in bundle with
              your subscription. Spend your points on everything from as low as
              Mobile recharges to as high as buying new mobile phones to what
              not in our rewards store.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Know More
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Join Waitlist
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
