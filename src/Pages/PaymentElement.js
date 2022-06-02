import React, { useState, useEffect } from 'react'
import Payment from './Payment'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { API } from '../config'

const PaymentElement = () => {
    const [stripeApiKey, setStripeApiKey] = useState('')
    useEffect(() => {

        return fetch(`${API}/stripeapikey`, {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => setStripeApiKey(data.stripeAPIKey))
            .catch(err => console.log(err))
    }
    )

    return (

        stripeApiKey &&
        <Elements stripe={loadStripe(stripeApiKey)}>
            <Payment />
        </Elements>

    )
}

export default PaymentElement