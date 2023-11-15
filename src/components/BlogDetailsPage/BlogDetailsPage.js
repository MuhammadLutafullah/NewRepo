import React from 'react'
import { Link } from 'react-router-dom';
import InnerHeader from '../InnerHeader/InnerHeader'
import { Calendar, FacebookLogo, TwitterLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react';
import UserReviewCard from './UserReviewCard';
import BlogCard from '../BlogSection/BlogCard';

import CardImg1 from '../../img/category-img1.png';
import CardImg2 from '../../img/category-img2.png';
import CardImg3 from '../../img/category-img3.png';
import ProfileImg from '../../img/profile-img1.png';
import DetailsImg from '../../img/category-img1.png';

import './BlogDetailsPage.scss';

function BlogDetailsPage() {
    return (
        <div className='BlogDetailsPage_main'>
            <InnerHeader
                Heading="Blog Details"
            />
            <div className='blog_detail'>
                <div className='container'>
                    <div className='row row_custom'>
                        <div className='col-lg-9 col_content_otr'>
                            <div className='col_content_inr'>
                                <div className='tag_otr'>
                                    <p className='heading-xsb tag_text'>
                                        eCommerce
                                    </p>
                                </div>
                                <h2 className='heading-h2 heading_details'>
                                    Best Products to Purchase in Summer 2021
                                </h2>
                                <div className='profile_social_otr'>
                                    <Link className='profile_otr'>
                                        <img className='profile_img' src={ProfileImg} alt='img' />
                                        <p className='heading-xsb username'>
                                            Usman Ali
                                        </p>
                                        <p className='date_otr'>
                                            <Calendar size={20} />
                                            <span className='heading-xsb'>July 20, 2020</span>
                                        </p>
                                    </Link>
                                    <ul className='social_ul'>
                                        <li className='social_li'>
                                            <Link className='social_linkk'>
                                                <FacebookLogo size={24} />
                                            </Link>
                                        </li>
                                        <li className='social_li'>
                                            <Link className='social_linkk'>
                                                <TwitterLogo size={24} />
                                            </Link>
                                        </li>
                                        <li className='social_li'>
                                            <Link className='social_linkk'>
                                                <InstagramLogo size={24} />
                                            </Link>
                                        </li>
                                        <li className='social_li'>
                                            <Link className='social_linkk'>
                                                <LinkedinLogo size={24} />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className='img_otr'>
                                    <img className='detail_img' src={DetailsImg} alt='img' />
                                </div>
                                <div className='conntent_otr'>
                                    <p className='heading-mm desc desc1'>
                                        Orci habitant nulla quis sem malesuada habitasse commodo, cursus. Bibendum ac feugiat integer pellentesque mi tortor. Senectus pulvinar faucibus egestas porttitor semper felis quis. Duis mauris, amet netus faucibus luctus. Ac feugiat fermentum, morbi aliquet sollicitudin massa vivamus quam tempus.
                                    </p>
                                    <p className='heading-mm desc desc2'>
                                        Ut cursus interdum mollis ipsum. Dignissim non sed eget nibh sit pellentesque platea neque. Amet, in commodo ultrices nec euismod mi leo.
                                    </p>
                                    <h3 className='heading-h3 content_heading'>
                                        You won’t believe what we’re up to...
                                    </h3>
                                    <p className='heading-mm desc desc3'>
                                        Vestibulum sem nunc enim nec integer pharetra. Ultricies pellentesque enim massa urna, integer lorem lorem semper at. Facilisis hac faucibus lectus mauris adipiscing vestibulum pellentesque id. Adipiscing vestibulum ultrices amet in eu arcu.
                                    </p>
                                    <h3 className='heading-h3 content_heading'>
                                        Gotta give it ia try, right?
                                    </h3>
                                    <p className='heading-mm desc desc4'>
                                        Vestibulum sem nunc enim nec integer pharetra. Ultricies pellentesque enim massa urna, integer lorem lorem semper at. Facilisis hac faucibus lectus mauris adipiscing vestibulum pellentesque id. Adipiscing vestibulum ultrices amet in eu arcu.
                                    </p>
                                    <div className='tags_otr'>
                                        <p className='heading-sb tag_heading'>
                                            Tags:
                                        </p>
                                        <ul className='linkk_ul'>
                                            <li className='linkk_li'>
                                                <Link className='heading-xsb linkk_text'>
                                                    Pizza
                                                </Link>
                                            </li>
                                            <li className='linkk_li'>
                                                <Link className='heading-xsb linkk_text'>
                                                    Burger
                                                </Link>
                                            </li>
                                            <li className='linkk_li'>
                                                <Link className='heading-xsb linkk_text'>
                                                    Fries
                                                </Link>
                                            </li>
                                            <li className='linkk_li'>
                                                <Link className='heading-xsb linkk_text'>
                                                    Coke
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='review_otr'>
                                        <h3 className='heading-h3 review_heading'>
                                            Comments
                                        </h3>
                                        <UserReviewCard
                                            ProfileImg={ProfileImg}
                                            UserName="Usman Ali"
                                            DateText="July 20, 2020"
                                            CardHeading="Provost holystone gibbet no prey, no pay six pounders crack Jennys tea cup chantey Nelsons folly keel aft."
                                        />
                                        <UserReviewCard
                                            ProfileImg={ProfileImg}
                                            UserName="Rehman Ahmed"
                                            DateText="July 20, 2020"
                                            CardHeading="Provost holystone gibbet no prey, no pay six pounders crack Jennys tea cup chantey Nelsons folly keel aft."
                                        />
                                        <UserReviewCard
                                            ProfileImg={ProfileImg}
                                            UserName="Shahzaib"
                                            DateText="July 20, 2020"
                                            CardHeading="Provost holystone gibbet no prey, no pay six pounders crack Jennys tea cup chantey Nelsons folly keel aft."
                                        />
                                    </div>
                                </div>
                                <div className='related_post_otr'>
                                    <h3 className='heading-h3 blog_post_heading'>
                                        Related Posts
                                    </h3>
                                    <div className='row row_blog_post'>
                                        <BlogCard
                                            CardClass="col-lg-4"
                                            CardImg={CardImg1}
                                            CardDate="April 19, 2022"
                                            CardHeading="Colour Spicy to Spring in Your Table"
                                        />
                                        <BlogCard
                                            CardClass="col-lg-4"
                                            CardImg={CardImg2}
                                            CardDate="April 19, 2022"
                                            CardHeading="Colour Spicy to Spring in Your Table"
                                        />
                                        <BlogCard
                                            CardClass="col-lg-4"
                                            CardImg={CardImg3}
                                            CardDate="April 19, 2022"
                                            CardHeading="Colour Spicy to Spring in Your Table"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col_sidebar_otr'>
                            <div className='col_sidebar_inr'>
                                <div className='category_otr'>
                                    <p className='heading-lb sidebar_heading'>
                                        Categories
                                    </p>
                                    <ul className='linkk_ul'>
                                        <li className='linkk_li'>
                                            <Link className='heading-xsb linkk_text'>
                                                Daily Menu
                                            </Link>
                                        </li>
                                        <li className='linkk_li'>
                                            <Link className='heading-xsb linkk_text'>
                                                Food & Drink
                                            </Link>
                                        </li>
                                        <li className='linkk_li'>
                                            <Link className='heading-xsb linkk_text'>
                                                Healthy Food
                                            </Link>
                                        </li>
                                        <li className='linkk_li'>
                                            <Link className='heading-xsb linkk_text'>
                                                Recepies
                                            </Link>
                                        </li>
                                        <li className='linkk_li'>
                                            <Link className='heading-xsb linkk_text'>
                                                Startes
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className='popularPost_otr'>
                                    <p className='heading-lb sidebar_heading'>
                                        Popular Posts
                                    </p>
                                    <ul className='linkk_ul'>
                                        <li className='linkk_li'>
                                            <Link className='product_linkk'>
                                                <img className='product_img' src={CardImg1} alt='img' />
                                                <p className='heading-xsb product_text'>
                                                    Best Products to Purchase in Summer 2021
                                                </p>
                                            </Link>
                                        </li>
                                        <li className='linkk_li'>
                                            <Link className='product_linkk'>
                                                <img className='product_img' src={CardImg2} alt='img' />
                                                <p className='heading-xsb product_text'>
                                                    Best Products to Purchase in Summer 2021
                                                </p>
                                            </Link>
                                        </li>
                                        <li className='linkk_li'>
                                            <Link className='product_linkk'>
                                                <img className='product_img' src={CardImg3} alt='img' />
                                                <p className='heading-xsb product_text'>
                                                    Best Products to Purchase in Summer 2021
                                                </p>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className='tags_otr'>
                                    <p className='heading-lb sidebar_heading'>
                                        Tags
                                    </p>
                                    <ul className='linkk_ul'>
                                        <li className='linkk_li'>
                                            <Link className='heading-xsb linkk_text'>
                                                Daily
                                            </Link>
                                        </li>
                                        <li className='linkk_li'>
                                            <Link className='heading-xsb linkk_text'>
                                                Desertes
                                            </Link>
                                        </li>
                                        <li className='linkk_li'>
                                            <Link className='heading-xsb linkk_text'>
                                                Drinks
                                            </Link>
                                        </li>
                                        <li className='linkk_li'>
                                            <Link className='heading-xsb linkk_text'>
                                                Food
                                            </Link>
                                        </li>
                                        <li className='linkk_li'>
                                            <Link className='heading-xsb linkk_text'>
                                                Main
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogDetailsPage