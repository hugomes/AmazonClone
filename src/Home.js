import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://i.pinimg.com/originals/a2/34/c2/a234c2f4f5b82db1b5a4acc7d0575480.jpg" />
                <div className="home__row">
                    <Product 
                        id="1"
                        title="The Lean Startup" 
                        image="https://m.media-amazon.com/images/I/51N-u8AsmdL.jpg"
                        price={19.99}
                        rating={4}></Product>
                    <Product 
                        id="2"
                        title="Fire HD 8" 
                        image="https://m.media-amazon.com/images/I/41amqZKeqdL._AA210_.jpg"
                        price={59.99}
                        rating={5}></Product>
                </div>
                <div className="home__row">
                    <Product 
                        id="3"
                        title="Fire HD 10 Kids" 
                        image="https://m.media-amazon.com/images/I/51fbyrbe2UL._AA210_.jpg"
                        price={129.99}
                        rating={4}></Product>
                    <Product 
                        id="4"
                        title="Echo Auto" 
                        image="https://m.media-amazon.com/images/I/31X1pWv1CXL._AA210_.jpg"
                        price={29.99}
                        rating={3}></Product>
                    <Product 
                        id="5"
                        title="Echo Dot" 
                        image="https://m.media-amazon.com/images/I/4122o1SPZtL._AA210_.jpg"
                        price={39.99}
                        rating={3}></Product>
                </div>
                <div className="home__row">
                <Product 
                        id="6"
                        title="Fire TV Stick 4K" 
                        image="https://m.media-amazon.com/images/I/31gFK-y4+ZL._AA210_.jpg"
                        price={19.99}
                        rating={5}></Product>
                </div>
            </div>

        </div>
    )
}

export default Home
