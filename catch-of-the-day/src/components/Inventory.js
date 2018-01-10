import React from 'react';
import AddFishForm from './AddFishForm'

class Inventory extends React.Component {

  renderInventory(key) {
    return (
      <div className="fish-edit" key={key}>
        <input type="text" name="name" placeholder="Fish name" />
        <input type="text" name="price" placeholder="Fish price" />
        <select type="text" name="status" placeholder="Fish status">
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" placeholder="Fish desc" />
        <input type="text" name="image" placeholder="Fish image" />
      </div>
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
