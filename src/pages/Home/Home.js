import React from 'react';
import useTittle from '../../useTittle';

import Banner from './Banner/Banner';
import Categories from './Categoris/Categories';
import Info from './Info';


const Home = () => {
    useTittle('Kenakata.Com')
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Info></Info>   
        </div>
    );
};

export default Home;