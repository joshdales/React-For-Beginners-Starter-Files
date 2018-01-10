import React from 'react';
import AddFishForm from './AddFishForm'

class Inventory extends React.Component {

  renderInventory(key) {
    return (
      <div className="fish-edit" key={key}></div>
    )
  }

  render() {
    return(
      <section>
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map(this.renderInventory)}
        <AddFishForm addFish={this.props.addFish}/>
        <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
      </section>
    );
  };
};

export default Inventory;
