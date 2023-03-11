import React from 'react'

export const Home = () => {
    return (
        <div className='flex flex-col' >
            <div className='flex flex-col items-center'>
                <h1 className='text-white mt-10 font-bold text-4xl text-center'>Vector Calculator</h1>
                <div className='bg-white h-1 w-96 mt-3' />
            </div>
            <div className='flex flex-col items-end '>
                <div className='flex flex-row border border-solid rounded-md mt-10 mr-32'>
                    <button className='border-r-2 border-solid p-3 bg-violet-800 rounded-l-md'>left</button>
                    <p className='p-3'>example</p>
                    <button className='border-l-2 border-solid p-3 bg-violet-800 rounded-r-md'>rigth</button>
                </div>
            </div>
            <div className='border-2 rounded-md border-solid border-violet-800 max-h-screen min-w-max ml-12 mr-4 mt-5'>
            </div>
        </div>
    );
}
