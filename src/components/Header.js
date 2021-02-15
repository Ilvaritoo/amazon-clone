import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            {/* AMAZON LOGO */}
            <img className='header__logo' src="https://www.internetworld.de/image.php/6/2/0/2/3/7/Amazon_w600_h500.jpg?w=1200&h=630&fit=crop&s=e5fa09cb1a30b119afe1c8ecb97cb304" alt="" />

            {/* SEARCH BAR */}
            <div className="header__search">
                <input className='header__searchInput' type="text" name="" id="" />
                <SearchIcon className='header__searchIcon' />
            </div>

            {/* HEADER NAV */}
            <div className="header__nav">
                <div className="header__option">
                    <span className='header__optionLineOne'>Hello Guest</span>
                    <span className='header__optionLineTwo'>Sign In</span>
                </div>
                <div className="header__option">
                    <span className='header__optionLineOne'>Returns</span>
                    <span className='header__optionLineTwo'>& Orderd</span>
                </div>
                <div className="header__option">
                    <span className='header__optionLineOne'>Your</span>
                    <span className='header__optionLineTwo'>Prime</span>
                </div>
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className='header__optionLineTwo header__basketCount'>0</span>
                </div>
            </div>
        </div>
    )
}

export default Header
