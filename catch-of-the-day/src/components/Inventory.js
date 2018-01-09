import React from 'react';
import AddFishForm from './AddFishForm'

class Inventory extends React.Component {
  render() {
    return(
      <section>
        <h2>Inventory</h2>
        <AddFishForm/>
      </section>
    );
  };
};

export default Inventory;
