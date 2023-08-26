import React, { Fragment } from 'react';

const HomeBlogCard = ({ blog }) => {
    const { title, image } = blog;
    return (
        <Fragment>
            <div
                className='
                 flex flex-col text-center justify-center items-center  rounded-md text-white pb-5 pt-6 
                 bg-secondary w-80
             '>
                <h1 className='text-3xl font-medium font-["Cabin"] pb-6'>{title}</h1>
                <figure>
                    <img className='max-w-full h-auto' src={image} alt="Bird_Image" />
                </figure>
                <div className='text-white mt-4'>
                    <button type="button" className='py-3 px-4 rounded-3xl hover:bg-primary bg-accent'>Read More</button>
                </div>
            </div>
        </Fragment>
    );
};

export default HomeBlogCard;