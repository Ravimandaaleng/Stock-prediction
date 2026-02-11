import React from 'react'
import Button from './Button'
const Main = () => {
  return (
    <>
    <div className='container bg-light-dark rounded'>
        <div className='p-5 text-center'>
            <h1 className='text-light'>Welcome to Stock Prediction Portal</h1>
            <p className='text-light'>Predict stock prices with our advanced AI models.This model is similar to the ESN model in the sense that it can predict stock prices with high accuracy. The model works by capturing historical trend patterns to predict future values with RNN for learning long-term dependencies. Therefore, the LSTM model is used for processing and predicting time-series data</p>
            <Button text="Get Started" class="btn-outline-info" url="/dashboard"/>
        </div>
    </div>
    </>
  )
}

export default Main
