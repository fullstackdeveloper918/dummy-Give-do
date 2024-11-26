import React from 'react'


export const SupportCard = (props) => {
    const {imag,text,date} = props.item;

   
    return (
      <div className='border flex gap-7 py-4 px-4 shadow-lg w-96'>
          <img src={imag} alt='smallImg' className='w-20 h-20'></img>
          <div>
            <h1 className='text-xl font-semibold'>{text}</h1>
            <p>{date}</p>
          </div>
      </div>
    );
}


