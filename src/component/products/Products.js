import { Slider } from '@mui/material';
import React, { Fragment, useState } from 'react';

import img1 from "../images/Bird/bird.jpg";
import img2 from "../images/Bird/bird-2.jpg";
import img3 from "../images/Bird/bird-3.jpg";
import img4 from "../images/Bird/bird-4.jpg";
import BirdCard from './BirdCard';

const birdData = [
    {
        _id: 1,
        name: "Sparrow",
        image: img1,
        description: "Sparrows are typically small birds with a length ranging from 4 to 8 inches (10 to 20 cm). They have round bodies, short legs, and stout bills. Their plumage varies among species but is generally brown or gray with distinctive markings. Male sparrows often have more vibrant colors and markings than females.",
        habitat: "Sparrows are highly adaptable birds and can be found in a wide range of habitats, including urban areas, farmlands, grasslands, and forests. They are known for their ability to thrive in human-made environments, often nesting in buildings and foraging for food in city parks and gardens.",
        behavior: "Sparrows are social birds and often seen in flocks. They are known for their cheerful and chattering calls, which are a common sound in many urban and rural areas. Sparrows primarily feed on seeds, grains, insects, and small invertebrates. They forage on the ground and can also be seen perched on bushes and trees.",
        significance: "Sparrows have a long history of association with humans and are often considered symbols of simplicity and resilience. They are also important ecologically as they play a role in controlling insect populations and are a food source for various predators.",
        price: 230,
    },
    {
        _id: 2,
        name: "Eagle",
        image: img2,
        description: "Sparrows are typically small birds with a length ranging from 4 to 8 inches (10 to 20 cm). They have round bodies, short legs, and stout bills. Their plumage varies among species but is generally brown or gray with distinctive markings. Male sparrows often have more vibrant colors and markings than females.",
        habitat: "Sparrows are highly adaptable birds and can be found in a wide range of habitats, including urban areas, farmlands, grasslands, and forests. They are known for their ability to thrive in human-made environments, often nesting in buildings and foraging for food in city parks and gardens.",
        behavior: "Sparrows are social birds and often seen in flocks. They are known for their cheerful and chattering calls, which are a common sound in many urban and rural areas. Sparrows primarily feed on seeds, grains, insects, and small invertebrates. They forage on the ground and can also be seen perched on bushes and trees.",
        significance: "Sparrows have a long history of association with humans and are often considered symbols of simplicity and resilience. They are also important ecologically as they play a role in controlling insect populations and are a food source for various predators.",
        price: 230,
    },
    {
        _id: 3,
        name: "Penguin",
        image: img3,
        description: "Sparrows are typically small birds with a length ranging from 4 to 8 inches (10 to 20 cm). They have round bodies, short legs, and stout bills. Their plumage varies among species but is generally brown or gray with distinctive markings. Male sparrows often have more vibrant colors and markings than females.",
        habitat: "Sparrows are highly adaptable birds and can be found in a wide range of habitats, including urban areas, farmlands, grasslands, and forests. They are known for their ability to thrive in human-made environments, often nesting in buildings and foraging for food in city parks and gardens.",
        behavior: "Sparrows are social birds and often seen in flocks. They are known for their cheerful and chattering calls, which are a common sound in many urban and rural areas. Sparrows primarily feed on seeds, grains, insects, and small invertebrates. They forage on the ground and can also be seen perched on bushes and trees.",
        significance: "Sparrows have a long history of association with humans and are often considered symbols of simplicity and resilience. They are also important ecologically as they play a role in controlling insect populations and are a food source for various predators.",
        price: 230,
    },
    {
        _id: 4,
        name: "Owl",
        image: img4,
        description: "Sparrows are typically small birds with a length ranging from 4 to 8 inches (10 to 20 cm). They have round bodies, short legs, and stout bills. Their plumage varies among species but is generally brown or gray with distinctive markings. Male sparrows often have more vibrant colors and markings than females.",
        habitat: "Sparrows are highly adaptable birds and can be found in a wide range of habitats, including urban areas, farmlands, grasslands, and forests. They are known for their ability to thrive in human-made environments, often nesting in buildings and foraging for food in city parks and gardens.",
        behavior: "Sparrows are social birds and often seen in flocks. They are known for their cheerful and chattering calls, which are a common sound in many urban and rural areas. Sparrows primarily feed on seeds, grains, insects, and small invertebrates. They forage on the ground and can also be seen perched on bushes and trees.",
        significance: "Sparrows have a long history of association with humans and are often considered symbols of simplicity and resilience. They are also important ecologically as they play a role in controlling insect populations and are a food source for various predators.",
        price: 230,
    },
]

const categories = [
    "Peanuts",
    "Mealworms",
    "Sunflower Seeds",
    "Nectar",
    "Live Insects",
    "Grit",
    "Suet"
]
const Products = () => {

    // state for category 
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState([10, 1000])

    const handlePrice = (e) => {
        setPrice(e.target.value)
    }
    console.log(category);

    return (
        <Fragment>
            <div className='pt-10'> <h1 className='text-center text-4xl text-orange-500 font-bold'> Our Available Products </h1> </div>
            <div className='mt-24 flex gap-10 flex-col lg:flex-row'>
                <div className='w-full lg:w-96 bg-secondary h-screen rounded-md lg:mt-[-170px] '>
                    <div className='flex justify-between px-12 items-center border-b-2 border-accent pb-5 pt-5'>
                        <h2 className='text-neutral text-2xl font-bold'> Filter </h2>
                        <button className='btn btn-accent'>Reset </button>
                    </div>
                    <div className='py-10 border-b-2 border-accent'>
                        <p className='text-neutral text-2xl font-bold px-2 lg:px-12 md:px-2'> Filter by category </p>
                        <div className='flex flex-col px-5 lg:px-12 md:px-5 gap-5 pt-5'> {
                            categories &&
                            categories?.map((category, index) => (
                                <li key={index}
                                    onClick={() => setCategory(category)}
                                    className=' list-none text-md font-bold text-white opacity-70 cursor-pointer hover:text-neutral hover:opacity-100'> {category} </li>
                            ))
                        } </div>
                    </div>
                    <div className='py-10 border-b-2 border-accent'>
                        <p className='text-neutral text-2xl font-bold px-2 lg:px-12'> Filtered by Price </p>
                        <div className='px-5 pt-10'>
                            <Slider
                                getAriaLabel={() => 'Temperature range'}
                                value={price}
                                onChange={handlePrice}
                                valueLabelDisplay="auto"
                                getAriaValueText=""

                            />
                        </div>
                    </div>
                </div>
                <div className='bg-secondary h-auto pb-12 rounded-md w-full'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12 pt-12'>
                        {
                            birdData &&
                            birdData?.map((bird) => (
                                <BirdCard key={bird._id} bird={bird}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Products;