import { useState } from 'react';

export const SideBar = () => {
  const [activeBar, setActiveBar] = useState(false);
  return (
    <div
      className={`bg-indigo-700  min-h-screen flex flex-col items-center  ${
        activeBar
          ? 'w-56 absolute shadow-2xl shadow-indigo-700 transition duration-300'
          : 'w-11 fixed transition duration-300'
      }`}>
      <button
        className='mt-3'
        onClick={() => setActiveBar(!activeBar)}>
        <div
          className={`bg-white w-8 h-1 m-1 ${
            activeBar
              ? '-rotate-45 translate-y-2 transition duration-300'
              : 'transition duration-300'
          }`}
        />
        <div
          className={`bg-white w-8 h-1 m-1 ${
            activeBar
              ? 'opacity-0 transition duration-300'
              : 'transition duration-300'
          }`}
        />
        <div
          className={`bg-white w-8 h-1 m-1 ${
            activeBar
              ? 'rotate-45 -translate-y-2 transition duration-300'
              : 'transition duration-300'
          }`}
        />
      </button>
      <h1 className='text-4xl font-bold mt-6'>{activeBar ? 'Menu' : 'M'}</h1>
      <div className={`h-1 bg-white mt-8 ${activeBar ? 'w-48' : 'w-8'}`} />
      <div className={`mt-5 border-solid border-white ${activeBar ? '' : ''}`}>
        <div className=''>
          <h1 className='text-xl text-center font-bold '>
            {activeBar ? 'Vectors' : 'V'}
          </h1>
          <div className='flex flex-col items-center'>
            {/* <ModalEquipVector
                            activeBar={activeBar}
                            setActiveBar={setActiveBar}
                        />
                        <ModalFixedFacility
                            activeBar={activeBar}
                            setActiveBar={setActiveBar}
                        /> */}
            <button className={`${activeBar ? '' : 'text-sm'}`}>
              {activeBar ? 'Section' : 'S'}
            </button>
          </div>
        </div>
        <div className='mt-3'>
          <h1 className='text-xl text-center font-bold '>
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
          <h1 className='text-xl text-center font-bold '>
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
      <div className={`h-1 bg-white mt-8 ${activeBar ? 'w-48' : 'w-8'}`} />
      <div className='mt-3'>
        <h1 className='text-xl text-center font-bold '>
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
      <div className={`h-1 bg-white mt-8 ${activeBar ? 'w-48' : 'w-8'}`} />
      <div className=''>
        <h1 className='text-xl text-center font-bold mt-5'>
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
        <h1 className='text-xl text-center font-bold'>
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
