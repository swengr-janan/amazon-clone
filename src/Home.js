import React from 'react';
import "./Home.css";
import Product from './Product';


function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className ="home__image" 
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"/>
                <div className="home__row">
                    <Product
                    id="00001"
                    title="Amazon Basics 48 Pack AA High-Performance Alkaline Batteries, 10-Year Shelf Life, Easy to Open Value Pack"
                    price={159.99}
                    image="https://m.media-amazon.com/images/I/71IdKRlm8+L._AC_UL320_.jpg"
                    rating={3}
                    />
                    <Product
                    id="00002"
                    title="HWH005 Motorcycle full face helmet double sun visor flip type modular helmet 【for head circumference from 54 to 59cm】【S-XL】"
                    price={1988.99}
                    image="https://ph-test-11.slatic.net/p/98aeb30e399f4c160672e4c6bcf45cda.jpg"
                    rating={4}
                    />
                </div>

                <div className="home__row">
                <Product
                    id="00003"
                    title="XIAOMI Mi Curved Gaming Monitor 34"
                    price={20990.00}
                    image="https://ph-test-11.slatic.net/p/cb7ef5b6fbec83b1bd562bac3f3e4c7a.jpg_200x200q90.jpg_.webp"
                    rating={2}
                    />
                    <Product
                    id="00004"
                    title="Sanptoch Ultra Slim 3 Color Hybrid Anti-slip Shockproof Phone Case for iphone 11 Pro Max X Xs Max XR Soft TPU Silicon Cover For iphone 7 8 6 6S Plus Protective Casing"
                    price={149.99}
                    image="https://ph-test-11.slatic.net/p/0ce48ad22f00cc6dd7c6e51567a24a64.jpg_200x200q90.jpg_.webp"
                    rating={5}
                    />
                    <Product
                    id="00005"
                    title="New Version of Youlta QQS 2021 The best korean fashion shoes for women"
                    price={219.99}
                    image="https://ph-test-11.slatic.net/p/d292f28f596d93ec9ea906e509801ee2.jpg_200x200q90.jpg_.webp"
                    rating={4}
                    />
                </div>

                <div className="home__row">
                <Product
                    id="00006"
                    title="VICTSING PC259 Mechanical Keyboard RGB USB Wired Gaming Keybaord Blue Switch With 96 Keycaps Customized RGB Backlit For PC Gamer"
                    price={3390.00}
                    image="https://ph-test-11.slatic.net/p/9af5a818aed9356c2ba2c0e85a8f4cbc.jpg_200x200q90.jpg_.webp"
                    rating={1}
                    />
                </div>
            </div>

            
        </div>
    )
}

export default Home
