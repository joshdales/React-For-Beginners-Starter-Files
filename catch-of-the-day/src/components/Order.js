import React from 'react';
import { formatPrice } from '../helpers'

class Order extends React.Component {
  renderOrder(key) {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];

    if (!fish || fish.status == 'unavailable') {
      return <li key={key}>Sorry, {fish ? fish.name : 'fish'} is no longer unavailable</li>
    }
  }

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
        <ul className="order">
          {orderIDs.map(this.renderOrder)}
          <li className="total">
            <strong>Total:</strong>
            {formatPrice(total)}
          </li>
        </ul>
      </div>
    );
  };
};

export default Order
