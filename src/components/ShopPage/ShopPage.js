import React, { useState } from 'react'
import InnerHeader from '../InnerHeader/InnerHeader'
import ThemeBtn from '../ThemeBtn/ThemeBtn';
import ProductCard from '../ProductCard/ProductCard';
import { SquaresFour, ListDashes } from 'phosphor-react';
import ProductData from '../ProductCard/ProductData';
import ThemeSelect from '../ThemeSelect/ThemeSelect';

import './ShopPage.scss';

function ShopPage() {
    const [selected, setselected] = useState('Featured')
    const [ProductStyle, setProductStyle] = useState('col-lg-3');
    const [activegrid, setactivegrid] = useState(true);
    const [activelist, setactivelist] = useState(false);

    const ViewGrid = () => {
        setProductStyle('col-lg-3');
        setactivegrid(!activegrid)
        setactivelist(false)
    }
    const ViewList = () => {
        setProductStyle('col-lg-12 ListView');
        setactivegrid(false)
        setactivelist(!activelist)
    }
    const selectOptions = [
        'Featured',
        'Best Selling',
        'Latest'
    ]
    return (
        <div className='ShopPage_main'>
            <InnerHeader
                Heading="Shop"
            />
            <div className='shop_section_main'>
                <div className='container'>
                    <div className='row row_custom'>
                        <div className='col_cards_otr'>
                            <div className='filter_grid_list'>
                                <div className='sort_otr'>
                                    <p className='heading-sm sort_text xyz'>
                                        Sort By:
                                    </p>
                                    <ThemeSelect
                                        Selected={selected}
                                        setSelected={setselected}
                                        options={selectOptions}
                                    />
                                </div>
                                <div className='grid_list_otr'>
                                    <div className={activegrid ? 'grid_active grid_otr icon_otr' : 'grid_otr icon_otr'} onClick={ViewGrid}>
                                        <SquaresFour size={24} />
                                    </div>
                                    <div className={activelist ? 'list_active list_otr icon_otr' : 'list_otr icon_otr'} onClick={ViewList}>
                                        <ListDashes size={24} />
                                    </div>
                                </div>
                            </div>
                            <div className='row col_cards_inr'>
                                {ProductData.map((val) => {
                                    return (
                                        <ProductCard
                                            ProductCardClass={`${ProductStyle} col-md-6 col-sm-12`}
                                            key={val.id}
                                            CardImg={val.CardImg}
                                            TagText={val.TagText}
                                            CardHeading={val.CardHeading}
                                            RealPrice={val.RealPrice}
                                            prePrice={val.prePrice}
                                            ProductReview={val.ProductReview}
                                            CardProductDesc={val.CardProductDesc}
                                        />
                                    )
                                })}
                            </div>
                            <div className='action_otr'>
                                <ThemeBtn
                                    ButtonClass="primary_btn"
                                    ButtonText="LOAD MORE"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopPage