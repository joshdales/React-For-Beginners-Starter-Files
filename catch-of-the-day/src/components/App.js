import React from 'react';
import Header from './Header';
import Fish from './Fish';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
  constructor(){
    super();
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.state = {
      fishes: {},
      order: {}
    };
  };

  addFish(fish) {
    const fishes = {...this.state.fishes};
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    this.setState({fishes});
  };

  loadSamples() {
    this.setState({
      fishes: sampleFishes
    });
  };
  render() {
    const { fishes, order } = this.state
    return (
      <div className = 'catch-of-the-day'>
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
          <ul className="list-of-items">
            {Object.keys(fishes)
              .map(fish => <Fish key={fish} fish={fishes[fish]}/>
            )}
          </ul>
        </div>
        <Order/>
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
      </div>
    );
  };
};

export default App;
