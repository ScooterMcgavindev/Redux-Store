import React from 'react';
import '../styles.css';
function Market(props) {
  return (
    <div className='marketBox'>
      <p>MarketId : {props.marketId}</p>
      <p>Location : {props.location}</p>
      <p>Cards : {props.cards}</p>
      <p>% of total : {}</p>
      <div>
        {/* add card will update the "Cards" total. onClick will dispatch this action. */}
        {/* Delete cards will decrement the "Cards" total */}
        <button>Add Card</button> <button>Delete Card</button>
      </div>
    </div>
  );
}

/** Connect function to connect component to the store */
const mapStateToProps = state => ({
  marketID: state.markets.lastMarketID,
  location: state.markets.newLocation,
  cards: state.markets.totalCards,
});

const mapDispatchToProps = dispatch => ({
  //dispatch add card and delete card actions here
  // addCardActionCreator: marketID => dispatch(deleteCardActionCreator(marketID)),
  // deleteCardActionCreator: totalCards => dispatch(addReminder(totalCards)),
});

export default connect(mapStateToProps, null)(Market);
