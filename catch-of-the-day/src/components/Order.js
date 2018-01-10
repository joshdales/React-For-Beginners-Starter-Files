import React from 'react';
import { formatPrice } from '../helpers'
import CSSTransitionGroup from 'react-addons-css-transition-group';

class Order extends React.Component {
  constructor(){
    super();
    this.renderOrder = this.renderOrder.bind(this);
  }

  renderOrder(key) {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const removeButton = <button onClick={() => this.props.removeFromOrder(key)}>&times;</button>

    if (!fish || fish.status === 'unavailable') {
      return (
        <li key={key}>
          Sorry, {fish ? fish.name : 'fish'} is no longer unavailable
          {removeButton}
        </li>
    )};

    return (
      <li key={key}>
        <span>
          <CSSTransitionGroup
            component="span"
            className="count"
            tansitionName="count"
            transitionEnterTimeout={250}
            transitionLeaveTimeout={250}>
          <span key={count}>{count}lbs</span>
        </CSSTransitionGroup>
          {fish.name} {removeButton}</span>
        <span className="price">{formatPrice(count * fish.price)}</span>

      </li>

    )};

  render() {
    const { fishes, order, removeFromOrder } = this.props;
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
        <CSSTransitionGroup
          className="order"
          component="ul"
          transitionName="order"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {orderIDs.map(this.renderOrder)}
          <li className="total">
            <strong>Total:</strong>
            {formatPrice(total)}
          </li>
        </CSSTransitionGroup>
      </div>
    );
  };
};

export default Order
