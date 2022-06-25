import React from "react";

export const Footer = () => {
  return (
    <div>
      <footer className=" text-white bg-gradient-to-t from-gray-800 to-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-start lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-bold items-baseline md:justify-start justify-center text-white">
              <img src="" alt="" className="img-header" />
              Tailblocks
            </a>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="md:w-1/4 w-full px-3">
              <h2 className="title-font font-bold text-white tracking-widest text-md mb-3 text-left">
                Company
              </h2>
              <nav className="list-none mb-10 text-left">
                <li>
                  <a
                    target="_blank"
                    className="text-white"
                    href="https://discord.gg/Nc8S5PtygK"
                  >
                    Re:Fine
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="text-white"
                    href="https://chat.whatsapp.com/Cf7QS5vT6lpB4eEaCzjLwF"
                  >
                    TownHall Ventures
                  </a>
                </li>
                <li>
                  <a target="_blank" className="text-white" href="#">
                    Work With Us
                  </a>
                </li>
                <li className="text-white">
                  <a id="vNP9UKDQ">Collaborate</a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="text-white"
                    href="https://www.instagram.com/geniegradz/"
                  >
                    Subscription Plans & Benefits
                  </a>
                </li>
                <li className="text-white">
                  <a id="HVMPhJwm" className="text-left">
                    Students Developer Program
                  </a>
                </li>
              </nav>
            </div>
            <div className="md:w-1/4 w-full px-3">
              <h2 className="title-font font-bold text-white tracking-widest text-md mb-3 text-left">
                Products
              </h2>
              <nav className="list-none mb-10 text-left">
                <li>
                  {/* <Link target="_blank" to="/periodic">Periodic Table</Link> */}
                  <a
                    target="_blank"
                    href="/blogs"
                    className="text-white cursor-pointer"
                  >
                    Blogs
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="text-white"
                    href="https://drive.google.com/drive/folders/17GnHECDg3C0MOTO95HUM9xnEKHp_6V6W?usp=sharing"
                  >
                    Saving Account
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="text-white"
                    href="https://drive.google.com/drive/folders/1bt_HGGKR5VClorXPmc7m6ZAbZSfKIIi9?usp=sharing"
                  >
                    Fixed Deposit
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="text-white"
                    href="https://calendly.com/brainzeo-edtech/brainzeo-walkthrough-30-mins?month=2021-09"
                  >
                    Penny Round Off [ PRO ]
                  </a>
                </li>
                <li className="text-white">
                  <a id="CrjTHkbZ">Newsletters</a>
                </li>
                <li>
                  {/* <Link target="_blank" to="/periodic">Periodic Table</Link> */}
                  <a
                    target="_blank"
                    href="/periodic"
                    className="text-white cursor-pointer"
                  >
                    Marketplace
                  </a>
                </li>
                <li className="text-white">
                  <a id="CrjTHkbZ">Care Now , Pay Later (Coming Soon) </a>
                </li>
                <li>
                  {/* <Link target="_blank" to="/periodic">Periodic Table</Link> */}
                  <a
                    target="_blank"
                    href="/periodic"
                    className="text-white cursor-pointer"
                  >
                    Loans
                  </a>
                </li>
              </nav>
            </div>
            <div className="md:w-1/4 w-full px-3">
              <h2 className="title-font font-bold text-white tracking-widest text-md mb-3 text-left">
                About
              </h2>
              <nav className="list-none mb-10 text-left">
                <li>
                  <a
                    target="_blank"
                    href="/Privacy"
                    className="text-white cursor-pointer"
                  >
                    Policy
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="/Services"
                    className="text-white cursor-pointer"
                  >
                    Members Area
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    exact
                    href="/Guidelines"
                    className="text-white cursor-pointer"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    exact
                    href="/Refund"
                    className="text-white cursor-pointer"
                  >
                    Say Hi !
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    exact
                    href="/Code"
                    className="text-white cursor-pointer"
                  >
                    Partner with us
                  </a>
                </li>
              </nav>
            </div>
            <div className="md:w-1/4 w-full px-3">
              <h2 className="title-font font-bold text-white tracking-widest text-md mb-3 text-left">
                Blog
              </h2>
              <nav className="list-none mb-10 text-left">
                <li>
                  <a
                    target="_blank"
                    href="support@geniegradz.com"
                    className="text-white cursor-pointer"
                  >
                    support@geniegradz.com
                  </a>
                </li>
                <li>
                  <a target="_blank" href="#">
                    Address - Apke ❤️ mei <br />
                  </a>
                </li>
                <li>
                  <a target="_blank" href="#">
                    Contact number will be updated soon
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-900">
          <div className="container mx-auto pt-6 pb-2 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-white text-md text-center sm:text-left copyright">
              © Copyrights 2022 —
              <a
                href="https://www.instagram.com/brainzeo/"
                rel="noopener noreferrer"
                className="text-white ml-1"
                target="_blank"
              >
                @Refine
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start footer-medias ">
              <a
                target="_blank"
                className="ml-3 mb-3 text-white footer-media"
                href="https://www.facebook.com/profile.php?id=100071618354062"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                target="_blank"
                className="ml-3 mb-3 text-white footer-media"
                href="https://twitter.com/GenieGradz"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                target="_blank"
                className="ml-3 mb-3 text-white footer-media"
                href="https://www.instagram.com/geniegradz/"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                target="_blank"
                className="ml-3 mb-3 text-white footer-media"
                href="https://www.linkedin.com/in/geniegradz/"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};
