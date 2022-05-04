/** Actions for the loyalty card tracker for a supermarket chain */

/**
 * Action Constants
 * export const ACTION_DESCRIPTION = "ACTION_DESCRIPTION";
 */
export const ADD_CARD = 'ADD_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const CREATE_MARKET = 'CREATE_MARKET';
export const SET_NEW_LOCATION = 'SET_NEW_LOCATION';

/** Action */
// {
//   type: ADD_CARD,
//   payload: {
//     id: marketId
//   }
// }

/**
 * Action Creators:
 * Add_CARD
 * DELETE_CARD
 * CREATE_MARKET
 * SET_NEW_LOCATION
 */

export const addCardActionCreator = marketId => ({
  type: ADD_CARD,
  payload: {
    id: marketId,
  },
});

export const deleteCardActionCreator = totalCards => ({
  type: DELETE_CARD,
  payload: {
    id: totalCards,
  },
});
export const addMarketCardActionCreator = market => ({
  type: ADD_CARD,
  payload: {
    id: market,
  },
});
export const setNewLocationActionCreator = location => ({
  type: SET_NEW_LOCATION,
  payload: {
    id: location,
  },
});
