import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ThemeBtn from '../ThemeBtn/ThemeBtn';
import ThemeInput from '../ThemeInput/ThemeInput';
import SmallProductCard from '../ProductCard/SmallProductCard'
import { ListPlus, MagnifyingGlass, Heart, Bag, X } from 'phosphor-react';

import './Header.scss'

import BrandLogo from '../../img/brand-logo2.png';
import productImg1 from '../../img/category-img1.png'
import productImg2 from '../../img/category-img2.png'
import productImg3 from '../../img/category-img3.png'
import productImg4 from '../../img/category-img4.png'
import productImg5 from '../../img/category-img5.png'
import productImg6 from '../../img/category-img6.png'

function NavbarSearch(props) {
    const [cartPopup, setcartPopup] = useState(false);
    const OpenCartPopup = () => {
        setcartPopup(!cartPopup)
    }
    return (
        <div className='NavbarSearch_main'>
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
                    <div className='search_otr'>
                        <ThemeInput
                            inputClass="White_Input"
                            inputType="search"
                            inputName="search"
                            inputPlaceholder="Search Product"
                        />
                        <div className='icon_otr'>
                            <MagnifyingGlass size={24} />
                        </div>
                    </div>
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
    )
}

export default NavbarSearch