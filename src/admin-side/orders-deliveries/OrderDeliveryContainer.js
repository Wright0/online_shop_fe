import React from 'react';
import DeliveriesContainer from './DeliveriesContainer.js'
import OrdersContainer from './OrdersContainer.js'

function OrderDeliveryContainer() {
  return (
    <>
    <h1>I am the entire order and delivery container</h1>
    <DeliveriesContainer/>
    <OrdersContainer/>
    </>
  );
}

export default OrderDeliveryContainer;
