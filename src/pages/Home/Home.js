import React from 'react';
import "./Home.css";
import {headerItems, products} from "../../utils/ProductsData";
import Banner1 from "../../BannerImages/Banner1.jpg";
import Banner2 from "../../BannerImages/Banner2.jpg";
import Banner3 from "../../BannerImages/Banner3.jpg";
import Banner4 from "../../BannerImages/Banner4.jpg";
import Banner5 from "../../BannerImages/Banner5.jpg";
import Banner6 from "../../BannerImages/Banner6.jpg";
import Slider from "../../components/Slider/Slider";

const Home = () => {

    const bannerImages = [Banner1, Banner2, Banner3, Banner4, Banner5, Banner6];
    return (
        <div>
            <div className="item-container">
                {headerItems && headerItems.map((item, index) => <p>{item}</p>)}
            </div>
            <div className="home">
                <div className="home-container">
                    {/* slider */}
                    <Slider images={bannerImages} />
                    <div className="home-row">
                        {/* products */}
                    </div>
                    <div style={{marginTop: "40px"}}>
                        {/* back to top */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
