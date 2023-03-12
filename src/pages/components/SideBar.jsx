import { useState } from 'react';
import { ModalEquipVector, ModalFixedFacility } from './';

export const SideBar = () => {
  const [activeBar, setActiveBar] = useState(false);
  return (
    <div
      className={`flex  min-h-screen flex-col items-center bg-indigo-700  ${
        activeBar
          ? 'absolute w-56 shadow-2xl shadow-indigo-700 transition duration-300'
          : 'fixed w-11 transition duration-300'
      }`}>
      <button className='mt-3' onClick={() => setActiveBar(!activeBar)}>
        <div
          className={`m-1 h-1 w-8 bg-white ${
            activeBar
              ? 'translate-y-2 -rotate-45 transition duration-300'
              : 'transition duration-300'
          }`}
        />
        <div
          className={`m-1 h-1 w-8 bg-white ${
            activeBar
              ? 'opacity-0 transition duration-300'
              : 'transition duration-300'
          }`}
        />
        <div
          className={`m-1 h-1 w-8 bg-white ${
            activeBar
              ? '-translate-y-2 rotate-45 transition duration-300'
              : 'transition duration-300'
          }`}
        />
      </button>
      <h1 className='mt-6 text-4xl font-bold'>{activeBar ? 'Menu' : 'M'}</h1>
      <div className={`mt-8 h-1 bg-white ${activeBar ? 'w-48' : 'w-8'}`} />
      <div className={`mt-5 border-solid border-white ${activeBar ? '' : ''}`}>
        <div className=''>
          <h1 className='text-center text-xl font-bold '>
            {activeBar ? 'Vectors' : 'V'}
          </h1>
          <div className='flex flex-col items-center'>
            <ModalEquipVector
              activeBar={activeBar}
              setActiveBar={setActiveBar}
            />
            <ModalFixedFacility
              activeBar={activeBar}
              setActiveBar={setActiveBar}
            />
            <button className={`${activeBar ? '' : 'text-sm'}`}>
              {activeBar ? 'Section' : 'S'}
            </button>
          </div>
        </div>
        <div className='mt-3'>
          <h1 className='text-center text-xl font-bold '>
            {activeBar ? 'Area' : 'A'}
          </h1>
          <div className='flex flex-col'>
            <button className={`${activeBar ? '' : 'text-sm'}`}>
              {activeBar ? 'Create' : 'C'}
            </button>{' '}
            {/* //? A single element will be created that creates and modifies data */}
          </div>
        </div>
        <div className='mt-3'>
          <h1 className='text-center text-xl font-bold '>
            {activeBar ? 'Intake Return' : 'IR'}
          </h1>
          <div className='flex flex-col'>
            <button className={`${activeBar ? '' : 'text-sm'}`}>
              {activeBar ? 'Create' : 'C'}
            </button>{' '}
            {/* //? A single element will be created that creates and modifies data */}
          </div>
        </div>
      </div>
      <div className={`mt-8 h-1 bg-white ${activeBar ? 'w-48' : 'w-8'}`} />
      <div className='mt-3'>
        <h1 className='text-center text-xl font-bold '>
          {activeBar ? 'Graphs' : 'G'}
        </h1>
        <div className='flex flex-col'>
          <button className={`${activeBar ? '' : 'text-sm'}`}>
            {activeBar ? 'Global Q' : 'GQ'}
          </button>
          <button className={`${activeBar ? '' : 'text-sm'}`}>
            {activeBar ? 'Area Q' : 'AQ'}
          </button>
          <button className={`${activeBar ? '' : 'text-sm'}`}>
            {activeBar ? 'Intake/Return Q' : 'I/KQ'}
          </button>
          <button className={`${activeBar ? '' : 'text-sm'}`}>
            {activeBar ? 'Area Relations' : 'AR'}
          </button>
        </div>
      </div>
      <div className={`mt-8 h-1 bg-white ${activeBar ? 'w-48' : 'w-8'}`} />
      <div className=''>
        <h1 className='mt-5 text-center text-xl font-bold'>
          {activeBar ? 'Units' : 'U'}
        </h1>
        <div className='flex flex-col'>
          <button className={`${activeBar ? '' : 'text-sm'}`}>
            {activeBar ? 'Airflow' : 'A'}
          </button>
          <button className={`${activeBar ? '' : 'text-sm'}`}>
            {activeBar ? 'Air Velocity' : 'AV'}
          </button>
        </div>
      </div>
      <div className='mt-5'>
        <h1 className='text-center text-xl font-bold'>
          {activeBar ? 'Settings' : 'S'}
        </h1>
        <div className='flex flex-col'>
          <button className={`${activeBar ? '' : 'text-sm'}`}>
            {activeBar ? 'Leakage' : 'L'}
          </button>
        </div>
      </div>
    </div>
  );
};
