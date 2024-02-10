
import { Fragment, useEffect, useState } from 'react';
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
import ProductsDetails from './component/products/ProductsDetails';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Cart from './component/Cart/Cart';
import Shipping from './component/Cart/Shipping';
import ConfirmOrder from './component/Cart/ConfirmOrder';
import Dashboard from './component/Admin/Dashboard';
import { Elements } from '@stripe/react-stripe-js';
import Payment from './component/Cart/Payment';
import { loadStripe } from '@stripe/stripe-js';
import Success from './component/Cart/Success';
import MyOrder from './component/Order/MyOrder';
import Posts from './component/Post/Posts';
import PostDetails from './component/Post/PostDetails';
import ProductsList from './component/Admin/ProductsList';
import OrderDetails from './component/Order/OrderDetails';
import NewProduct from './component/Admin/NewProduct';
import OrderList from './component/Admin/OrderList';
import UpdateOrder from './component/Admin/UpdateOrder';
function App() {

  axios.defaults.withCredentials = true;
  // import logged user 
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("http://localhost:5000/api/v1/stripeapikey");
    setStripeApiKey(data.stripeApiKey);
    // console.log(data);
  }
  useEffect(() => {
    store.dispatch(loadUser());
    getStripeApiKey();

  }, [])

  return (
    <Fragment>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/home' element={<Home />} ></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/products/:id' element={<ProductsDetails />}></Route>
        <Route path='/blogs' element={<Posts />}></Route>
        <Route path='/blogs/:id' element={<PostDetails />}></Route>

        {/* admin route  */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              adminRoute={true}
              isAdmin={user?.role === "admin" ? true : false}
            >

              <Dashboard />
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/admin/products"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              adminRoute={true}
              isAdmin={user?.role === "admin" ? true : false}
            >
              <ProductsList />
            </ProtectedRoute>
          }
        ></Route>
        {/* create product  */}
        <Route
          path="/admin/product"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              adminRoute={true}
              isAdmin={user?.role === "admin" ? true : false}
            >
              <NewProduct />
            </ProtectedRoute>
          }
        ></Route>
        {/* order list  */}
        <Route
          path="/admin/orders"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              adminRoute={true}
              isAdmin={user?.role === "admin" ? true : false}
            >
              <OrderList />
            </ProtectedRoute>
          }
        ></Route>
        {/* update oder  */}
        <Route
          path="/admin/order/:id"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              adminRoute={true}
              isAdmin={user?.role === "admin" ? true : false}
            >
              <UpdateOrder />
            </ProtectedRoute>
          }
        ></Route>
        {/* protected route --user */}
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>

          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/shipping' element={<Shipping />}></Route>
          <Route path='/order/confirm' element={<ConfirmOrder />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/orders' element={<MyOrder />}></Route>
          <Route path='/order/:id' element={<OrderDetails />}></Route>
          <Route>
            {stripeApiKey && (
              <Route
                path="/process/payment"
                element={
                  <Elements stripe={loadStripe(stripeApiKey)} >
                    <Payment stripeApiKey={stripeApiKey} />
                  </Elements>
                }
              >

              </Route>
            )}
          </Route>
          <Route path='/success' element={<Success />}></Route>
        </Route>

        {/* admin route  */}


      </Routes>

      <Footer />
    </Fragment>
  );
}

export default App;
