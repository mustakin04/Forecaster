import React from 'react'
import Container from '../Container/Container'
import logo from "../../assets/logo icon.png"

const Navbar = () => {
  return (
    <div>
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