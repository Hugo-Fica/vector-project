import { Route, Routes } from 'react-router-dom';
import { Home, SignIn } from '../pages';

export const VectorRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/*' element={<SignIn />} />
      </Routes>
    </>
  );
};
