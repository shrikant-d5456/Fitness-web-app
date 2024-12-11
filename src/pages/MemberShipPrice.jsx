import React from 'react'

const MemberShipPrice = () => {
  return (
    <section>
      <div className=' w-full min-h-screen flex flex-col justify-center sm:w-10/12 m-auto items-center'>
        <p className=' text-5xl font-bold  text-center my-4'>Membership Pricing</p>
        <hr className=' my-4  border-[1px] border-orange-500 w-1/2' />
        <p className=' text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolor repudiandae adipisci eos quae totam perferendis velit nisi? Consectetur, nobis!</p>
        
      <div className=' sm:flex gap-8'>
      
      <div className=' p-4 rounded-3xl bg-[#3f3e3e99] flex flex-col justify-center items-center shadow-black shadow-xl gap-4 w-72  mt-14'>
       <p className=' bg-black px-4 py-2 text-sm font-bold pb-2 rounded-full w-fit '>Day</p>
       <p className=' text-sm'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sint eligendi exercitationem minima provident voluptate expedita neque maiores quos quas.</p>
       <p className=' text-xl font-bold'>Rs 150 </p>
       <hr className=' my-2  border-[1px] border-orange-500 w-full rotate-6' />
       <div className=' font-semibold flex flex-col gap-2 justify-start items-start'>
       <p>✓ Lorem ipsum dolor sit.</p>
       <p>✓ Lorem ipsum dolor sit.</p>
       <p>✓ Lorem ipsum dolor sit.</p>
       </div>
       <button className=' bg-orange-500 px-4 py-2 rounded-full uppercase font-extrabold text-sm mt-4 hover:bg-[#323232] '>Join now</button>
     </div>

     <div className=' p-4 rounded-3xl bg-[#29292999] flex flex-col justify-center items-center shadow-black shadow-xl gap-4 w-72  mt-8'>
        <p className=' bg-black px-4 py-2 text-sm font-bold pb-2 rounded-full w-fit '>Year</p>
        <p className=' text-sm'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sint eligendi exercitationem minima provident voluptate expedita neque maiores quos quas.</p>
        <p className=' text-xl font-bold'>Rs 22000 </p>
        <hr className=' my-2  border-[1px] border-orange-500 w-full rotate-6' />
        <div className=' font-semibold flex flex-col gap-2 justify-start items-start'>
        <p>✓ Lorem ipsum dolor sit.</p>
        <p>✓ Lorem ipsum dolor sit.</p>
        <p>✓ Lorem ipsum dolor sit.</p>
        </div>
        <button className=' bg-orange-500 px-4 py-2 rounded-full uppercase font-extrabold text-sm mt-4 hover:bg-[#323232] '>Join now</button>
      </div>

      <div className=' p-4 rounded-3xl bg-[#3f3e3e99] flex flex-col justify-center items-center shadow-black shadow-xl gap-4 w-72  mt-14'>
        <p className=' bg-black px-4 py-2 text-sm font-bold pb-2 rounded-full w-fit '>Month</p>
        <p className=' text-sm'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sint eligendi exercitationem minima provident voluptate expedita neque maiores quos quas.</p>
        <p className=' text-xl font-bold'>Rs 4200 </p>
        <hr className=' my-2  border-[1px] border-orange-500 w-full rotate-6' />
        <div className=' font-semibold flex flex-col gap-2 justify-start items-start'>
        <p>✓ Lorem ipsum dolor sit.</p>
        <p>✓ Lorem ipsum dolor sit.</p>
        <p>✓ Lorem ipsum dolor sit.</p>
        </div>
        <button className=' bg-orange-500 px-4 py-2 rounded-full uppercase font-extrabold mt-4 hover:bg-[#323232] '>Join now</button>
      </div>
      </div>
      </div>     
    </section>
  )
}

export default MemberShipPrice
