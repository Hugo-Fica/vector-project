import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Home, SignIn } from '../pages';

export const VectorRoutes = () => {
  const { status } = useSelector((state) => state.auth);

  return (
    <>
      <Routes>
        {status === 'authenticated' ? (
          <Route path='/home' element={<Home />} />
        ) : (
          <Route path='/*' element={<SignIn />} />
        )}
      </Routes>
    </>
  );
};
