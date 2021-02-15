import React from 'react';
import Products from './components/Products';
import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <div className="home__container">
                <img className='home__image' src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" alt=""/>
                <Products />
            </div>
        </div>
    )
}

export default Home