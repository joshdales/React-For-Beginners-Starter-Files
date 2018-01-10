import React from 'react';
import { formatPrice } from '../helpers'

class Order extends React.Component {
  render() {
    const { fishes, order } = this.props;
    const orderIDs = Object.keys(order);
    const total = orderIDs.reduce((prevTotal, key) => {
      const fish = fishes[key];
      const count = order[key];
      const isAvailable = fish && fish.status === 'available';

      if (isAvailable) {
        return prevTotal + (count * fish.price || 0);
      }
      return prevTotal
    }, 0);
    return (
      <div className="order-wrap">
        <h2>Your Order</h2>
        {formatPrice(total)}
      </div>
    );
  };
};

export default Order
