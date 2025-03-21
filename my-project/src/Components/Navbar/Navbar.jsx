import React from 'react'
import Container from '../Container/Container'
import logo from "../../assets/logo icon.png"

const Navbar = () => {
  return (
    <div className='absolute w-full px-[64px] py-[32px] '>
        <div className="absolute top-[-80px] right-[20%] shadow-[0px_0px_145px_73px_rgba(40,153,66,0.75)] 
        w-[637px] h-[54px] bg-[#28994400] "
        ></div>
        <div className="absolute top-[-100px] left-[15%] shadow-[0px_0px_145px_73px_rgba(40,153,66,0.75)] 
        w-[294px] h-[50px]  bg-[#28994400] rotate-[7.18deg] "
        ></div>
        <Container className="bg-[#262626] flex py-[16px] items-center">
          <div className='w-[20%] flex pl-[16px]'>
            <img src={logo} alt="" />
            <h2 className='font-primary font-semibold text-[32px] text-4xl bg-gradient-to-r
             from-white to-gray-300 text-transparent bg-clip-text ml-[18px]'>Forecaster</h2>
          </div>
          <div className='w-[80%]'>
            <ul className='flex justify-end font-primary font-normal text-[16px] text-[#ffffff]'>
              <li className='mr-[96px]'>Features</li>
              <li className='mr-[96px]'>Modes</li>
              <li className='mr-[96px]'>Membership</li>
              <li className='mr-[24px]'>FAQ</li>
            </ul>
          </div>
        </Container>
    </div>
  )
}

export default Navbar