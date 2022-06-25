import React from "react";

export const About = () => {
  return (
    <div>
      <section className="text-gray-50 body-font bg-gradient-to-bl from-black to-purple-900">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-50">
              Start building Credit with Prepaid
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed">
              Refine is India's finest credit booster card, which you can
              personalize to your liking. Load money into the Refine App
              also earn 8% annual yields on your savings account, 8% annual
              returns on fixed deposits, and 10% annual returns on PRO. Get new
              banking features that are gamified, along with evolutionary
              security mechanisms.
              <br />
              It's not just a prepaid card its <b>NAYE BHARAT KA CARD</b>
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Know More
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Join Wait List
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
