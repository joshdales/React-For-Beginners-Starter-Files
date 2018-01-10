import React from 'react';
import {formatPrice} from '../helpers';

class Fish extends React.Component {
  render() {
    const { name, price, status, desc, image } = this.props.fish;
    const { addToOrder, index } = this.props
    const isAvailable = status === 'available';
    const buttonText = isAvailable ? 'Add to Order' : 'Sold Out'

    return (
      <li className="menu-fish">
        <img src={image} alt={name}/>
        <h3 className="fish-name">{name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button disabled={!isAvailable} onClick={() => addToOrder(index)}>{buttonText}</button>
      </li>
    );
  };
};

export default Fish;
