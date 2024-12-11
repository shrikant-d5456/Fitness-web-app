import React from 'react'
import { BiStar } from 'react-icons/bi'

const Story = () => {

  const arr = [
    {
      name: "Lorem ipsum ",
      star: "4",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolor repudiandae adipisci eos quae totam perferendis velit nisi? Consectetur, nobis!"
    },
    {
      name: "Lorem ipsum ",
      star: "4",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolor repudiandae adipisci eos quae totam perferendis velit nisi? Consectetur, nobis!"
    },
    {
      name: "Lorem ipsum ",
      star: "4",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolor repudiandae adipisci eos quae totam perferendis velit nisi? Consectetur, nobis!"
    },
    {
      name: "Lorem ipsum ",
      star: "4",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolor repudiandae adipisci eos quae totam perferendis velit nisi? Consectetur, nobis!"
    },
  ]

  return (
    <section className=' w-full min-h-screen flex flex-col justify-center items-center sm:mt-0 mt-8'>

      <p className=' text-5xl font-bold  text-center my-4'>Member's <span className=' text-orange-500'> Success </span> Story</p>
      <hr className=' my-4  border-[1px] border-orange-500 w-1/2' />
      <p className=' text-center mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolor repudiandae adipisci eos quae totam perferendis velit nisi? Consectetur, nobis!</p>

      <div className='sm:flex mt-8'>
        {
          arr.map((ele, ind) => (
            <div key={ind} className=' relative'>
              <img
                src="https://thumbs.dreamstime.com/b/confident-beautiful-woman-tight-abs-sportswear-against-plain-background-you-re-already-halfway-there-151207281.jpg" alt="img"
                className=' w-[300px] h-[400px] object-cover '
              />
              <div className=' absolute bottom-5 left-5 bg-[#0e0e0e99] p-2 border-l-2 border-orange-500'>
                <p className=' text-xl font-extrabold'>{ele.name}</p>
                <p className='flex gap-2 my-2'>
                  {
                  Array.from({ length: ele.star }).map((ele, index) => (
                  <p key={index}><BiStar /></p>
                  ))}</p>
                <p className=' text-sm'>{ele.desc}</p>
              </div>
            </div>
          ))
        }
      </div>




    </section>

  )
}
export default Story
