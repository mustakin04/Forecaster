import React, { useState } from "react";
import Container from "../Container/Container";

function Frequently() {
    const [show,setShow]=useState(false)
    const [shows,setShows]=useState(false)
    // const handleClick=()=>{
    //      setShow(!true)
    // }
  return (
    <div className="bg-[#1a1a1a] w-full pt-[64px] py-[94px]">
      <Container>
        <div className="flex">
          <div className="w-1/2">
            <h3 className="font-primary font-semibold text-whites text-[96px] w-[644px]">
              Frequently Asked Forecasted Questions
            </h3>
          </div>
          <div className="w-1/2">
            <div className="flex justify-between bg-[#000000] py-[25px] px-[15px] 
            rounded-[8px] font-primary font-semibold text-[24px] text-whites">
              <p className="">What happens if my ball gets destroyed?</p>
              <h6 onClick={()=>setShow(!show)}>+</h6>
            </div>
            {
                show&& (
                    <h4 className=" bg-[#000000] pb-[25px] px-[15px] 
                    rounded-[8px] font-primary font-semibold text-[18px] text-whites">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
                consectetur aut dignissimos cum beatae maiores quia iste saepe
                dolorem, sint temporibus! Voluptate nobis, reprehenderit animi
                aperiam itaque modi illo incidunt.
              </h4>
                )
              }
            <div className="flex justify-between bg-[#000000] py-[25px] px-[15px] rounded-[8px] 
            mt-[16px] font-primary font-semibold text-[24px] text-whites">
              <p className="">What happens if my ball gets destroyed?</p>
              <h6 onClick={()=>setShows(!shows)}>+</h6>
            </div>
            {
                shows&& (
                    <h4 className=" bg-[#000000] pb-[25px] px-[15px] 
                    rounded-[8px] font-primary font-semibold text-[18px] text-whites">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
                consectetur aut dignissimos cum beatae maiores quia iste saepe
                dolorem, sint temporibus! Voluptate nobis, reprehenderit animi
                aperiam itaque modi illo incidunt.
              </h4>
                )
              }
            <div className="flex justify-between bg-[#000000] py-[25px] px-[15px] rounded-[8px] 
            mt-[16px] font-primary font-semibold text-[24px] text-whites">
              <p className="">What happens if my ball gets destroyed?</p>
              <h6>+</h6>
            </div>
            <div className="flex justify-between bg-[#000000] py-[25px] px-[15px] rounded-[8px]
             mt-[16px] font-primary font-semibold text-[24px] text-whites">
              <p className="">What happens if my ball gets destroyed?</p>
              <h6>+</h6>
            </div>
            <div className="flex justify-between bg-[#000000] py-[25px] px-[15px] rounded-[8px]
             mt-[16px] font-primary font-semibold text-[24px] text-whites">
              <p className="">What happens if my ball gets destroyed?</p>
              <h6>+</h6>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Frequently;
