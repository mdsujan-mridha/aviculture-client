import React, { Fragment, useState } from 'react';
import { toast } from 'react-toastify';
import img1 from "../images/Bird/bird.jpg";
import { Rating } from '@mui/material';
import profile from "../images/login & Register/profile.png";
import styled from '@emotion/styled';
import { addItemToCart } from '../Action/cartAction';
import { useDispatch } from 'react-redux';


const product =
{
    _id: 1,
    name: "Sparrow",
    image: img1,
    description: "Sparrows are typically small birds with a length ranging from 4 to 8 inches (10 to 20 cm). They have round bodies, short legs, and stout bills. Their plumage varies among species but is generally brown or gray with distinctive markings. Male sparrows often have more vibrant colors and markings than females.",
    habitat: "Sparrows are highly adaptable birds and can be found in a wide range of habitats, including urban areas, farmlands, grasslands, and forests. They are known for their ability to thrive in human-made environments, often nesting in buildings and foraging for food in city parks and gardens.",
    behavior: "Sparrows are social birds and often seen in flocks. They are known for their cheerful and chattering calls, which are a common sound in many urban and rural areas. Sparrows primarily feed on seeds, grains, insects, and small invertebrates. They forage on the ground and can also be seen perched on bushes and trees.",
    significance: "Sparrows have a long history of association with humans and are often considered symbols of simplicity and resilience. They are also important ecologically as they play a role in controlling insect populations and are a food source for various predators.",
    price: 230,
}


const StyledRating = styled(Rating)({
    '& .MuiRating-icon': {
        color: '#FFA500'
    }
})

const ProductsDetails = () => {
    const dispatch = useDispatch();
    const id = product._id;
    const [quantity, setQuantity] = useState(1);

    // ratting 
    const options = {
        size: "large",
        readOnly: true,
        precision: 0.5,
        name: "uncontrolled-rating",


    };


    const increaseQuantity = () => {
        if (product.Stock <= quantity) return;
        const qty = quantity + 1;
        setQuantity(qty);
    }
    const decreaseQuantity = () => {
        if (1 >= quantity) return;

        const qty = quantity - 1;
        setQuantity(qty);

    }

    const addToCartHandler = () => {
        dispatch(addItemToCart(id, quantity));
        toast.success("Item added to cart");
    };

    return (
        <Fragment>
            <div>
                <div className='w-full  flex flex-col lg:flex-row justify-evenly lg:items-center px-12' style={{ minHeight: '90vh' }}>
                    <div className='w-full lg:w-1/2 pb-5 lg:pb-0'>
                        <div
                            className='flex lg:justify-center lg:items-center shadow-xl rounded-md bg-secondary'
                            style={{
                                width: '600px', height: '600px', border: '2px solid #fff'
                            }}>
                            {/* <Carousel className='w-full h-full'>
                                            {
                                                product?.images &&
                                                product?.images.map((item, i) => (
                                                    <img
                                                        key={item.url}
                                                        src={item?.url}
                                                        alt={`${i} Slide`}
                                                        className='w-full h-full'
                                                    />
                                                ))
                                            }

                                        </Carousel> */}
                            <img src={product.image} alt="" />
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2 flex flex-col  justify-start items-start p-5'>
                        <p className='text-4xl pb-3 font-bold text-white'> {product?.name} </p>
                        <p className='text-xl font-bold opacity-60 border-b border-gray-500 w-full text-gray-400'>  productID: #{product?._id} </p>

                        <div className="w-full flex items-center justify-start py-10 border-b border-gray-500">
                            <StyledRating
                                {...options}

                            /> <span className='text-lg font-semibold text-neutral'> ({product?.numOfReviews} Reviews) </span>
                        </div>
                        <div>
                            <h1 className='text-4xl font-bold py-7 text-white'> BDT {product?.price} /- </h1>
                            <div className='flex justify-start items-center border-b border-gray-500 pb-7'>
                                <button
                                    className='text-white font-bold text-2xl bg-accent'
                                    style={{
                                        width: 45, height: 45
                                    }}
                                    onClick={decreaseQuantity}
                                > - </button>
                                <input
                                    type="number"
                                    value={quantity}
                                    readOnly
                                    style={{ width: 60, height: 45, textAlign: 'center', outline: 'none' }}
                                />
                                <button
                                    className='text-white font-bold text-2xl bg-accent' style={{
                                        width: 45, height: 45
                                    }}
                                    onClick={increaseQuantity}
                                > + </button>
                                <button
                                    className='btn btn-accent ml-7 rounded-full text-md'
                                    disabled={product.Stock <= 1 ? true : false}
                                    onClick={addToCartHandler}
                                > Add to cart </button>
                            </div>
                            <div className='py-7 border-b border-gray-500'>
                                <p className=' text-2xl font-bold text-gray-500'> status:
                                    <span className={product?.Stock <= 1 ? "text-red-700" : "text-white"}> {product.Stock < 1 ? "OutOfStock" : "InStock"} </span> </p>
                            </div>
                            <div className='py-7'>
                                <p className='text-xl font-bold text-white'> Description </p>
                                <p className='py-4 text-justify font-semibold opacity-70 text-white'> {product?.description} </p>
                            </div>
                            <button
                                className='btn w-52 bg-accent text-white outline-none border-0 rounded-full'> Submit Review </button>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-center py-7 text-3xl font-bold  uppercase pb-4 text-neutral'> Reviews </h1>
                    <hr style={{ width: 200, border: '2px solid gray', alignItems: 'center', margin: '0 auto' }} />
                </div>
                <div className='flex gap-5 items-center justify-center mt-24 overflow-x-scroll pb-5 px-12'>
                    <div className="w-full h-96 bg-accent flex flex-col items-center rounded-md px-5">
                        <img src={profile} alt="" className='w-32 h-32 rounded-full mt-5' />
                        <h2 className='py-4 text-xl font-bold text-white'> Jon Denver </h2>
                        <p className=' text-justify font-semibold text-sm opacity-70 text-white'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam deleniti similique cumque nostrum vero hic, sequi eaque laborum repellat dolorum? </p>
                    </div>
                    <div className="w-full h-96 bg-accent flex flex-col items-center rounded-md px-5">
                        <img src={profile} alt="" className='w-32 h-32 rounded-full mt-5' />
                        <h2 className='py-4 text-xl font-bold text-white'> Jon Denver </h2>
                        <p className=' text-justify font-semibold text-sm opacity-70 text-white'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam deleniti similique cumque nostrum vero hic, sequi eaque laborum repellat dolorum? </p>
                    </div>
                    <div className="w-full h-96 bg-accent flex flex-col items-center rounded-md px-5">
                        <img src={profile} alt="" className='w-32 h-32 rounded-full mt-5' />
                        <h2 className='py-4 text-xl font-bold text-white'> Jon Denver </h2>
                        <p className=' text-justify font-semibold text-sm opacity-70 text-white'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam deleniti similique cumque nostrum vero hic, sequi eaque laborum repellat dolorum? </p>
                    </div>
                    <div className="w-full h-96 bg-accent flex flex-col items-center rounded-md px-5">
                        <img src={profile} alt="" className='w-32 h-32 rounded-full mt-5' />
                        <h2 className='py-4 text-xl font-bold text-white'> Jon Denver </h2>
                        <p className=' text-justify font-semibold text-sm opacity-70 text-white'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam deleniti similique cumque nostrum vero hic, sequi eaque laborum repellat dolorum? </p>
                    </div>
                </div>
            </div>


        </Fragment>
    );
};

export default ProductsDetails;