/** Renders MarketContainer and the TotalDisplay */

import React from 'react';
import MarketsContainer from './MarketsContainer';
import { connect } from 'react-redux';
import '../styles.css';
import TotalDisplay from '../components/TotalDisplay';
function MainContainer() {
  return (
    <div className='container'>
      <div className='outerBox'>
        <h1 id='header'>MegaMarket Loyalty Cards</h1>
        <TotalDisplay
          totalMarkets={this.props.totalMarkets}
          totalCards={this.props.totalCards}
        />
        <MarketsContainer />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  totalMarkets: state.markets.totalMarkets,
  totalCards: state.markets.totalCards,
});

export default connect(mapStateToProps, null)(MainContainer);
