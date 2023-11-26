import {Route, Routes} from 'react-router-dom';

import Home from '../components/Home';
import Login from '../components/App/Auth/Login';
import SuperHome from '../components/SuperHome';
import MegaUserCreation from '../components/App/Auth/Signup'
import NotFound from '../components/App/Auth/NotFound';

const RoutesNav = () => {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/super-home" element={ <SuperHome/> } />
      <Route path='/megaUserSignUp' element={ <MegaUserCreation /> } />
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  );
}

export default RoutesNav;
