import React, { Fragment } from 'react';

const HomeProductCard = ({ product }) => {
    const { title, price, image } = product;
    return (
        <Fragment>
            <div className='flex flex-col justify-center items-center'>
                <figure className='pt-7 pb-3 bg-secondary shadow-xl rounded-md'>
                    <img className='max-w-full h-auto' src={image} alt="Bird_Image" />
                </figure>
                <div className='text-center'>
                    <h3 className='mt-3 text-2xl hover:text-primary font-bold'>{title}</h3>
                    <span className='mt-3 font-bold'>From ${price}</span>
                </div>
            </div>
        </Fragment>
    );
};

export default HomeProductCard;