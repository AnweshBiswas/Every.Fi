import React from "react";
import Slider from "react-slick";
import "./Hero.css";

export const Hero = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div>
      <section className="text-gray-50 bg-gradient-to-tl from-black to-purple-900 body-font">
        <div className="first-cont-home">
          <div className="message-area">
            <div className="landing-left-side">
              <div className="landing-message ">Prepaid that builds Credit</div>
              <div className="landing-message-det">
                Refine is India's finest credit booster card, which you can
                personalize to your liking. Load money into the Refine App
                also earn 8% annual yields on your savings account, 8% annual
                returns on fixed deposits, and 10% annual returns on PRO. Get
                new banking features that are gamified,along with evolutionary
                security mechanisms. It's not just a prepaid card its{" "}
                <b>NAYE BHARAT KA CARD</b>
              </div>
              <div
                className="landing-left-btns mob-hide"
                style={{ marginTop: "2rem" }}
              >
                <button
                  className="MuiButtonBase-root MuiButton-root MuiButton-text start-exp-btn"
                  tabindex="0"
                  type="button"
                  style={{ cursor: "pointer" }}
                >
                  <span className="MuiButton-label">Start Exploring</span>
                  <span className="MuiTouchRipple-root"></span>
                </button>
                <div className="tour-btn">
                  <button
                    className="MuiButtonBase-root MuiButton-root MuiButton-text tour-btn"
                    tabindex="0"
                    type="button"
                    style={{ marginBottom: "1rem", cursor: "pointer" }}
                  >
                    <span className="MuiButton-label">
                      <div className="d-flex align-items-center justify-content-center">
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAOCAYAAAAbvf3sAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEYSURBVHgBjVBLTgJBFKxqhngM5iouTdzoRkNCbEg4gCfQIxhXrpgJiU7ihsToWryIgzfAA9DP97pn8IMEaib9rXpVrwHDfb+HPeE6074nWLuHQY1q4HcKVkQPAgqQkyzc40WByudbBQgg9KeOOokKPbuo3Wx0hdmm0CmMqDrj2ipBglyT7rXzNPK/BAHBiJopekDUJd4kaR6EBZ/HdevWREoEpm/twngYx5wH3Xe8jL1D1lS06nG53jb7OEtUuo45OP7pK0X8NrKDN1mFQxzdlZlrGJadbTinPdtbk5+CcInjSdmKs+CMu2GxROCtkm9wUi5/3mWpZtOsmBPnuhnidLLAP1BB+LDHEuFCgwxxNp1jJ6rzHHviC7xKYfGLjZDHAAAAAElFTkSuQmCC"
                          className="next-icon"
                          alt="next-icon"
                        />
                        <div className="px-1">Request Callback</div>
                      </div>
                    </span>
                    <span className="MuiTouchRipple-root"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="ll mob-hide carousel-area">
            <Slider {...settings}>
              <div
                data-index="-1"
                tabindex="-1"
                className="slick-slide slick-cloned"
                aria-hidden="true"
              >
                <div>
                  <a href="/" style={{ textDecoration: "none" }}>
                    <div className="landing-right-side mob-hide">
                      <div>
                        <img
                          className="logo-card w-full"
                          src="https://stratzy-public.s3.ap-south-1.amazonaws.com/ideaImages/roadRoller.jpg"
                          alt="logo-card"
                        />
                      </div>
                      <div
                        className=" wht-clr"
                        style={{ marginTop: "0.5rem", fontSize: "1.75rem" }}
                      >
                        Savings Account
                      </div>
                      <div
                        className="light-wht-clr"
                        style={{
                          fontSize: "1rem",
                          padding: "10px 0px",
                          height: "4rem",
                        }}
                      >
                        Make your money earn for you as well
                      </div>
                      <div className="strat-card-bot flex items-center justify-between">
                        <div className="card-bot w-full">
                          <div className="wht-clr" style={{ fontSize: "1rem" }}>
                            Others
                          </div>
                          <div
                            className=""
                            style={{
                              display: "flex",
                              fontSize: "1rem",
                              alignItems: "center",
                              marginTop: "0.5rem",
                            }}
                          >
                            <p className="red-clr ">upto 6 % p.a*</p>
                            <svg
                              width="20"
                              height="14"
                              viewBox="0 0 32 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              transform="scale(1,-1)"
                            >
                              <path
                                d="M17.2666 3H29M29 3V14.7333M29 3L17.2666 14.7333L11.4 8.86667L2.59998 17.6667"
                                stroke="#FF5863"
                                stroke-width="4.4"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="card-bot w-full">
                          <div
                            className="wht-clr w-full"
                            style={{ fontSize: "1rem", textAlign: "right" }}
                          >
                            Refine Savings A/C
                          </div>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              fontSize: "1rem",
                              marginTop: "0.5rem",
                              textAlign: "right",
                            }}
                          >
                            <p className="grn-clr text-right w-full ">
                              upto 8 % p.a*
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://stratzy.sng.link/Ae6sj/phhc/b023"
                    className="deks-hide mob-div1-card d-flex align-items-center"
                    style={{ textDecoration: "none" }}
                  >
                    <div style={{ marginRight: "1rem" }}>
                      <img
                        className="logo-card"
                        src="https://stratzy-public.s3.ap-south-1.amazonaws.com/ideaImages/roadRoller.jpg"
                        alt="logo-card"
                      />
                      <div className="d-flex mob-slide">
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACTSURBVHgBdY69CsJAEIRnl6CGA39SpBQsLO18Ad+/MWBnYSGoiASDP1FzuXUXtNL7imV3GWaGoKxF+vcXxqHFgAEfGOW5i82CyCfFQdy1xgwfApDoyIcNnJ5LxggT/MPDrSrJ2GwRoe1opGXGBCzwJtjFBL0URz6l2Gup24/9A9sp0ZO+j+Iiufa35mhqlPOMKtvff2IwuENvrgAAAAAASUVORK5CYII="
                          className=" mob-slide-dot"
                          alt="dot"
                        />
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAHCAYAAABp0096AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACDSURBVHgBxdKxEYJQEATQXWbMLYGGtAVtAMEK9JfgaAF2QAI5JdABdEAF3PIH/hCQw3/RXbQ3s0cESf3IJb39eMb+ehkcrt8/Q/grhB9KwDOZB6lABCRyoixSnsYOkcwVsMoGHNP9Nr5dKoA5RCAzx3Wrs7t/hpu/KsXeqBaGDy6/ZgKNPimGPZR0IAAAAABJRU5ErkJggg=="
                          className="mob-slide-line"
                          alt="dot"
                        />
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACTSURBVHgBdY69CsJAEIRnl6CGA39SpBQsLO18Ad+/MWBnYSGoiASDP1FzuXUXtNL7imV3GWaGoKxF+vcXxqHFgAEfGOW5i82CyCfFQdy1xgwfApDoyIcNnJ5LxggT/MPDrSrJ2GwRoe1opGXGBCzwJtjFBL0URz6l2Gup24/9A9sp0ZO+j+Iiufa35mhqlPOMKtvff2IwuENvrgAAAAAASUVORK5CYII="
                          className=" mob-slide-dot"
                          alt="dot"
                        />
                      </div>
                    </div>
                    <div className="">
                      <div className="font-sz-20 wht-clr">Fixed Deposit</div>
                      <div className="card-text-mob">
                        Got some extra money ,open a fixed deposit with us and
                        earn 2X* interest annually as compared to others
                      </div>
                      <div className="d-flex">
                        <div className=" pr-2 text-left">
                          <div className="wht-clr cagr text-left">Others</div>
                          <div className="red-clr py-1 perc text-left">
                            2.90-3.75 % p.a*
                          </div>
                        </div>
                        <div className="white-border text-right">
                          <div className="wht-clr cagr text-right">
                            Refine Fixed Deposit
                          </div>
                          <div className="grn-clr py-1 perc text-right">
                            Upto 8 % p.a*
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div
                data-index="0"
                className="slick-slide"
                tabindex="-1"
                aria-hidden="true"
                style={{ outline: "none", width: "297px" }}
              >
                <div>
                  {" "}
                  <a
                    href="/idea/Fierce-Finance"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="landing-right-side mob-hide">
                      <div>
                        <img
                          className="logo-card"
                          src="https://stratzy-public.s3.ap-south-1.amazonaws.com/ideaImages/fierceFinance.png"
                          alt="logo-card"
                        />
                      </div>
                      <div
                        className=" wht-clr"
                        style={{ marginTop: "0.5rem", fontSize: "1.75rem" }}
                      >
                        Penny Round Off
                      </div>
                      <div
                        className="light-wht-clr"
                        style={{
                          fontSize: "1rem",
                          padding: "10px 0px",
                          height: "4rem",
                        }}
                      >
                        With Re:fine invest your left over penny chillars
                        automatically and earn interest upto 10% p.a*
                      </div>
                      <div className="strat-card-bot flex items-center justify-between ">
                        <div className="card-bot w-full">
                          <div
                            className="wht-clr text-left"
                            style={{ fontSize: "1rem"}}
                          >
                            Refine PRO
                          </div>
                          <div
                            className="text-left"
                            style={{
                              display: "flex",
                              fontSize: "1rem",
                              alignItems: "center",
                              marginTop: "0.5rem",

                            }}
                          >
                            <p
                              className="grn-clr "
                              style={{
                                marginRight: "0.3rem",
                                textAlign: "right",
                              }}
                            >
                              Upto 10 % p.a
                            </p>
                            <svg
                              width="20"
                              height="14"
                              viewBox="0 0 32 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              transform="scale(1,1)"
                            >
                              <path
                                d="M17.2666 3H29M29 3V14.7333M29 3L17.2666 14.7333L11.4 8.86667L2.59998 17.6667"
                                stroke="#01C36D"
                                stroke-width="4.4"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="card-bot w-full">
                          <div className="wht-clr text-right w-full" style={{ fontSize: "1rem", textAlign: "right !important" }}>
                            NIFTY
                          </div>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              fontSize: "1rem",
                              marginTop: "0.5rem",
                              textAlign: "right !important"
                            }}
                          >
                            <p className="grn-clr text-right w-full">+8 %</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://stratzy.sng.link/Ae6sj/phhc/b023"
                    className="deks-hide mob-div1-card d-flex align-items-center"
                    style={{ textDecoration: "none" }}
                  >
                    <div style={{ marginRight: "1rem" }}>
                      <img
                        className="logo-card"
                        src="https://stratzy-public.s3.ap-south-1.amazonaws.com/ideaImages/fierceFinance.png"
                        alt="logo-card"
                      />
                      <div className="d-flex mob-slide">
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACTSURBVHgBdY69CsJAEIRnl6CGA39SpBQsLO18Ad+/MWBnYSGoiASDP1FzuXUXtNL7imV3GWaGoKxF+vcXxqHFgAEfGOW5i82CyCfFQdy1xgwfApDoyIcNnJ5LxggT/MPDrSrJ2GwRoe1opGXGBCzwJtjFBL0URz6l2Gup24/9A9sp0ZO+j+Iiufa35mhqlPOMKtvff2IwuENvrgAAAAAASUVORK5CYII="
                          className=" mob-slide-dot"
                          alt="dot"
                        />
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAHCAYAAABp0096AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACDSURBVHgBxdKxEYJQEATQXWbMLYGGtAVtAMEK9JfgaAF2QAI5JdABdEAF3PIH/hCQw3/RXbQ3s0cESf3IJb39eMb+ehkcrt8/Q/grhB9KwDOZB6lABCRyoixSnsYOkcwVsMoGHNP9Nr5dKoA5RCAzx3Wrs7t/hpu/KsXeqBaGDy6/ZgKNPimGPZR0IAAAAABJRU5ErkJggg=="
                          className="mob-slide-line"
                          alt="dot"
                        />
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACTSURBVHgBdY69CsJAEIRnl6CGA39SpBQsLO18Ad+/MWBnYSGoiASDP1FzuXUXtNL7imV3GWaGoKxF+vcXxqHFgAEfGOW5i82CyCfFQdy1xgwfApDoyIcNnJ5LxggT/MPDrSrJ2GwRoe1opGXGBCzwJtjFBL0URz6l2Gup24/9A9sp0ZO+j+Iiufa35mhqlPOMKtvff2IwuENvrgAAAAAASUVORK5CYII="
                          className=" mob-slide-dot"
                          alt="dot"
                        />
                      </div>
                    </div>
                    <div className="">
                      <div className="font-sz-20 wht-clr">Fierce Finance</div>
                      <div className="card-text-mob">
                        IIFL Finance Ltd is one of the leading retail focused
                        diversified NBFCs in India, engaged in the business of
                        loans and mortgages along with its subsidiaries.
                      </div>
                      <div className="d-flex">
                        <div className=" pr-2">
                          <div className="wht-clr cagr text-left">5Y CAGR</div>
                          <div className="grn-clr py-1 perc text-left">
                            1.0 %
                          </div>
                        </div>
                        <div className="white-border text-right" style={{textAlign: 'right !important' }} >
                          <div className="wht-clr cagr text-right">NIFTY</div>
                          <div className="grn-clr py-1 perc text-right w-full" style={{textAlign: 'right !important' }}>
                            +8%
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div
                data-index="-1"
                tabindex="-1"
                className="slick-slide slick-cloned"
                aria-hidden="true"
              >
                <div>
                  {" "}
                  <a
                    href="/idea/Road-Roller"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="landing-right-side mob-hide">
                      <div>
                        <img
                          className="logo-card"
                          src="https://stratzy-public.s3.ap-south-1.amazonaws.com/ideaImages/roadRoller.jpg"
                          alt="logo-card"
                        />
                      </div>
                      <div
                        className=" wht-clr"
                        style={{ marginTop: "0.5rem", fontSize: "1.75rem" }}
                      >
                        Road Roller
                      </div>
                      <div
                        className="light-wht-clr"
                        style={{
                          fontSize: "1rem",
                          padding: "10px 0px",
                          height: "4rem",
                        }}
                      >
                        H.G. Infra Engineering Limited was incorporated in 2003
                        in Jodhpur, Rajasthan. It is primarily invol..
                      </div>
                      <div className="strat-card-bot flex items-center justify-between ">
                        <div className="card-bot w-full">
                          <div className="wht-clr" style={{ fontSize: "1rem" }}>
                            P/L
                          </div>
                          <div
                            className=""
                            style={{
                              display: "flex",
                              fontSize: "1rem",
                              alignItems: "center",
                              marginTop: "0.5rem",
                            }}
                          >
                            <p
                              className="red-clr "
                              style={{ marginRight: "0.3rem" }}
                            >
                              -8.2 %
                            </p>
                            <svg
                              width="20"
                              height="14"
                              viewBox="0 0 32 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              transform="scale(1,-1)"
                            >
                              <path
                                d="M17.2666 3H29M29 3V14.7333M29 3L17.2666 14.7333L11.4 8.86667L2.59998 17.6667"
                                stroke="#FF5863"
                                stroke-width="4.4"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="card-bot w-full">
                          <div className="wht-clr text-right" style={{ fontSize: "1rem" }}>
                            NIFTY
                          </div>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              fontSize: "1rem",
                              marginTop: "0.5rem",
                              textAlign: "right"
                            }}
                          >
                            <p className="grn-clr text-right">+8 %</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://stratzy.sng.link/Ae6sj/phhc/b023"
                    className="deks-hide mob-div1-card d-flex align-items-center"
                    style={{ textDecoration: "none" }}
                  >
                    <div style={{ marginRight: "1rem" }}>
                      <img
                        className="logo-card"
                        src="https://stratzy-public.s3.ap-south-1.amazonaws.com/ideaImages/roadRoller.jpg"
                        alt="logo-card"
                      />
                      <div className="d-flex mob-slide">
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACTSURBVHgBdY69CsJAEIRnl6CGA39SpBQsLO18Ad+/MWBnYSGoiASDP1FzuXUXtNL7imV3GWaGoKxF+vcXxqHFgAEfGOW5i82CyCfFQdy1xgwfApDoyIcNnJ5LxggT/MPDrSrJ2GwRoe1opGXGBCzwJtjFBL0URz6l2Gup24/9A9sp0ZO+j+Iiufa35mhqlPOMKtvff2IwuENvrgAAAAAASUVORK5CYII="
                          className=" mob-slide-dot"
                          alt="dot"
                        />
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAHCAYAAABp0096AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACDSURBVHgBxdKxEYJQEATQXWbMLYGGtAVtAMEK9JfgaAF2QAI5JdABdEAF3PIH/hCQw3/RXbQ3s0cESf3IJb39eMb+ehkcrt8/Q/grhB9KwDOZB6lABCRyoixSnsYOkcwVsMoGHNP9Nr5dKoA5RCAzx3Wrs7t/hpu/KsXeqBaGDy6/ZgKNPimGPZR0IAAAAABJRU5ErkJggg=="
                          className="mob-slide-line"
                          alt="dot"
                        />
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACTSURBVHgBdY69CsJAEIRnl6CGA39SpBQsLO18Ad+/MWBnYSGoiASDP1FzuXUXtNL7imV3GWaGoKxF+vcXxqHFgAEfGOW5i82CyCfFQdy1xgwfApDoyIcNnJ5LxggT/MPDrSrJ2GwRoe1opGXGBCzwJtjFBL0URz6l2Gup24/9A9sp0ZO+j+Iiufa35mhqlPOMKtvff2IwuENvrgAAAAAASUVORK5CYII="
                          className=" mob-slide-dot"
                          alt="dot"
                        />
                      </div>
                    </div>
                    <div className="">
                      <div className="font-sz-20 wht-clr">Road Roller</div>
                      <div className="card-text-mob">
                        H.G. Infra Engineering Limited was incorporated in 2003
                        in Jodhpur, Rajasthan. It is primarily involved in
                        infrastructure development and the construction of ro..
                      </div>
                      <div className=" flex items-center justify-between">
                        <div className=" pr-2">
                          <div className="wht-clr cagr">5Y CAGR</div>
                          <div className="grn-clr py-1 perc">-8.2 %</div>
                        </div>
                        <div className="white-border text-right">
                          <div className="wht-clr cagr text-right">NIFTY</div>
                          <div className="grn-clr py-1 perc text-right" style={{textAlign: "right !important"}} >+8%</div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};
