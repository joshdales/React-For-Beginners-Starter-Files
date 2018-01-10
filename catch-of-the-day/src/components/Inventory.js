import React from 'react';
import AddFishForm from './AddFishForm'

class Inventory extends React.Component {
  constructor() {
    super();
    this.renderInventory = this.renderInventory.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(e, key) {
    const fish = this.props.fishes[key];
    console.log(fish);
  };

  renderInventory(key) {
    const fish = this.props.fishes[key];

    return (
      <div className="fish-edit" key={key}>
        <input type="text" name="name" value={fish.name} placeholder="Fish name" onChange={(e) => this.handleChange(e, key)}/>
        <input type="text" name="price" value={fish.price} placeholder="Fish price" />
        <select type="text" name="status" value={fish.status} placeholder="Fish status">
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" value={fish.desc} placeholder="Fish desc" />
        <input type="text" name="image" value={fish.image} placeholder="Fish image" />
      </div>
    );
  };

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
