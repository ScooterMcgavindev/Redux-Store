# Redux Challange

For this unit, we’ll be creating a loyalty card tracker for a supermarket chain. The user of our application should be able to create new markets and add or delete loyalty cards from each them. We’ll want to be able to track the total number of markets, total number of cards, and distribution metrics of cards across all the markets.

The application should have the following hierarchical structure:

```js
|-- App
  |-- MainContainer
      |-- TotalsDisplay
      |-- MarketsContainer
          |-- MarketCreator
          |—- MarketsDisplay
              |—- Market
```

```
Types:                      Payload:
  * ADD_CARD                    * marketId
  * DELETE_CARD                 * totalCards
  * CREATE_MARKET               * market
  * SET_NEW_LOCATION            * location
```

---

It should have the following functionality:

- [ ] If you enter a location name and click “Add Market”, you should see a new Market card and the Total Markets value should increment by one. Add at least six of these.

- [ ] If you click on “Add Card” on a given Market card, you should see the Cards and % of total update. You should also see Total Cards increment by one.

- [ ] If you click on “Delete” Card on a given Market card, you should see the Cards and % of total update. You should also see “Total Cards” decrement by one.

- [ ] Inspect your page and go to the Redux tab. Watch the state updates in the Devtools as you add and remove cards.

# Extensions

1. Use Immutable.js to ensure that state never gets mutated.

2. Store market and loyalty card data in a database of your choice and fetch them onload.

3. Refactor your Node-React calendar to use React-Redux
