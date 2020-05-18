import React from 'react';
import { Route } from 'react-router-dom';
import ProductContainer from './products/ProductContainer.js';
import OrderDeliveryContainer from './orders-deliveries/OrderDeliveryContainer.js';
import AdminPortal from './admin-portal/AdminPortal.js';

function AdminContainer() {

    return (
        <>
            <Route exact path="/admin" render={ () =>
                <AdminPortal/>
            }/>

            <Route exact path="/admin/products" render={ () => 
                <ProductContainer/>
            }/>

            <Route exact path="/admin/orders-and-deliveries" render={ () =>
                <OrderDeliveryContainer/>
            }/>
        </>
    )

}

export default AdminContainer;