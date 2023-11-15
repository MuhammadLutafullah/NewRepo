import React from 'react'
import { Link } from 'react-router-dom'
import { Plus } from 'phosphor-react'

import './Header.scss'

function NavMainMenu() {
    return (
        <div className='NavMainMenu_main'>
            <div className='container'>
                <div className='wrapper'>
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
                    <p className='heading-xsb percent_text'>
                        clearance up to 30% off
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NavMainMenu