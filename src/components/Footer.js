import React from 'react'
import Facebook from './Facebook'
import Instagram from './Instagram'
import Twitter from './Twitter'
import Twitch from './Twitch'
import Youtube from './Youtube'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer className='bg-black p-[10%]'>
        <div className='flex flex-row justify-between w-[300px] md:w-[600px]'>
            <Facebook/>
            <Instagram/>
            <Twitter/>
            <Twitch/>
            <Youtube/>
        </div>
        <div className='flex flex-row md:flex-col text-white mt-9'>
          <div className='flex flex-col md:flex-row justify-between w-1/2 md:w-full'>
              <Link to="" className='font-[600] text-[12px] leading-[25px] md:text-[24px] md:leading-[50px]'>Privacy Policy</Link>
              <Link to="" className='font-[600] text-[12px] leading-[25px] md:text-[24px] md:leading-[50px]'>Cookie preferences</Link>
              <Link to="" className='font-[600] text-[12px] leading-[25px] md:text-[24px] md:leading-[50px]'>Corporate Information</Link>
              <Link to="" className='font-[600] text-[12px] leading-[25px] md:text-[24px] md:leading-[50px]'>Contact Us</Link>
          </div>
          <div className='flex flex-col md:flex-row justify-between w-1/2 md:w-full'>
              <Link to="" className='font-[600] text-[12px] leading-[25px] md:text-[24px] md:leading-[50px]'>Privacy Policy</Link>
              <Link to="" className='font-[600] text-[12px] leading-[25px] md:text-[24px] md:leading-[50px]'>Cookie preferences</Link>
              <Link to="" className='font-[600] text-[12px] leading-[25px] md:text-[24px] md:leading-[50px]'>Corporate Information</Link>
              <Link to="" className='font-[600] text-[12px] leading-[25px] md:text-[24px] md:leading-[50px]'>Contact Us</Link>
          
          </div>
        </div>
        <div className='mt-16 text-white'>&copy; Alkyne Test</div>

    </footer>
  )
}

export default Footer