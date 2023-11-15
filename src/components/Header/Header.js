import React, { useState } from 'react'
import NavbarInfo from './NavbarInfo';
import { Link } from 'react-router-dom';
import NavbarSearch from './NavbarSearch';
import NavMainMenu from './NavMainMenu';
import TopBarMenu from './TopBarMenu';
import ThemeBtn from '../ThemeBtn/ThemeBtn';
import SmallProductCard from '../ProductCard/SmallProductCard'
import { Heart, Bag, X, Plus, ListPlus } from 'phosphor-react';

import './Header.scss'

import BrandLogo from '../../img/brand-logo.png';
import productImg1 from '../../img/category-img1.png'
import productImg2 from '../../img/category-img2.png'
import productImg3 from '../../img/category-img3.png'
import productImg4 from '../../img/category-img4.png'
import productImg5 from '../../img/category-img5.png'
import productImg6 from '../../img/category-img6.png'

function Header(props) {
    const [scroll, setscroll] = useState(false);
    const changeValueScroll = () => {
        const scrollValue = document.documentElement.scrollTop;
        if (scrollValue > 150) {
            setscroll(true)
        }
        else {
            setscroll(false)
            setcartPopup(false)
        }
    }
    window.addEventListener('scroll', changeValueScroll);

    const [cartPopup, setcartPopup] = useState(false);
    const OpenCartPopup = () => {
        setcartPopup(!cartPopup)
    }
    return (
        <>
            <header className='header_main'>
                <div className='top_header_main'>
                    <div className='container'>
                        <div className='wrapper'>
                            <NavbarInfo />
                            <TopBarMenu />
                        </div>
                    </div>
                </div>
                <NavbarSearch
                    WishProductNum={props.WishProductNum}
                    AddProductNum={props.AddProductNum}
                    TotalProductsPrice={props.TotalProductsPrice}
                />
                <NavMainMenu />
            </header>
            <div className={scroll ? 'scroll_nav onScroll' : 'onScroll'}>
                <div className='NavMainMenu_main'>
                    <div className='container'>
                        <div className='wrapper'>
                            <div className='logo_menu_otr'>
                                <div className='menu_icon_otr'>
                                    <ListPlus size={24} />
                                </div>
                                <Link className='logo_otr' to="/">
                                    <img className='brand_logo' src={BrandLogo} alt='logo' />
                                </Link>
                            </div>
                            <ul className='menu_ul'>
                                <li className='menu_li'>
                                    <Link className='menu_linkk heading-sb' to="/">
                                        <span>
                                            Home
                                        </span>
                                    </Link>
                                </li>
                                <li className='menu_li'>
                                    <Link className='menu_linkk heading-sb' to="/shop">
                                        <span>
                                            Shop
                                        </span>
                                    </Link>
                                </li>
                                <li className='menu_li'>
                                    <p className='menu_linkk heading-sb'>
                                        <span>
                                            Pages
                                        </span>
                                        <Plus size={20} />
                                    </p>
                                    <div className='menu_dropdown_otr'>
                                        <div className='menu_dropdown_inr'>
                                            <ul className='menu_dropdown_ul'>
                                                <li className='menu_dropdown_li'>
                                                    <Link className='menu_dropdown_Linkk heading-sb' to="/cart">
                                                        <span>
                                                            Cart
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li className='menu_dropdown_li'>
                                                    <Link className='menu_dropdown_Linkk heading-sb' to="/empty_cart">
                                                        <span>
                                                            Cart Empty
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li className='menu_dropdown_li'>
                                                    <Link className='menu_dropdown_Linkk heading-sb' to="/wishlist">
                                                        <span>
                                                            Wishlist
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li className='menu_dropdown_li'>
                                                    <Link className='menu_dropdown_Linkk heading-sb' to="/empty_wishlist">
                                                        <span>
                                                            Wishlist Empty
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li className='menu_dropdown_li'>
                                                    <Link className='menu_dropdown_Linkk heading-sb' to="/checkout">
                                                        <span>
                                                            Checkout
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li className='menu_dropdown_li'>
                                                    <p className='menu_dropdown_Linkk heading-sb'>
                                                        <span>
                                                            Other Pages
                                                        </span>
                                                        <Plus size={20} />
                                                    </p>
                                                    <div className='menu_otherdropdown_otr'>
                                                        <div className='menu_otherdropdown_inr'>
                                                            <ul className='menu_otherdropdown_ul'>
                                                                <li className='menu_otherdropdown_li'>
                                                                    <Link className='menu_otherdropdown_Linkk heading-sb' to="/faq">
                                                                        <span>
                                                                            Faq
                                                                        </span>
                                                                    </Link>
                                                                </li>
                                                                <li className='menu_otherdropdown_li'>
                                                                    <Link className='menu_otherdropdown_Linkk heading-sb' to="/comming_soon">
                                                                        <span>
                                                                            Comming Soon
                                                                        </span>
                                                                    </Link>
                                                                </li>
                                                                <li className='menu_otherdropdown_li'>
                                                                    <Link className='menu_otherdropdown_Linkk heading-sb' to="/login">
                                                                        <span>
                                                                            Login
                                                                        </span>
                                                                    </Link>
                                                                </li>
                                                                <li className='menu_otherdropdown_li'>
                                                                    <Link className='menu_otherdropdown_Linkk heading-sb' to="/signup">
                                                                        <span>
                                                                            Sign up
                                                                        </span>
                                                                    </Link>
                                                                </li>
                                                                <li className='menu_otherdropdown_li'>
                                                                    <Link className='menu_otherdropdown_Linkk heading-sb' to="/404">
                                                                        <span>
                                                                            404
                                                                        </span>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className='menu_li'>
                                    <Link className='menu_linkk heading-sb' to="/blog">
                                        <span>
                                            Blogs
                                        </span>
                                    </Link>
                                </li>
                                <li className='menu_li'>
                                    <Link className='menu_linkk heading-sb' to="/contact">
                                        <span>
                                            Contact
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                            <div className='action_otr'>
                                <ul className='icon_ul'>
                                    <li className='icon_li'>
                                        <Link className='icon_otr' to="/wishlist">
                                            <Heart size={32} />
                                            <div className='num_otr'>
                                                <p className='heading-xs product_num'>{props.WishProductNum}</p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className='icon_li' onClick={OpenCartPopup}>
                                        <div className='icon_otr'>
                                            <Bag size={32} />
                                            <div className='num_otr'>
                                                <p className='heading-xs product_num'>{props.AddProductNum}</p>
                                            </div>
                                            <p className='heading-xsb cart_price_text'>
                                                $28.60
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                                <div className={cartPopup ? 'cart_popup_main cart_popup_active' : 'cart_popup_main'}>
                                    <div className='heading_close_otr'>
                                        <p className='heading-mb cart_heading'>
                                            Quick View
                                        </p>
                                        <div className='close_icon_otr' onClick={OpenCartPopup}>
                                            <X size={24} />
                                        </div>
                                    </div>
                                    <div className='products_main'>
                                        <div className='products_otr'>
                                            <SmallProductCard
                                                CardImg={productImg1}
                                                CardHeading="Delicious Burger"
                                                CardPrice="$200"
                                            />
                                            <SmallProductCard
                                                CardImg={productImg2}
                                                CardHeading="Delicious Burger"
                                                CardPrice="$200"
                                            />
                                            <SmallProductCard
                                                CardImg={productImg3}
                                                CardHeading="Delicious Burger"
                                                CardPrice="$200"
                                            />
                                            <SmallProductCard
                                                CardImg={productImg4}
                                                CardHeading="Delicious Burger"
                                                CardPrice="$200"
                                            />
                                            <SmallProductCard
                                                CardImg={productImg5}
                                                CardHeading="Delicious Burger"
                                                CardPrice="$200"
                                            />
                                            <SmallProductCard
                                                CardImg={productImg6}
                                                CardHeading="Delicious Burger"
                                                CardPrice="$200"
                                            />
                                        </div>
                                        <div className='subtotal_otr'>
                                            <p className='heading-sm subtotal_text'>
                                                Subtotal
                                            </p>
                                            <p className='heading-sb total_price_text'>{props.TotalProductsPrice}</p>
                                        </div>
                                    </div>
                                    <div className='action_main'>
                                        <Link to="/checkout" className='action_otr'>
                                            <ThemeBtn
                                                ButtonClass="primary_btn cart_btn"
                                                ButtonText="Checkout"
                                            />
                                        </Link>
                                        <Link to="/cart" className='action_otr'>
                                            <ThemeBtn
                                                ButtonClass="light_btn cart_btn"
                                                ButtonText="View Cart"
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header