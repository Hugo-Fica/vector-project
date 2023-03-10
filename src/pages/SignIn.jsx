import { useState } from 'react';
import { Create, Login } from './components';


export const SignIn = () => {

    const [active, setActive] = useState(true);
    
    return (
        <div className='flex items-center flex-col justify-center h-full mt-20'>
            <div className='border border-solid border-violet-800 p-9 rounded-md flex justify-center flex-col items-center'>
                {!active ?
                    <Create
                        active={active}
                        setActive={setActive}
                    />
                    :
                    <Login
                        active={active}
                        setActive={setActive}
                    />
                }
            </div>
        </div>
    )
}
