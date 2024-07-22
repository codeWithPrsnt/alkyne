import React, { useEffect, useState } from 'react'
import Footer from './Footer';
import LogoWhite from './LogoWhite';
import Ellipse6 from './Ellipse6';
import Ellipse5 from './Ellipse5';

const Dashboard = () => {
    const userId = sessionStorage.getItem("user_id") || 2;
    
    const [photography, setPhotography]=useState([]);
    const [learning,setLearning]= useState([]);
    

    

    useEffect(()=>{
      const token = sessionStorage.getItem("token") || '97848e8babeb149f26a044838f1fcb6f52d60e7b';
      const fetchArticles=()=>{
        fetch('https://untitled-twkmuar27a-uc.a.run.app/api', {
            method: 'GET',
            headers: {
              'Authorization': `Token ${token}`
            }
          })
          .then(response => response.json())
          .then(data => {
            setPhotography(data.filter(item=>item.prompt==="Photography"))
            setLearning(data.filter(item=>item.prompt==="Learning"))
          })
          .catch(error => console.error('Error:', error));
          
    }
        fetchArticles();
    },[]);
    
    console.log(userId)
  return (
    <>
    <main className='bg-black flex items-center justify-center text-white'>
        <section className='w-[90%] p-[5%] '>
            <LogoWhite/>
            <h1 className='text-4xl font-[500] text-[24px] md:text-[48px] leading-[25px] md:leading-[55px] mt-[10%]'>Welcome <span className='underline'>Test</span></h1>
            <p className='mt-2'>Hope you having a good day!</p>
            <h1 className='text-4xl font-[500] text-[24px] leading-[25px] mt-16'>Photography</h1>
            <div className='w-full mt-8 h-[350px] md:h-[700px] flex flex-row overflow-scroll no-scrollbar'>
                {photography && photography.map(item=><div className='mr-8' key={item.id}>
                        <img className='rounded-[20px] min-w-[212.5px]  md:min-w-[425px] h-[350px] md:h-[700px]' src={item.image_url} alt={item.title}/>
                </div>)}

            </div>
            <div className='mt-6 flex flex-row justify-center'>
                    <Ellipse5/>
                    <Ellipse6/>
                    <Ellipse6/>
            </div>
            <h1 className='text-4xl font-[500] text-[24px] leading-[25px] mt-16'>Learning</h1>
            <div className='w-full mt-8 h-[350px] md:h-[700px] flex flex-row overflow-scroll no-scrollbar'>
                {learning && learning.map(item=><div className='mr-8'  key={item.id}>
                        <img className='rounded-[20px] min-w-[212.5px] md:min-w-[425px] h-[350px] md:h-[700px]' src={item.image_url} alt={item.title}/>
                </div>)}

            </div>
            <div className='mt-6 flex flex-row justify-center'>
                    <Ellipse5/>
                    <Ellipse6/>
                    <Ellipse6/>
            </div>
            

        </section>
    </main>
    <Footer/>
    </>
  )
}

export default Dashboard