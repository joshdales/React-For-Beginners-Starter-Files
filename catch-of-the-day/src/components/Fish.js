import React from 'react';

class Fish extends React.Component {
  render() {
    const { name, price, status, desc, image } = this.props.fish;
    return (
      <li className="menu-fish">
        <img src={image} alt={name}/>
        <h3 className="fish-name">{name}
          <span className="price">{price}</span>
        </h3>
        <p>{desc}</p>
        <button>Add To Order</button>
      </li>
    );
  };
};

export default Fish;
