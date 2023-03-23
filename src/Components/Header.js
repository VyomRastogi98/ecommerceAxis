import React from 'react'

const Header = () => {
  return (
    <div className="header">

    <Link to="/" style={{textDecoration:'none', marginLeft:'10em'}}>
        <img className="header__logo" src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="flipkart"/>
    </Link>

    {/* <div className="header__address">
        <LocationOnIcon />
        <div className="header__option">
            <span className="header__optionLineOne">Hello</span>
            <span className="header__optionLineTwo">Select your address</span>
        </div>
    </div> */}

    <div className="header__search">
        <input className="header__searchInput" type="text"/>
    </div>

    <div className="header__nav">
        {/* Sign out Important */}
        <Link to={ '/login'} style={{textDecoration:'none'}}>  
            <div  className="header__option">
                <span className="header__optionLineOne">Hello </span>
                <span className="header__optionLineTwo"  style={{backgroundColor:'#fff', color:'#000', textAlign:'center', padding:'2px 5px'}}></span>
            </div>
        </Link>

        <Link to="/orders" style={{textDecoration:'none'}}>
            <div className="header__option">
                <span className="header__optionLineOne">Return</span>
                <span className="header__optionLineTwo">& Orders</span>
            </div>
        </Link>

        <Link to="/checkout" style={{textDecoration:'none'}}>
            <div className="header__optionBasket">
                <span className="header__optionLineOne"></span>
                <span className="header__optionLineTwo">Cart </span>
            </div>
        </Link>
    </div>
</div>
  )
}

export default Header
