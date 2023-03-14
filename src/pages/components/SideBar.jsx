import { useState } from 'react';
import { ModalEquipVector, ModalFixedFacility } from './';

export const SideBar = () => {
  const [activeBar, setActiveBar] = useState(true);
  return (
    <div className='flex min-h-screen w-2/12 flex-col items-center bg-blue-900'>
      <h1 className='mt-6 text-4xl font-bold text-white'>Menu</h1>
      <div className='mt-5 min-w-full border-solid border-white '>
        <div className='min-w-full'>
          <h1 className='text-center text-xl font-semibold text-white '>
            Vectors
          </h1>
          <div className='flex w-full flex-col items-center'>
            <ModalEquipVector
              activeBar={activeBar}
              setActiveBar={setActiveBar}
            />
            <ModalFixedFacility
              activeBar={activeBar}
              setActiveBar={setActiveBar}
            />
            <button className='px-18 text-white'>Section</button>
          </div>
        </div>
        <div className='mt-3'>
          <h1 className='text-center text-xl font-bold text-white'>Area</h1>
          <div className='flex flex-col'>
            <button className='px-18 text-white'>Create</button>
            {/* //? A single element will be created that creates and modifies data */}
          </div>
        </div>
        <div className='mt-3'>
          <h1 className='text-center text-xl font-bold text-white'>
            Intake Return
          </h1>
          <div className='flex flex-col'>
            <button className='px-18 text-white'>Create</button>{' '}
            {/* //? A single element will be created that creates and modifies data */}
          </div>
        </div>
      </div>
      <div className='mt-3'>
        <h1 className='text-center text-xl font-bold text-white '>Graphs</h1>
        <div className='flex flex-col'>
          <button className='text-sm text-white'>Global</button>
          <button className='text-sm text-white'>Area Q</button>
          <button className='text-sm text-white'>Intake/Return Q</button>
          <button className='text-sm text-white'>Area Relations</button>
        </div>
      </div>
      <div className=''>
        <h1 className='mt-5 text-center text-xl font-bold text-white'>Units</h1>
        <div className='flex flex-col'>
          <button className='text-sm text-white'>Airflow</button>
          <button className='text-sm text-white'>Air Velocity</button>
        </div>
      </div>
      <div className='mt-5'>
        <h1 className='text-center text-xl font-bold text-white'>Settings</h1>
        <div className='flex flex-col'>
          <button className='text-white'>Leakage</button>
        </div>
      </div>
    </div>
  );
};
