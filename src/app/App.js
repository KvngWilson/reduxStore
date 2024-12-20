import React from 'react';

import { Inventory } from '../features/inventory/Inventory.js';
import { CurrencyFilter } from '../features/currencyFilter/CurrencyFilter.js';
import { SearchTerm } from '../features/searchTerm/SearchTerm.js';

// Import the Cart component here.
import { Cart } from '../features/cart/Cart.js';
// Render the Cart component below <Inventory />
export const App = (props) => {

  const { state, dispatch } = props;

  return (
    <div>
      <CurrencyFilter
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

      <Inventory
        inventory={state.inventory}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />

      <Cart 
        cart={state.Cart}
        currencyFilter={state.currencyFilter}
        dispatch={dispatch}
      />
      
      <SearchTerm 
        searchTerm={state.searchTerm}
        getFilteredItems={state.getFilteredItems}
        dispatch={dispatch}
      />
    </div>
  );
};
