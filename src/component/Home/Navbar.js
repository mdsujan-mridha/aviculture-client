import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {



    return (
        <Fragment>
            <div className="navbar bg-primary text-white" style={{ borderBottom: '1px solid #583ee6' }}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-secondary rounded-box w-52">
                            <li><Link>Home</Link></li>
                            <li><Link>About</Link></li>
                            <li><Link>Contact</Link></li>
                            <li><Link>Shop</Link></li>
                            <li>
                                <Link>Articles</Link>
                                <ul className="p-2">
                                    <li><Link>Birds Food & Treats</Link></li>
                                    <li><Link>First Aid & Medication</Link></li>
                                    <li><Link> Vitamin Supplements</Link></li>
                                </ul>
                            </li>
                            <li><Link> AviManage</Link></li>
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-3xl text-white">AVI <span className='text-orange-500'> CULTURE</span> </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xl font-bold">
                        <li><Link>Home</Link></li>
                        <li><Link>About</Link></li>
                        <li><Link>Contact</Link></li>
                        <li tabIndex={0}>
                            <details>
                                <summary>Articles</summary>
                                <ul className="p-2 bg-secondary">
                                    <li><Link>Birds Food & Treats</Link></li>
                                    <li><Link>First Aid & Medication</Link></li>
                                    <li><Link> Vitamin Supplements</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li><Link>Shop</Link></li>
                        <li><Link> AviManage</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className="btn btn-secondary">Button</Link>
                </div>
            </div>
        </Fragment>
    );
};

export default Navbar;