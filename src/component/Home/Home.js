import React, { Fragment } from 'react';
import Hero from './Hero';
import HomeBlog from './HomeBlog';

const Home = () => {
    return (
        <Fragment>
            <Hero />
            <HomeBlog />
        </Fragment>
    );
};

export default Home;