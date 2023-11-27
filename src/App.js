import React from 'react'
// import { IoPerson } from "react-icons/io5";

export default function App() {
  return (
    <div className='bg-indigo-400 w-2/3  text-center mt-10 ml-auto mr-auto p-20'>
    <h1 className='font-black text-2xl'>TIPTOP CALC</h1>
       <section className=' bg-slate-200 flex justify-between '>
       <from className=' flex flex-col justify-start border-2 rounded w-2/4 mt-5 pl-10 pb-10 pt-10'>
        <label className='text-left'>Bill</label>
        <input type='text' placeholder='$' className='bg-gray-100 border-2 border-gray-400 rounded-lg ' />
        <label className='text-left'>Select Tip % </label>
        <div className='grid grid-cols-3 grid-rows-2 '>
        <input 
        onClick={
          (e) => {
            e.target.value = 15;
          }
        }
        
        type='submit' value='5%' className='border-2 rounded-lg bg-indigo-500 text-white '/>
        <input type='submit' value='10%' className='border-2 rounded-lg bg-indigo-500 text-white '/>
        <input type='submit' value='15%' className='border-2 rounded-lg bg-indigo-500 text-white '/>
        <input type='submit' value='20%' className='border-2 rounded-lg bg-indigo-500 text-white '/>
        <input type='submit' value='50%' className='border-2 rounded-lg bg-indigo-500 text-white '/>
        <input type='submit' value='CUSTOM' className='border-2 rounded-lg bg-white text-indigo-500'/>
        </div>
        <label className='text-left'>Number of people</label>
        <input type='text' placeholder='🙍' className='bg-gray-100 border-2 border-gray-400 rounded-lg' />
       </from>
        <div className='bg-indigo-500 w-1/3 m-8'>
        <p className='text-white text-left mt-2'>Tip Amount  </p>
        <p className='text-white text-left mb-5'>/person</p>

        <p className='text-white text-left '> Total</p>
        <p className='text-white text-left'>/person</p>
        <br></br>
        <button type='reset' className='bg-white w-2/3 mt-8'>Reset</button>
        </div>
       </section>

    </div>
  )
}
