import React from 'react';

class Header extends React.Component {
  render () {
    const {tagline} = this.props
    return (
    <header className="top">
      <h1>Catch of the Day</h1>
      <h3 className="tagline">{tagline}</h3>
    </header>
  )};
};

export default Header;
