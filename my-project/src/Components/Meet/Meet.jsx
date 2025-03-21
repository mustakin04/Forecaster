import React from "react";
import Container from "../Container/Container";
import { FaCircle } from "react-icons/fa";

const Meet = () => {
  return (
    <div className="bg-[#000000] py-[96px]">
      <Container className="flex justify-between items-start border-t-2 border-gray-500 pt-[20px]">
       <div className=" ">
        <h3 className="font-primary font-normal text-whites text-[30px] w-[275px]">
          Meet Forecaster.
        </h3>
       </div>
       <div className="mr-[25px]">
       <FaCircle className="text-3xl text-whites"/>
       </div>
        <div>
        <p className="font-primary font-normal text-whites text-[30px] ">
          The smart golf ball that delivers real-time audio feedback to your
          Bluetooth earbuds and saves every swing's data in the app for future
          in the app for future analyis
        </p>
        </div>
      </Container>
    </div>
  );
};

export default Meet;
