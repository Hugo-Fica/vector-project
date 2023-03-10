

export const Create = ({ active, setActive }) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-3xl font-bold'>Create an account</h1>
      <div className='flex flex-col m-8'>
        <div className='flex flex-col'>
          <label className='text-lg'>Your full name</label>
          <input className='mt-3 text-black p-1 font-semibold rounded-md border-solid border-red-600 border-2' placeholder='userVector' type={'text'} />
          <p className='text-red-600 '>This fiel is required*</p>
        </div>
        <div className='flex flex-col'>
          <label className='text-lg'>Your username</label>
          <input className='mt-3 text-black p-1 font-semibold rounded-md border-solid border-red-600 border-2' placeholder='userVector' type={'text'} />
          <p className='text-red-600 '>This fiel is required*</p>
        </div>
        <div className='flex flex-col'>
          <label className='text-lg'>Your email</label>
          <input className='mt-3 text-black p-1 font-semibold rounded-md border-solid border-red-600 border-2' placeholder='userVector' type={'email'} />
          <p className='text-red-600 '>This fiel is required*</p>
        </div>
        <div className='flex flex-col'>
          <label className='text-lg'>Your password</label>
          <input className='mt-3 text-black p-1 font-semibold rounded-md border-solid border-red-600 border-2' placeholder='Password' type={'password'} />
          <p className='text-red-600'>This fiel is required*</p>
        </div>
      </div>
      <button className='bg-violet-800 rounded-md w-40 hover:bg-violet-900 font-medium'>Create account</button>
      <div className='flex flex-r mt-3 ' >
        <p className='text-white opacity-70 m-1'>do you have an account?
          <button className='text-violet-600 m-1' onClick={() => setActive(!active)}>Sign here</button>
        </p>
      </div>
    </div>
  )
}
