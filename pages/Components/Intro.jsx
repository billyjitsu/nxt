import React from "react";
import Image from "next/image";
import ethlogo from "../../public/ethlogo.jpg";


const Intro = () => {
  return (
    <div>
      <div className="grid grid-cols-12 ">
        <div className="col-span-5 sm:col-span-12 flex items-center justify-center pt-5">
          <div>
            <Image src={ethlogo} alt="ethlogo" />
          </div>
        </div>

        <div className="col-span-7 flex items-center flex-col justify-center sm:col-span-12">
          <div className="text-left xl:p-20 space-x-2 space-y-5">
            <h1 className="text-7xl font-bold ">Hi, I'm Billyjitsu</h1>
            <h1 className="text-2xl text-purple-500">
              Full Stack Developer, Internet Thug
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
              veritatis reiciendis unde commodi dolore ullam cumque, nesciunt
              nostrum, excepturi perspiciatis libero, odio deserunt iusto esse
              eos. Iste iure quasi error?
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Intro;
