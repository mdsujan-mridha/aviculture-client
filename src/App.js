
import { Fragment, useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Navbar from './component/Home/Navbar';
import Footer from './component/Layout/Footer';
import Login from './component/User/Login';
import Register from './component/User/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Profile from './component/User/Profile';
import Products from './component/products/Products';
import ProtectedRoute from './component/route/ProtectedRoute';
import { useSelector } from 'react-redux';
import store from './store';
import { loadUser } from './component/Action/userAction';
function App() {

  axios.defaults.withCredentials = true;
  // import logged user 
  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    store.dispatch(loadUser());
  }, [])

  return (
    <Fragment>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/home' element={<Home />} ></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>

        <Route path='/products' element={<Products />}></Route>

        {/* protected route  */}
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path='/profile' element={<Profile />}></Route>
        </Route>
      </Routes>

      <Footer />
    </Fragment>
  );
}

export default App;
