export const Login = (active, setActive) => {
  return (
    <div>
      <h1 className='text-3xl font-bold'>Welcome to Vectors</h1>
      <div className='flex flex-col items-center justify-center'>
        <div className='flex flex-col m-8'>
          <div className='flex flex-col'>
            <label className='text-lg'>Your username</label>
            <input
              className='mt-3 text-black p-1 font-semibold rounded-md border-solid border-red-600 border-2'
              placeholder='userVector'
              type={'text'}
            />
            <p className='text-red-600 '>This fiel is required*</p>
          </div>
          <div className='flex flex-col'>
            <label className='text-lg'>Your password</label>
            <input
              className='mt-3 text-black p-1 font-semibold rounded-md border-solid border-red-600 border-2'
              placeholder='Password'
              type={'password'}
            />
            <p className='text-red-600'>This fiel is required*</p>
          </div>
        </div>
        <button className='bg-violet-800 rounded-md w-24 hover:bg-violet-900 font-medium'>
          LogIn
        </button>
        <div className='flex flex-r mt-3 '>
          <p className='text-white opacity-70 m-1'>
            dont have an account?
            <button
              className='text-violet-600 m-1'
              onClick={() => setActive(!active)}>
              Create here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};
