/** Renders MarketCreator, MarketsDisplay*/
import React from 'react';
import { connect } from 'react-redux';
import MarketDisplay from '../components/MarketDisplay';
import '../styles.css';
const mapStateToProps = state => ({
  // provide pertinent state here
});

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  //handles MarketCreator's input from user
});

function MarketsContainer() {
  return (
    <div className='innerbox'>
      {/* add component */}
      <MarketDisplay />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MarketsContainer);
