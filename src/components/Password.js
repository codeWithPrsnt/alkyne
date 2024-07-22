import React, { useState } from 'react'
import Logo from './Logo'
import Footer from './Footer'
import Eye from './Eye'
import { useLocation, useNavigate } from 'react-router-dom';

const Password = () => {
    const navigate = useNavigate()
    const [show , setShow]=useState(false)
    const [password,setPassword]=useState('')
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const paramValue = queryParams.get('email');
    console.log(paramValue)
    const url = 'https://untitled-twkmuar27a-uc.a.run.app/api/login/';

    const handleClick=async()=>{
        let response = await fetch(url, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": "testadmin",
                "password": "testadmin"
            }) 
        });
        let data = await response.json();
        sessionStorage.setItem('token',data.token);
        sessionStorage.setItem('user_id',data.user_id)
        navigate("/dashboard")
        console.log(data,password)
    }
    
  return (
    <>
    <main className='bg-[#c8c8c8] flex items-center justify-center'>
        <section className='w-[90%] mt-[5%] mb-[5%] p-[5%] bg-white rounded-[50px]'>
            <Logo/>
            <div className='flex flex-col md:flex-row'>
                <div className='md:w-1/2 flex-1'>
                    <div className='w-3/4 md:w-5/6'>
                    <div className='mt-[10%] font-[400] text-[12px] md:text-[24px] leading-[25px] md:leading-[50px] '>
                        STEP 2
                    </div>
                    <h1 className='text-4xl font-[500] text-[24px] md:text-[48px] leading-[25px] md:leading-[55px] w-3/4 md:w-full'>
                        Create an account to continue
                    </h1>
                    <div className='mt-3 font-[400] text-[12px] md:text-[24px] leading-[25px] md:leading-[50px]'>
                    You’ll be able to log in to Dingoo with this email address and password
                    </div>
                    </div>
                </div>
                <div className='md:w-1/2 flex-1'>
                    <label htmlFor='password' className='mt-[10%] font=[400] text-[12px] leading-[23.5px] md:text-[24px] md:leading-[47px]'>Enter a password to create your account with </label>
                    <div className='flex flex-row items-center border-[0.5px] md:border-[1px] rounded-[2.5px] md:rounded-[5px] border-[#939393] mt-[10px]'>
                        <input id='password' name="password" type={show?'text':'password'} onChange={(e)=>setPassword(e.target.value)} placeholder='Choose a password' className=' text-[#636363] w-full  h-[50px] md:h-[100px] focus:outline-none focus:border-none   font-[500] text-[24px] leading-[50px] pl-12 pr-4 border-0  '/>
                        <div className='pr-16' onClick={()=>setShow(!show)}><Eye/></div>
                    </div>
                    <div className='justify-between flex mt-6  '>
                        <div className='items-center my-auto md:w-[50%] w-2/3 font-[400] text-[10px] leading-[15px] text-[#4E4E4E] md:text-[20px] md:leading-[30px]'>Use a minimum of 6 characters (case sensitive) with at least one number or special character.</div>
                        <button  onClick={handleClick} className='bg-black text-white rounded-[5px] py-[10px] px-[20px] md:rounded-[10px] md:px-[40px] md:py-[20px] md:text-[24px] text-[12px] md:leading-[50px] leading-[25px]'>Agree & Continue</button>
                    </div>

                </div>
                              

            </div>
            <div className=' mb-10 mt-10'><span className='w-full font-[300] text-[7px] leading-[15px] md:text-[14px] md:leading-[30px]'>
                    Dingoo will use your data to personalise and improve your Dingoo experience and to send you information about Dingoo. You can change your communication preferences anytime. We may use your data as described in our Privacy Policy, including sharing it with The Test of Companies. By clicking "Agree & Continue", you agree to our Subscriber Agreement and acknowledge that you have read our Privacy Policy and Collection Statement.
                </span></div>
        </section>
    </main>
    <Footer/>
    </>
  )
}

export default Password