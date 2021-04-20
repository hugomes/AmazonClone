import React from 'react';
import "./Product.css";
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';

function Product({id, title, price, image, rating}) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        //dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_,i) => (<StarIcon></StarIcon>))}                        
                </div>
            </div>
            <img src={image}></img>
            <button onClick={addToBasket} className="product__button">Add to Basket</button>
        </div>
    )
}

export default Product
