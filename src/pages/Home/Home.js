import React from 'react';
import useTittle from '../../useTittle';

import Banner from './Banner/Banner';
import Categories from './Categoris/Categories';


const Home = () => {
    useTittle('Kenakata.Com')
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
        </div>
    );
};

export default Home;