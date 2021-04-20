import React from 'react'
import "./Payment.css"
import {useStateValue} from "./StateProvider"
import BasketItem from "./BasketItem"
import {Link} from "react-router-dom"
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'

function Payment() {
    const[{basket, user}, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useStateValue(null);
    const [disabled, setDisabled] = useStateValue(true);

    const handlePayment = e => {

    }

    const handlePaymentChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>Checkout (<Link to="/checkout">{basket?.length} items</Link>)</h1>
                
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 San Francisco St</p>
                        <p>San Francisco, CA</p>
                    </div>
                </div>
                
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review itens and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item=>(
                            <BasketItem 
                                id={item.id} 
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}    
                            />
                        ))}
                    </div>
                </div>
                
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment method</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handlePayment}>
                            <CardElement onChange={handlePaymentChange}></CardElement>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
