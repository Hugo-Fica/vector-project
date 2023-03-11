import { Route, Routes } from 'react-router-dom';
import { Home, SignIn } from '../pages';
import { SideBar } from '../pages/components/SideBar';

export const VectorRoutes = () => {
  return (
    <>
      <SideBar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/*' element={<SignIn />} />
      </Routes>
    </>
  );
};
