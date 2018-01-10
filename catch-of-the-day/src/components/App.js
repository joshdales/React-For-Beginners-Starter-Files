import React from 'react';
import Header from './Header';
import Fish from './Fish';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import base from '../base';

class App extends React.Component {
  constructor(){
    super();
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
    this.state = {
      fishes: {},
      order: {}
    };
  };

  componentWillMount(){
    this.ref = base.syncState(`${this.props.params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    });

    const localStorageRef = localStorage.getItem(`order-${[this.props.params.storeId]}`)

    if (localStorageRef) {
      this.setState({
        order: JSON.parse(localStorageRef)
      })
    }};


  componentWillUnmount() {
    base.removeBinding(this.ref)
  };

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem(`order-${this.props.params.storeId}`, JSON.stringify(nextState.order));
  };

  addFish(fish) {
    const fishes = {...this.state.fishes};
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    this.setState({ fishes });
  };

  addToOrder(key) {
    const order = {...this.state.order};
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
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
              .map(fish => <Fish key={fish} index={fish} fish={fishes[fish]} addToOrder={this.addToOrder}/>
            )}
          </ul>
        </div>
        <Order fishes={fishes} order={order} params={this.props.params}/>
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
      </div>
    );
  };
};

export default App;
