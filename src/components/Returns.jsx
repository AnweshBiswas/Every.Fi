import React, { useState } from "react";
import penny from "../assets/penny.png";

export const Returns = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const [opacity, setOpacity] = useState("0");
  const [top, setTop] = useState("-420px");
  const [top1, setTop1] = useState("-420px");
  const [top2, setTop2] = useState("-420px");
  const [top3, setTop3] = useState("-420px");
  const [active, setActive] = useState("active");

  const toggleDiv = () => {
    setActive(active === "" ? "active" : "");
    setShow(show === true ? false : true);
    setOpacity(opacity === "0" ? "100" : "0");
    setTop(top === "-420px" ? "0px" : "-420px");
  };

  const toggleDiv1 = () => {
    setActive(active === "" ? "active" : "");
    setShow1(show1 === true ? false : true);
    setOpacity(opacity === "0" ? "100" : "0");
    setTop1(top1 === "-420px" ? "0px" : "-420px");
  };
  const toggleDiv2 = () => {
    setActive(active === "" ? "active" : "");
    setShow2(show2 === true ? false : true);
    setOpacity(opacity === "0" ? "100" : "0");
    setTop2(top2 === "-420px" ? "0px" : "-420px");
  };
  const toggleDiv3 = () => {
    setActive(active === "" ? "active" : "");
    setShow3(show3 === true ? false : true);
    setOpacity(opacity === "0" ? "100" : "0");
    setTop3(top3 === "-420px" ? "0px" : "-420px");
  };

  return (
    <div>
      <section className="text-gray-400 body-font bg-gradient-to-br from-purple-900 to-black">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-12">
            <div className="w-full mb-6 lg:mb-0 text-center">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                High On Features
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            <div
              className="lg:w-1/4 sm:w-1/2 p-4 rounded"
              style={{
                borderRadius: "1rem !important",
                webkitBorderRadius: "1rem !important",
                mozBorderRadius: "1rem !important",
              }}
            >
              <div className="flex relative overflow-hidden">
                <div
                  className={`px-4 py-7 rounded relative z-10 w-full border-4 border-gray-200 bg-white transition-all ${setActive} `}
                  style={{ top: top, transition: ".5s all" }}
                >
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Shooting Stars
                  </h1>
                  <p className="leading-relaxed">
                    The amount you load into your SlayPay app becomes a secured
                    deposit. You receive a credit limit against this amount. At
                    the end of every month, once you settle your dues, this
                    amount remains intact and keeps increasing at a rate of 9%
                    per annum.
                  </p>
                  <button className=" bg-gray-800 text-white px-5 py-2 rounded mt-2 w-full text-center">
                    Earn Now
                  </button>
                </div>
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-all"
                  src={penny}
                />

                <button
                  className="absolute top-2 right-2 z-50 flex mx-auto text-white bg-gradient-to-br from-purple-900 to-black border-0 py-3 px-5 focus:outline-none hover:bg-gray-900 transition-all w-12 h-12 rounded-full"
                  onClick={toggleDiv}
                >
                  {show ? "x" : "+"}
                </button>
              </div>
            </div>
            <div className="lg:w-1/4 sm:w-1/2 p-4 rounded">
              <div className="flex relative overflow-hidden">
                <div
                  className="px-4 py-7 rounded relative z-10 w-full border-4 border-gray-200 bg-white transition-all"
                  style={{ top: top1, transition: ".5s all" }}
                >
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Shooting Stars
                  </h1>
                  <p className="leading-relaxed">
                    The amount you load into your SlayPay app becomes a secured
                    deposit. You receive a credit limit against this amount. At
                    the end of every month, once you settle your dues, this
                    amount remains intact and keeps increasing at a rate of 9%
                    per annum.
                  </p>
                  <button className=" bg-gray-800 text-white px-5 py-2 rounded mt-2 w-full text-center">
                    Earn Now
                  </button>
                </div>
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-all"
                  src="https://dummyimage.com/400"
                />

                <button
                  className="absolute top-2 right-2 z-50 flex mx-auto text-white bg-gradient-to-br from-purple-900 to-black border-0 py-3 px-5 focus:outline-none hover:bg-gray-900 transition-all w-12 h-12 rounded-full"
                  onClick={toggleDiv1}
                >
                  {show1 ? "x" : "+"}
                </button>
              </div>
            </div>
            <div className="lg:w-1/4 sm:w-1/2 p-4 rounded">
              <div className="flex relative overflow-hidden">
                <div
                  className="px-4 py-7 rounded relative z-10 w-full border-4 border-gray-200 bg-white transition-all"
                  style={{ top: top2, transition: ".5s all" }}
                >
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Shooting Stars
                  </h1>
                  <p className="leading-relaxed">
                    The amount you load into your SlayPay app becomes a secured
                    deposit. You receive a credit limit against this amount. At
                    the end of every month, once you settle your dues, this
                    amount remains intact and keeps increasing at a rate of 9%
                    per annum.
                  </p>
                  <button className=" bg-gray-800 text-white px-5 py-2 rounded mt-2 w-full text-center">
                    Earn Now
                  </button>
                </div>
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-all"
                  src="https://dummyimage.com/400"
                />

                <button
                  className="absolute top-2 right-2 z-50 flex mx-auto text-white bg-gradient-to-br from-purple-900 to-black border-0 py-3 px-5 focus:outline-none hover:bg-gray-900 transition-all w-12 h-12 rounded-full"
                  onClick={toggleDiv2}
                >
                  {show2 ? "x" : "+"}
                </button>
              </div>
            </div>
            <div className="lg:w-1/4 sm:w-1/2 p-4 rounded">
              <div className="flex relative overflow-hidden">
                <div
                  className="px-4 py-7 rounded relative z-10 w-full border-4 border-gray-200 bg-white transition-all"
                  style={{ top: top3, transition: ".5s all" }}
                >
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Shooting Stars
                  </h1>
                  <p className="leading-relaxed">
                    The amount you load into your SlayPay app becomes a secured
                    deposit. You receive a credit limit against this amount. At
                    the end of every month, once you settle your dues, this
                    amount remains intact and keeps increasing at a rate of 9%
                    per annum.
                  </p>
                  <button className=" bg-gray-800 text-white px-5 py-2 rounded mt-2 w-full text-center">
                    Earn Now
                  </button>
                </div>
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-all"
                  src="https://dummyimage.com/400"
                />

                <button
                  className="absolute top-2 right-2 z-50 flex mx-auto text-white bg-gradient-to-br from-purple-900 to-black border-0 py-3 px-5 focus:outline-none hover:bg-gray-900 transition-all w-12 h-12 rounded-full"
                  onClick={toggleDiv3}
                >
                  {show3 ? "x" : "+"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
