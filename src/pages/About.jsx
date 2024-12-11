import React, { useState } from 'react'
import video1 from "../assets/video1.mp4"
import { BiChevronRight, BiChevronsRight, BiSend } from 'react-icons/bi';

const About = () => {

  const [index,setIndex] = useState(0);

  const arr = [
    {
      star:"1",
      heading:"lorem lorem",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, qui!"
    },
    {
      star:"2",
      heading:"lorem lorem",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, qui!"
    },
    {
      star:"3",
      heading:"lorem lorem",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, qui!"
    },
    {
      star:"4",
      heading:"lorem lorem",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, qui!"
    },
  ];

  const onClickNext = ()=>{
    console.log(index);
    console.log(arr.length)
    if(index>=arr.length){
      setIndex(0);
    }
    else{
      setIndex(index+1)
    }
  }

  return (
    <div id='about' className=' min-h-[80vh] rounded-3xl overflow-hidden '>
      <div className='relative'>
        <video
          src={video1}
          autoPlay
          playsInline
          className='w-full min-h-[80vh] object-cover rounded-3xl shadow-white shadow-2xl'
          muted
          loop
        />
         <div className=' absolute top-0 sm:translate-y-44 translate-y-20 sm:w-1/2 z-10 sm:left-10 left-4 bg-gradient-to-t'>
                    <p className=' text-white sm:text-8xl text-6xl font-extrabold uppercase tracking-normal'>
                    About Us
                    </p>

                    <hr className=' my-2' />
                    <p className=' text-sm text-justify'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate repellat optio consequuntur aut illum delectus, excepturi ipsum hic id autem doloremque beatae nemo corporis. Odit non culpa dolore voluptas dolor.
                    </p>

                    <div className='flex gap-4 mt-4'>
                        <button className=' bg-orange-500 px-4 py-2 font-bold text-md rounded-full flex justify-center items-center gap-2'>Get Started 
                        <span className=' text-white text-2xl font-extrabold rounded-full '><BiChevronsRight/> </span> 
                        </button>
                        <button className=' bg-orange-500 px-4 py-2 font-bold text-md rounded-full flex justify-center items-center gap-2'
                        onClick={()=>setnext(2)}
                        >See More<span className=' text-white text-2xl font-extrabold rounded-full '><BiChevronsRight/> </span>  </button>
                    </div>

                    <div className='flex w-full mt-8'>
                      {arr.splice(index,1).map((ele,ind)=>(
                        <div key={ind} className='w-[300px] border-2 border-orange-500 p-4 rounded-3xl '>
                        <p>{ele.star}</p>
                        <p className=' text-orange-500 font-bold text-xl'> {ele.heading}</p>
                        <hr className=' my-2' />
                        <p>{ele.desc}</p>
                      </div>
                      ))}
                    </div>
                        <button onClick={onClickNext} className=' bg-orange-500 font-extrabold mt-4 rounded-full text-4xl'><BiChevronRight/></button>
                </div>
      </div>
    </div>
  )
}

export default About
