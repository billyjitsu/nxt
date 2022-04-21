import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#93c5fd"
            fill-opacity="1"
            d="M0,160L80,176C160,192,320,224,480,208C640,192,800,128,960,96C1120,64,1280,64,1360,64L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="flex items-center justify-center bg-blue-300 text-white flex-col pb-20">
        <h1>Designed and Developed by</h1>
        <div className="border border-gray-400 w-1/3"></div>
        <h1>Billyjitsu</h1>
      </div>
    </div>
  );
};

export default Footer;
