import React from 'react';
import { connect } from 'react-redux';
function MarketCreator() {
  return (
    <div>
      <h4>Create New Market</h4>
      <input id='input'></input>
      <button>Add Market</button>
    </div>
  );
}
const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  addMarket: () => dispatch(addMarketCardActionCreator()),
  newLocation: () =>
    dispatch(
      setNewLocationActionCreator(document.getElementById('input').value)
    ),
});
export default MarketCreator;
