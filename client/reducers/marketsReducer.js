/**
 * The Reducer
 */

import {
  SET_NEW_LOCATION,
  CREATE_MARKET,
  DELETE_CARD,
  ADD_CARD,
} from '../actions/action';

const initialState = {
  totalMarkets: 0,
  totalCards: 0,
  marketList: [],
  lastMarketId: 10000,
  newLocation: '',
};

const marketsReducer = (state = initialState, action) => {
  let totalMarkets;
  let totalCards;
  let marketList;
  let lastMarketId;
  let newLocation;

  switch (action.type) {
    case CREATE_MARKET: {
      // increment counters: marketId and totallMarkets
      lastMarketId = state.lastMarketId + 1;
      totalMarkets = state.totalMarkets + 1;

      // creating new market object from provided data
      const newMarket = {
        MarketId: lastMarketId,
        Location: state.newLocation,
        Cards: 0,
        '% of total': 'placeholder for percentage of cards',
      };

      // We push the new market onto a copy of the market list
      marketList = state.marketList.slice();
      marketList.push(newMarket);

      // we then return the updated state
      return {
        ...state,
        marketList,
        lastMarketId,
        totalMarkets,
        newLocation: '',
      };
    }
    case SET_NEW_LOCATION:
      state.newLocation = action.payload.location;
      return {
        ...state,
        newLocation,
      };
    case ADD_CARD:
      totalCards = state.totalCards += 1;
      return {
        ...state,
        totalCards,
      };
    case DELETE_CARD:
      totalCards = state.totalCards -= 1;
      return {
        ...state,
        totalCards,
      };
    default: {
      return state;
    }
  }
};

export default marketsReducer;
