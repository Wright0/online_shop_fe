import React from 'react';

function OrdersContainer() {
  return (
    <>
    <h2>I am the orders container. I will have:</h2>
    <ul>
      <li>a table(?) of *Order* components which can be filtered in a number of ways. The default would be show all.</li>
      <li>The status can be edited here manually, though would happen automatically with certain actions.</li>
      <li>An order's delivery day can be manually changed, though is automaticaly given</li>
      <li>An order can be deleted, but not edited.</li>
    </ul>
    </>
  );
}

export default OrdersContainer;
