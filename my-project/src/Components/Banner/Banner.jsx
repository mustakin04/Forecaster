import React from "react";
import Container from "../Container/Container";
import { FaStar } from "react-icons/fa6";
import man from "../../assets/Tiger-Forests.png";
import ball from "../../assets/holes light.png";
import { FaCircle } from "react-icons/fa";

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
            <div
              className="flex gap-3.5 py-[19px] px-[36px] rounded-[999px] 
bg-[rgb(28,30,83)] bg-gradient-to-br from-[rgba(28,30,83,0)] to-[rgba(13,51,23,1)] 
shadow-[0px_0px_40px_5px_rgba(40,153,66,0.75)] 
transition-all duration-800 ease-in-out 
hover:bg-[rgb(13,51,23)] hover:bg-gradient-to-br hover:from-[rgba(13,51,23,0)] hover:to-[rgba(33,133,57,1)]"
            >
              <a
                href=""
                className="font-primary font-semibold text-[18px] text-whites"
              >
                Get Forecaster
              </a>
              <div className="w-[24px] h-[24px] bg-whites rounded-full"></div>
            </div>
            <div
              className="flex gap-3.5 py-[19px] px-[36px] rounded-[999px] 
bg-[rgb(28,30,83)] bg-gradient-to-br from-[rgba(28,30,83,0)] to-[rgba(13,51,23,1)] 
shadow-[0px_0px_40px_5px_rgba(40,153,66,0.75)] 
transition-all duration-300 ease-in-out 
hover:bg-[rgb(13,51,23)] hover:bg-gradient-to-br hover:from-[rgba(13,51,23,0)] hover:to-[rgba(33,133,57,1)]"
            >
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
              <div
                className="absolute top-[208px] left-[0px] w-[8px] h-[8px] rounded-full
                 border-2 border-amber-50 bg-green-600"
              ></div>
              <div
                className="absolute top-[116px] right-[0px] w-[8px] h-[8px] rounded-full
                 border-2 border-amber-50 bg-green-600"
              ></div>
              <div
                className="absolute bottom-[111px] right-[0px] w-[8px] h-[8px] rounded-full
                 border-2 border-amber-50 bg-green-600"
              ></div>
            </div>
            <div
              className="absolute top-[-91px] left-[102px] w-[458px] h-[458px] rounded-full
             border-4 border-green-500 opacity-40"
            ></div>
            <div
              className="absolute top-[-191px] left-[0px] w-[649px] h-[649px] rounded-full
             border-4 border-green-500 opacity-20 "
            ></div>
            <div className="absolute top-[-100px] left-[100px] bg-[#1b211d] inline-block py-[5px] pr-[24px] pl-[4px] rounded-[5px]">
              <div className="flex items-center gap-2">
                <FaCircle className="text-green-600 text-[7px]" />
                <h5 className="font-primary font-medium text-[13px] text-whites">
                  SPN
                </h5>
              </div>
              <h3 className="font-primary font-normal text-whites text-[30px]">
                400rpm
              </h3>
            </div>
            <div className="absolute top-0 right-0 bg-[#1b211d] inline-block py-[5px] pr-[24px] pl-[4px] rounded-[5px]">
              <div className="flex items-center gap-2">
                <FaCircle className="text-green-600 text-[7px]" />
                <h5 className="font-primary font-medium text-[13px] text-whites">
                  ACCURACY
                </h5>
              </div>
              <h3 className="font-primary font-normal text-whites text-[30px]">
                27%
              </h3>
            </div>
            <div className="absolute bottom-[-50px] left-[70px] bg-[#1b211d] inline-block py-[5px] pr-[24px] pl-[4px] rounded-[5px]">
              <h3 className="font-primary font-normal text-whites text-[30px]">
                90mph
              </h3>
              <div className="flex items-center gap-2">
                <FaCircle className="text-green-600 text-[7px]" />
                <h5 className="font-primary font-medium text-[13px] text-whites">
                  SPN
                </h5>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
