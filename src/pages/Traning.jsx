import React from 'react'
import { BiCoffee } from 'react-icons/bi'

const Traning = () => {
  return (
    <section id='contact' className=' w-full min-h-screen sm:flex justify-center items-center sm:mt-0 mt-10'>
      <div className=' sm:w-1/2 sm:pl-14 pl-5'>
        <p className=' text-white sm:text-8xl text-6xl font-extrabold uppercase tracking-normal'>
          Our <span className=' text-orange-500'>Trainers</span>
        </p>
        <hr className=' my-2' />
        <p className=' text-sm text-justify'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate repellat optio consequuntur aut illum delectus, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, laborum? excepturi ipsum hic id autem doloremque beatae nemo corporis. Odit non culpa dolore voluptas dolor.
        </p>
        <button className=' bg-orange-500 px-4 py-2 font-bold text-md rounded-full flex justify-center items-center gap-2 mt-4'>Contact Now 
        <span className=' text-white text-2xl font-extrabold rounded-full '><BiCoffee/> </span> 
        </button>
      </div>

      <div className=' sm:flex sm:gap-4 sm:w-1/2 p-8'>
        <div className=' relative'>
          <img 
          src="https://img.freepik.com/premium-photo/portrait-personal-trainer-gym-with-clipboards-his-hands_600776-26337.jpg" alt="img"
          className=' w-[300px] h-[400px] object-cover rounded-3xl shadow-lg shadow-white'
          />
          <div className=' absolute bottom-14 left-10'>
            <p className=' text-xl font-extrabold'>Trainer 1</p>
            <p className=' text-lg'>Lorem, ipsum.</p>
          </div>
        </div>
        <div className=' relative'>
        <img 
          src="https://thumbs.dreamstime.com/b/confident-beautiful-woman-tight-abs-sportswear-against-plain-background-you-re-already-halfway-there-151207281.jpg" alt="img"
          className=' w-[300px] h-[400px] object-cover rounded-3xl mt-8 shadow-lg shadow-white'
          />
          <div className=' absolute bottom-5 left-10'>
            <p className=' text-xl font-extrabold'>Trainer 2</p>
            <p className=' text-lg'>Lorem, ipsum.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Traning
