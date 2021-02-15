import React from 'react';
import Product from './Product';
import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <div className="home__container">
                <img className='home__image' src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" alt=""/>
                
                <div className="home__row">
                    <Product title = 'Etekcity Food Kitchen Scale, Gifts for Cooking, Baking, Meal Prep, Keto Diet and Weight Loss, Measuring in Grams and Ounces, Small, 304 Stainless Steel '
                            id='1' 
                            price={29.99} 
                            image='https://images-na.ssl-images-amazon.com/images/I/71KqYzhTeVL._AC_SX679_.jpg' 
                            rating={5}/>
                    <Product title = 'Surge Protector Wall Mount , Outlet Splitter with     Rotating Plug, POWERIVER Power Strip with 6 Outlet Extender (3 Side) and 3 USB Ports, 1680 Joules, for Home/School/Office/Travel, White '
                            id='2' 
                            price={19.99} 
                            image='https://images-na.ssl-images-amazon.com/images/I/61JS5FB0VGL._AC_SL1500_.jpg' 
                            rating={5}/>
                </div>

                <div className="home__row">
                    <Product title = 'Etekcity Food Kitchen Scale, Gifts for Cooking, Baking, Meal Prep, Keto Diet and Weight Loss, Measuring in Grams and Ounces, Small, 304 Stainless Steel '
                            id='3' 
                            price={229.99} 
                            image='https://images-na.ssl-images-amazon.com/images/I/51ohDLYtzDL._AC_SL1000_.jpg' 
                            rating={5}/>
                    <Product title = 'ILIFE A4s Pro Robot Vacuum, 2000Pa Max Suction, ElectroWall, Remote Control, Slim, Thin, Quiet, Self-Charging, Smart, Ideal for Hard Floor to Medium Carpet, Black '
                            id='4' 
                            price={19.99} 
                            image='https://images-na.ssl-images-amazon.com/images/I/513zZMCispL._AC_SL1000_.jpg' 
                            rating={5}/>

                    <Product title = 'ILIFE Robot Vacuum Cleaner Authentic Replacement Parts, Filters for V3s pro / V5s pro (10 pcs), PX-F010 '
                            id='5' 
                            price={9.99} 
                            image='https://images-na.ssl-images-amazon.com/images/I/51S%2B4za7OmL._AC_SL1000_.jpg' 
                            rating={5}/>
                </div>
                <div className="home__row">
                    <Product title = 'TCL 32" 3-Series 720p Roku Smart TV - 32S335 '
                            id='6' 
                            price={148} 
                            image='https://images-na.ssl-images-amazon.com/images/I/61ficuy07aL._AC_SL1200_.jpg' 
                            rating={5}/>
                </div>
                
            </div>
        </div>
    )
}

export default Home
