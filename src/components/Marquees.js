import React from 'react'
import Marquee from 'react-fast-marquee'
const obj = [
    {
        name: "Vishweshwar Mudigonda just donated",
        rate: "₹30,000",
    },
    {
        name: "Bharat Varma just donated ",
        rate: "₹22,000",
    },
    {
        name: "Vishweshwar Mudigonda just donated",
        rate: "₹30,000",
    },
    {
        name: "Bharat Varma just donated ",
        rate: "₹22,000",
    },
    {
        name: "Bharat Varma just donated ",
        rate: "₹22,000",
    },
]
export const Marquees = () => {
  return (
    <div className=''>
        <Marquee speed={150}>
            {
                obj.map((item)=>(
                   <div className='bg-red-50 text-2xl flex items-center gap-3 py-3 px-3'>
                    <span className='text-6xl pt-2'>*</span>                    
                     <span>{item.name}</span>
                     <span className='text-red-600 font-semibold'>{item.rate}</span>
                   </div>
                ))
            }
        </Marquee>
    </div>
  )
}
