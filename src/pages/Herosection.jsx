import React, { useState } from 'react'
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import { BiChevronsRight, BiSend, BiSkipNext } from 'react-icons/bi';

const Herosection = () => {

    const [next,setnext] = useState(1);

    return (
        <section id='home'>
            <div className=' relative'>

                <video
                    src={video2}
                    autoPlay
                    playsInline
                    className='w-full md:min-h-screen h-[100vh] object-cover'
                    muted
                    loop
                />

                <div className=' absolute top-0 translate-y-52 sm:w-1/2 z-10 sm:left-10 left-4 bg-gradient-to-t'>
                    <p className=' text-white md:text-8xl text-6xl font-extrabold uppercase tracking-normal'>build Your
                        <br />
                        <span className=' text-orange-500'>Body Shapes</span>
                        <br />
                        With <span className=' text-orange-500'>Fitness</span>
                    </p>

                    <hr className=' my-2' />
                    <p className=' text-sm text-justify'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate repellat optio consequuntur aut illum delectus, excepturi ipsum hic id autem doloremque beatae nemo corporis. Odit non culpa dolore voluptas dolor.
                    </p>

                    <div className='flex gap-4 mt-4'>
                        <button className=' bg-orange-500 px-4 py-2 font-bold text-md rounded-full flex justify-center items-center gap-2'>Get Started 
                        <span className=' text-white text-xl font-extrabold rounded-full '><BiChevronsRight/> </span> 
                        </button>
                        <button className=' bg-orange-500 px-4 py-2 font-bold text-md rounded-full flex justify-center items-center gap-2'
                        onClick={()=>setnext(2)}
                        >Next <span className=' text-white text-2xl font-extrabold rounded-full bg-black'><BiSkipNext/> </span> </button>
                    </div>

                </div>
            </div>

            <div id='service' className=' w-full min-h-screen flex flex-col justify-center mt-8 sm:w-10/12 m-auto items-center'>

                <p className=' text-4xl font-bold  text-center my-4'>Service Provide By FitnessWeb</p>

                <div className=' flex flex-wrap  gap-14 w-full justify-center items-center my-8 text-center'>
                    
                    <div className=' w-[250px] h-[250px] p-4 bg-[#323232] rounded-3xl hover:bg-gradient-to-b from-orange-500 hover:to-[#323232] transition-all duration-500 hover:scale-110 flex flex-col justify-center items-center shadow-sm transform-left'>
                        <img className=' w-14 h-14 rounded-full' src="https://th.bing.com/th?id=OIP.jrZWswM2ttsPVvCz9zhqQwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="img" />
                        <p className=' text-xl font-extrabold tracking-wider'>Lorem ipsum </p>
                        <hr className='my-2 w-full border-[1px]' />
                        <p className=' text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, distinctio.</p>
                        <button className=' bg-orange-500 px-4 py-1 text-sm mt-4 hover:bg-[#323232] '>see more</button>
                    </div>

                    <div className=' w-[250px] h-[250px] p-4 bg-[#323232] rounded-3xl hover:bg-gradient-to-b from-orange-500 hover:to-[#323232] transition-all duration-500 hover:scale-110 flex flex-col justify-center items-center shadow-sm '>
                        <img className=' w-14 h-14 rounded-full' src="https://th.bing.com/th?id=OIP.jrZWswM2ttsPVvCz9zhqQwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="img" />
                        <p className=' text-xl font-extrabold tracking-wider'>Lorem ipsum </p>
                        <hr className='my-2 w-full border-[1px]' />
                        <p className=' text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, distinctio.</p>
                        <button className=' bg-orange-500 px-4 py-1 text-sm mt-4 hover:bg-[#323232] '>see more</button>
                    </div>

                    <div className=' w-[250px] h-[250px] p-4 bg-[#323232] rounded-3xl hover:bg-gradient-to-b from-orange-500 hover:to-[#323232] transition-all duration-500 hover:scale-110 flex flex-col justify-center items-center shadow-sm transform-right'>
                        <img className=' w-14 h-14 rounded-full' src="https://th.bing.com/th?id=OIP.jrZWswM2ttsPVvCz9zhqQwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="img" />
                        <p className=' text-xl font-extrabold tracking-wider'>Lorem ipsum </p>
                        <hr className='my-2 w-full border-[1px]' />
                        <p className=' text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, distinctio.</p>
                        <button className=' bg-orange-500 px-4 py-1 text-sm mt-4 hover:bg-[#323232] '>see more</button>
                    </div>


                </div>
                <p className=' text-center text-sm'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid consequatur facilis neque eius ut voluptas tempore reiciendis deleniti? Suscipit, dicta. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error nihil magnam ipsa rerum quod possimus sint quidem aliquid temporibus! Vero fugiat harum expedita magnam accusamus. Iusto officiis, laudantium nulla quisquam pariatur eveniet qui molestiae aliquid, enim quo nemo. Doloribus, saepe.
                </p>
                <hr className=' border-[1px] w-1/2 my-4 border-orange-500' />
            </div>
        </section>
    )
}

export default Herosection
