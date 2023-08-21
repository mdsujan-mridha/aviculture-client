import React, { Fragment } from 'react';

import image1 from "../images/popular-product/1.jpg"
import image2 from "../images/popular-product/2.jpg"
import image3 from "../images/popular-product/3.jpg"
import image4 from "../images/popular-product/4.jpg"
import HomeProductCard from './HomeProductCard';

const HomeProduct = () => {
    const products = [
        {
            id: 1,
            title: "Passwell Crumbles",
            price: 9.86,
            image: image1,
        },
        {
            id: 2,
            title: "Passwell Complete Lorikeet",
            price: 15.49,
            image: image2,
        },
        {
            id: 3,
            title: "Passwell Parrot Soft Food",
            price: 15.39,
            image: image3,
        },
        {
            id: 4,
            title: "Passwell Egg & Biscuit",
            price: 10.51,
            image: image4,
        },
    ]
    return (
        <Fragment>
            <section className='bg-accent  pb-16 text-white' style={{ margin: "250px 0px" }}>
                <div className='container mx-auto'>
                    <h1 className='pt-6 mb-6 text-center text-3xl font-bold'>Popular Products</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-11'>
                        {
                            products.map(product => (<HomeProductCard
                                key={product.id}
                                product={product}
                            />))
                        }
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default HomeProduct;