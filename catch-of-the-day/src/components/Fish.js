import React from 'react';

class Fish extends React.Component {
  render() {
    const { name, price, status, desc, image } = this.props.fish;
    return (
      <li className="menu-fish">
        {name}
      </li>
    );
  };
};

export default Fish;
