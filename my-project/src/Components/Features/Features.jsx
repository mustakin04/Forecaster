import React from "react";
import Container from "../Container/Container";
import femel from "../../assets/female driver.jpg";
import Headphone from "../../assets/Headphones.jpg";
import phone from "../../assets/Mobile-mockup.png";

const Features = () => {
  return (
    <div className=" bg-[#1a1a1a] pt-[32px] pb-[64px]">
      <Container>
        <h2 className="font-primary font-semibold text-[64px] text-whites mb-[24px]">
          Features
        </h2>
        <div className="flex justify-between">
          <div
            class="bg-cover bg-center bg-no-repeat object-cover w-[533px] h-[800px] pt-[24px] pl-[24px] rounded-[8px]"
            style={{ backgroundImage: `url(${femel})` }}
          >
            <h3 className="font-primary font-normal text-whites text-[40px] w-[378px]">
              Instant Shot Breakdown
            </h3>
            <p className="font-primary font-normal text-whites text-[18px] w-[378px] mt-[24px]">
              AI-driven insights like "Wind at 12 mph,trajectory optimal for
              birdies.
            </p>
          </div>
          <div>
            <div
              className="bg-cover bg-no-repeat bg-center w-[755px] h-[388px] rounded-[8px]"
              style={{ backgroundImage: `url(${Headphone})` }}
            >
              <h3 className="font-primary font-normal text-whites text-[40px] w-[346px] pt-[111px] pl-[25px]">
                Real-time Audio-FeedBack
              </h3>
              <p className="font-primary font-normal text-whites text-[18px] w-[337px] mt-[24px] pl-[25px]">
                Live feedback through your Bluetooth earbuds,tailored to your
                preferred tone: supportive,neutral,or downright snarky.
              </p>
            </div>
            <div className="bg-[#000000] flex justify-evenly mt-[54px] rounded-[8px]">
              <div className="w-[366px] mt-[20px] ">
                <img src={phone} alt="" />
              </div>
              <div className="mt-[118px]">
                <h4 className="font-primary font-normal text-whites text-[40px] ">
                  Death By Data
                </h4>
                <p className="font-primary font-normal text-whites text-[18px] w-[285px] mt-[24px]">
                  Every swing,slice,and missed putt is stored in the app for
                  review ,so you can relive your worst shotd whenenver you wnat
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Features;
