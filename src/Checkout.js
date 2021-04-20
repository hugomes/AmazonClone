import React from 'react'
import BasketItem from './BasketItem'
import './Checkout.css'
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal'

function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="chekout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"></img>
                
                <div>
                    <h3>Hello {user && user?.email}</h3>
                    <h2 className="checkout__title">Your shopping basket</h2>

                    {basket.map((item, index)=>(
                        <BasketItem 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            idx={index}
                        />
                    ))}
                </div>
            </div>

            <div className="chekout__right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
