import React, { useState } from 'react';
import StringInput from './StringInput';
import IntInput from './IntInput';

const Form = () => {
  const [activeCard, setActiveCard] = useState(1);

  const handlePrevCard = () => {
    setActiveCard(prev => (prev === 1 ? 1 : --prev));
  };

  const handleNextCard = () => {
    setActiveCard(prev => (prev === 3 ? 3 : ++prev));
  };

  const handleSubmit = (e)=>{e.preventDefault()}

  return (
    <form  className='w-3/4 h-4/6 py-12 px-12 outline-4 outline-teal-400 outline rounded-lg flex flex-col items-center' onSubmit={handleSubmit}>
      <div className='w-full flex justify-between items-center gap-2 ' >
        <button className='text-2xl' onClick={handlePrevCard}>&lt;</button>
        <div>{activeCard}/3</div>
        <button className='text-2xl' onClick={handleNextCard}>&gt;</button>
      </div>
      {/* Display the current active card */}
      {activeCard === 1 && <StringInput label="Name" maxLength={20} placeholder="John Doe"/>}
      {activeCard === 2 && <StringInput label="Passenger Id" maxLength={6} placeholder="AF2011"/>}
      {activeCard === 3 && <IntInput min={1} max={3} label="PClass"/>}

      <button typeof='submit' className='bg-teal-400 w-1/2 rounded-lg px-12 py-2 hover:bg-teal-500'>Submit</button>
    </form>
  );
};

export default Form;
