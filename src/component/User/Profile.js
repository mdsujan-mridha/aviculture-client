import React, { Fragment, useEffect } from 'react';
import profileBg from "../images/login & Register/profile.png";
import userImg from "../images/login & Register/user.png";
import { ChangeCircle, Edit, ListAlt, } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import Loader from '../Layout/Loader';
import { toast } from 'react-toastify';
import { clearErrors } from '../Action/userAction';

const Profile = () => {

    const dispatch = useDispatch();

    const { user, loading, isAuthenticated, error } = useSelector((state) => state.user);




    const navigate = useNavigate();

    useEffect(() => {

        if (error) {
            toast.error(error);
            dispatch(clearErrors())
        }

        if (isAuthenticated === false) {
            navigate("/login");
        }
        // dispatch(loadUser());

    }, [navigate, isAuthenticated, error, dispatch]);

    // console.log(user);

    return (
        <Fragment>
            {
                loading ?
                    (<Loader />)
                    :
                    (
                        <Fragment>
                            <div className="w-full"
                                style={{ backgroundImage: `url(${profileBg})`, minHeight: '90vh', zIndex: 999 }}
                            >
                                <div className="w-full h-full  pb-5 lg:pb-10  backdrop-blur-md " style={{ minHeight: '90vh', zIndex: 999 }}>
                                    <div className=' flex flex-col lg:flex-row justify-evenly items-center px-12 gap-5 pt-5 lg:pt-20'>
                                        <div className='flex flex-col gap-10 justify-center items-center'>
                                            <img src={userImg} alt="user" className='w-72 h-72 rounded-full' />
                                            <button className='btn text-lg font-semibold bg-teal-500 border-0 text-white'><Edit /> update profile </button>
                                        </div>
                                        <div className='flex flex-col gap-6 justify-center items-center'>
                                            <h1 className='text-4xl font-bold text-white'>  Name </h1>
                                            <p className='text-lg font-bold text-gray-400'> {user?.name}  </p>
                                            <h1 className='text-4xl font-bold text-white'>  Email </h1>
                                            <p className='text-lg font-bold text-gray-400'> {user?.email} </p>
                                            <h1 className='text-4xl font-bold text-white'> Join At </h1>
                                            <p className='text-lg font-bold text-gray-400'> {user?.createAt} </p>
                                            <div className='flex flex-col gap-5 mt-10 '>
                                                <button className='btn text-lg font-semibold bg-teal-400 border-0 text-white'><ChangeCircle /> Change password </button>
                                                <Link to="/orders" className='btn text-lg font-semibold bg-teal-400 border-0 text-white'><ListAlt /> Orders </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fragment>
                    )
            }
        </Fragment>
    );
};

export default Profile;