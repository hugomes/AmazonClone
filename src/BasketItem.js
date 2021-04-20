import React from 'react'
import './BasketItem.css'
import {useStateValue} from "./StateProvider";

function BasketItem({id, image, title, price, rating, idx}) {
    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            idx: idx
        })
    }
    return (
        <div className="basketItem">
            <img className="basketItem__image" src={image}></img>
            <div className="basketItem__info">
                <p className="baskeyItem__title">{title}</p>
                <p className="basketItem__price">
                    <small>$</small>
                    <strong>{price}</strong>
                    <div className="basketItem__rating">
                        {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>*</p>
                        ))}
                    </div>
                </p>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default BasketItem
