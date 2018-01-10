import React from 'react';

class Order extends React.Component {
  render() {
    const { fishes, order } = this.props
    return (
      <div className="order-wrap">
        <h2>Your Order</h2>
      </div>
    );
  };
};

export default Order
