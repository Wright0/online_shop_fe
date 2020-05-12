import React from 'react';
import DeliveriesContainer from './DeliveriesContainer.js'
import OrdersContainer from './OrdersContainer.js'
import AdminPortalNav from '../AdminPortalNav.js'

function OrderDeliveryContainer() {
  return (
    <>
    <h1>I am the entire order and delivery container</h1>
    <p>This will have the delivery container on top and the orders container at the bottom. They will have their own subcomponents</p>
    <DeliveriesContainer/>
    <OrdersContainer/>
    </>
  );
}

export default OrderDeliveryContainer;
