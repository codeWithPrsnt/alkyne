import React, { useState } from 'react'
import Footer from './Footer'
import Logo from './Logo'
import { Link, useNavigate } from 'react-router-dom'

const UserName = () => {
    const [email,setEmail]=useState('');
    const navigate = useNavigate()
    const handleClick=()=>{
        navigate("/password?email="+email)
    }
  return (
    <>
    <main className='bg-[#c8c8c8] flex items-center justify-center'>
        <section className='w-[90%] mt-[5%] mb-[5%] p-[5%] bg-white rounded-[50px]'>
            <Logo/>
            <div className='flex flex-col md:flex-row'>
                <div className='md:w-1/2 flex-1'>
                    <div className='w-3/4 md:w-5/6'>
                    <div className='mt-[10%] font-[400] text-[12px] md:text-[24px] leading-6 md:leading-[50px] '>
                        STEP 1
                    </div>
                    <h1 className='text-4xl font-[500] text-[24px] md:text-[48px] leading-6 md:leading-[55px] w-3/4 md:w-full'>
                        Enter your email address to continue
                    </h1>
                    <div className='mt-3 font-[400] text-[12px] md:text-[24px] leading-6 md:leading-[50px]'>
                    Log in to your account. If you don’t have one, you will be prompted to create one.
                    </div>
                    </div>
                </div>
                <div className='md:w-1/2 flex-1'>
                    <input placeholder='Email' onChange={(e)=>setEmail(e.target.value)} value={email} className='w-full mt-[10%] h-[50px] md:h-[100px] rounded-[5px] border-[#939393] border-[1px] font-[500] text-[24px] leading-[50px] pl-12 pr-12 '/>
                    <div className='justify-between flex mt-5 mb-24 '>
                        <div className='items-center my-auto '><Link className='font-[400] text-[10px] leading-6 text-[#4E4E4E] underline' to="">Already have account?</Link></div>
                        <button onClick={handleClick} className='bg-black text-white rounded-[5px] py-[10px] px-[20px] md:rounded-[10px] md:px-[40px] md:py-[20px] '>Continue</button>
                    </div>

                </div>
                
                

            </div>
        </section>
    </main>
    <Footer/>
    </>
  )
}

export default UserName