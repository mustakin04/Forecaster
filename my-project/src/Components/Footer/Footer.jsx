import React from 'react'
import Container from '../Container/Container'
import logo from "../../assets/logo icon(2).png"
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";


const Footer = () => {
  return (
    <div className='py-[64px] bg-[#000000]'>
        <Container >
            <div className='flex justify-between'>
                <img src={logo} alt="" />
                <h3 className='font-primary font-normal text-white text-[204px]'>Forecaster</h3>
            </div>
            <div className=' flex justify-between bg-[#262626] mt-[64px] rounded-[8px] px-[16px] py-[16px]'>
                <div className='flex gap-3' >
                <FaInstagram className='text-white text-2xl'/>
                <FaXTwitter className='text-white text-2xl'/>
                <CiYoutube className='text-white text-2xl' />
                </div>
                <div  className='font-primary font-normal text-white text-[16px]'>
                    @2025 Flux Academy
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Footer