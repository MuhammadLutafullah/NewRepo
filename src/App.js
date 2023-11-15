import React, { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import FaqPage from './components/FaqPage/FaqPage';
import AboutPage from './components/AboutPage/AboutPage';
import ContactPage from './components/ContactPage/ContactPage';
import ShopPage from './components/ShopPage/ShopPage';
import ProductDetail from './components/ProductDetail/ProductDetail';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import Refund from './components/PrivacyPolicy/Refund';
import Terms from './components/PrivacyPolicy/Terms';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import WhishListPage from './components/WhishListPage/WhishListPage';
import BlogDetailsPage from './components/BlogDetailsPage/BlogDetailsPage';
import BlogPage from './components/BlogPage/BlogPage';
import CartPage from './components/CartPage/CartPage';
import CheckoutPage from './components/CheckoutPage/CheckoutPage';
import CommingSoon from './components/CommingSoon/CommingSoon';
import EmptyCartPage from './components/EmptyCartPage/EmptyCartPage';
import EmptyWishlist from './components/EmptyCartPage/EmptyWishlist';
import ErrorPage from './components/ErrorPage/ErrorPage';
// import { Bars } from 'react-loader-spinner';
import axios from 'axios';

import './App.scss';

function App() {
  // const [data, setData] = useState([]);
  // const [IsLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   axios.get('http://foodies.vistothemes.com/')
  //     .then((re) => {
  //       setIsLoading(false)
  //       setData(re.data.result)
  //     })
  // }, [])
  return (
    <>
      {/* {IsLoading && (
        <div className="loader">
          <Bars
            height="100px"
            width="100px"
            radius={5}
            color="#7AAAF5"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
          />
        </div>
      )} */}
      <Header
        WishProductNum={6}
        AddProductNum={6}
        TotalProductsPrice="$200"
      />
      <Routes>
        <Route
          path="/"
          exact={true}
          element={<LandingPage />}
        />
        <Route
          path="/faq"
          exact={true}
          element={<FaqPage />}
        />
        <Route
          path="/about"
          exact={true}
          element={<AboutPage />}
        />
        <Route
          path="/contact"
          exact={true}
          element={<ContactPage />}
        />
        <Route
          path="/shop"
          exact={true}
          element={<ShopPage />}
        />
        <Route
          path="/product_details"
          exact={true}
          element={<ProductDetail />}
        />
        <Route
          path="/privacy"
          exact={true}
          element={<PrivacyPolicy />}
        />
        <Route
          path="/terms"
          exact={true}
          element={<Terms />}
        />
        <Route
          path="/refund"
          exact={true}
          element={<Refund />}
        />
        <Route
          path="/login"
          exact={true}
          element={<Login />}
        />
        <Route
          path="/signup"
          exact={true}
          element={<SignUp />}
        />
        <Route
          path="/404"
          exact={true}
          element={<ErrorPage />}
        />
        <Route
          path="/blog"
          exact={true}
          element={<BlogPage />}
        />
        <Route
          path="/blog_details"
          exact={true}
          element={<BlogDetailsPage />}
        />
        <Route
          path="/wishlist"
          exact={true}
          element={<WhishListPage />}
        />
        <Route
          path="/cart"
          exact={true}
          element={<CartPage />}
        />
        <Route
          path="/checkout"
          exact={true}
          element={<CheckoutPage />}
        />
        <Route
          path="/comming_soon"
          exact={true}
          element={<CommingSoon />}
        />
        <Route
          path="/empty_cart"
          exact={true}
          element={<EmptyCartPage />}
        />
        <Route
          path="/empty_wishlist"
          exact={true}
          element={<EmptyWishlist />}
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App