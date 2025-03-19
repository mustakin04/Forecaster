import React from "react";
import Container from "../Container/Container";
import { FaStar } from "react-icons/fa6";
import man from "../../assets/Tiger-Forests.png";
import ball from "../../assets/holes light.png";

const Banner = () => {
  return (
    <div className="bg-[#000000] py-[96px]">
      <Container className="flex items-center">
        <div className="w-[50%]">
          <h1
            className="font-semibold font-primary text-[96px] text-[#ffffff] tightest 
            tracking-tighter"
          >
            Real-time golf analusis from the future
          </h1>
          <div className="flex text-[#289944] gap-1 text-3xl mt-[80px]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p className="font-primary font-normal text-[18px] text-[#ffffff] mt-[16px]">
            " Now I'm hitting istead of branches
          </p>
          <div className="flex items-center gap-2.5 mt-[16px]">
            <div className="w-[32px] h-[32px] overflow-hidden">
              <img src={man} alt="" />
            </div>
            <h3 className="font-primary font-semibold text-[16px]  text-whites">
              Tiger Forests,USA
            </h3>
          </div>
          <div className="flex gap-20 mt-[80px]">
            <div className="flex gap-3.5 py-[19px] px-[36px] rounded-[999px] bg-[#289944]">
              <a
                href=""
                className="font-primary font-semibold text-[18px] text-whites"
              >
                Get Forecaster
              </a>
              <div className="w-[24px] h-[24px] bg-whites rounded-full"></div>
            </div>
            <div className="flex gap-3.5 py-[19px] px-[36px] rounded-[999px] bg-[#289944]">
              <a
                href=""
                className="font-primary font-semibold text-[18px] text-whites"
              >
                Get Forecaster
              </a>
              <div className="w-[24px] h-[24px] bg-whites rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="w-[50%]">
          <div className="relative">
            <img
              src={ball}
              alt=""
              className="text-whites   w-[267px] h-[267px] m-auto"
            />
            
            <div
              className="absolute top-[-37px] left-[160px] w-[341px] h-[341px] rounded-full
             border-4 border-green-500 opacity-70"
            >
                <div className="absolute top-[208px] left-[0px] w-[8px] h-[8px] rounded-full
                 border-2 border-amber-50 bg-green-600"></div>
                 <div className="absolute top-[116px] right-[0px] w-[8px] h-[8px] rounded-full
                 border-2 border-amber-50 bg-green-600"></div>
                  <div className="absolute bottom-[111px] right-[0px] w-[8px] h-[8px] rounded-full
                 border-2 border-amber-50 bg-green-600"></div>
                 
            </div>
            <div
              className="absolute top-[-91px] left-[102px] w-[458px] h-[458px] rounded-full
             border-4 border-green-500 opacity-40"
            ></div>
            <div
              className="absolute top-[-191px] left-[0px] w-[649px] h-[649px] rounded-full
             border-4 border-green-500 opacity-20 "
            ></div>
            
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
