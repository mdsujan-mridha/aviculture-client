import React, { Fragment } from 'react';
import registerBgImage from "../images/login & Register/register.jpg";



const Register = () => {
    return (
        <Fragment>
            <div
                style={{
                    backgroundImage: `url(${registerBgImage})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100%',
                    zIndex: 99999,
                    minHeight: '90vh'
                }}
                className='w-full h-full'
            >
                <div className="w-full h-full flex justify-center items-center backdrop-blur-md flex-col" style={{ minHeight: '90vh' }}>
                    <h1 className='text-5xl text-white font-bold'> Register </h1>
                    <hr style={{ borderBottom: '5px solid #fff', width: '20vh', marginTop: 15 }} />
                    <div className="w-96 mt-10">
                        <form className='flex flex-col gap-5'>


                            <input
                                type="text"
                                class="border-b border-white focus:border-white focus:outline-none w-full bg-transparent p-5 text-xl font-bold text-white"
                                placeholder='Enter your name'

                            />
                            <input
                                type="email"
                                class="border-b border-white focus:border-white focus:outline-none w-full bg-transparent p-5 text-xl font-bold text-white"
                                placeholder='Enter your email'

                            />
                            <input
                                type="password"
                                class="border-b border-white focus:border-white focus:outline-none w-full bg-transparent p-5 text-xl font-bold text-white"
                                placeholder='Enter your password'

                            />
                            <input type="submit" value="Register" className=' text-white font-bold text-lg w-full bg-gray-600' style={{ outline: 'none', border: 'none', height: '45px', borderRadius: 8, cursor: 'pointer' }} />
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Register;