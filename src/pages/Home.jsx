import React from 'react';
import { DraggableTable } from './components';

export const Home = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col items-center'>
        <h1 className='mt-10 text-center text-4xl font-bold text-white'>
          Vector Calculator
        </h1>
        <div className='mt-3 h-1 w-96 bg-white' />
      </div>
      <div className='flex flex-col items-end '>
        <div className='mt-10 mr-32 flex flex-row rounded-md border border-solid'>
          <button className='rounded-l-md border-r-2 border-solid bg-violet-800 p-3'>
            left
          </button>
          <p className='p-3'>example</p>
          <button className='rounded-r-md border-l-2 border-solid bg-violet-800 p-3'>
            rigth
          </button>
        </div>
      </div>
      <div className='ml-12 mr-4 mt-5 max-h-screen min-w-max rounded-md border-2 border-solid border-violet-800'>
        <DraggableTable />
      </div>
    </div>
  );
};
