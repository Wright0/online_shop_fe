import React from 'react';

function DeliveriesContainer() {
  return (
    <>
    <h2>I am the deliveries container. I will have:</h2>
    <ul>
      <li>A table with the next 5 days worth of deliveries</li>
      <li>Each header will be the delivery day, inside will be the following information:</li>
      <li>number of deliveries</li>
      <li>Postal codes for deliveries</li>
      <li>A button to lock in the deliveries</li>
      <li>A button to see details for that day's deliveries(new page /deliveries/00-00-00(date)</li>
      <li>A button to print that day's deliveries or delivery itinerary?</li>
    </ul>
    </>
  );
}

export default DeliveriesContainer;
