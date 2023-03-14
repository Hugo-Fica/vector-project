import React from 'react';
import { DraggableTable } from './components';
import { SideBar } from './components/SideBar';

export const Home = () => {
  return (
    <div className='flex max-w-full flex-row'>
      <SideBar />
      <div className='flex w-screen flex-row justify-center'>
        <div className='flex min-w-full flex-col p-5'>
          <div className='flex flex-col items-center'>
            <h1 className='mt-10 text-center text-4xl font-bold text-black'>
              Vector Calculator
            </h1>
          </div>
          <div className='flex flex-col items-end '>
            <div className='mt-10 mr-32 flex min-w-min flex-row rounded-md border border-solid border-blue-800'>
              <button className='rounded-l-md border-r-2 border-solid bg-blue-800 p-3 text-white'>
                left
              </button>
              <p className='p-3'>example</p>
              <button className='rounded-r-md border-l-2 border-solid bg-blue-800 p-3 text-white'>
                rigth
              </button>
            </div>
          </div>
          <div className=' mt-5 max-h-screen rounded-md border-2 border-solid border-blue-800'>
            <DraggableTable />
          </div>
        </div>
      </div>
    </div>
  );
};
