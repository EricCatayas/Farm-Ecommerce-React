import React, { PropsWithChildren } from "react";
import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { rootReducer } from "../src/redux/root.reducer";
import { Provider } from "react-redux";
import type { RenderOptions } from "@testing-library/react";

import type { store, RootState } from "../src/redux/store";

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
export interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: Partial<RootState>;
  store?: typeof store;
}

export function setupStore(preloadedState?: Partial<RootState>): EnhancedStore<RootState> {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}


/**
 * Render a component with Redux store provider.
 * Create a new Redux store instance every time it's called, with an optional preloadedState value that can be used for an initial value
 * 
 * @param {Object} [preloadedState] - Optional preloaded state for the Redux store.
 * @param {Object} [extendedRenderoptions] - Additional options to pass to RTL's original render function.
 * @link https://redux.js.org/usage/writing-tests
 * @returns {RenderResult} - The result of rendering the component with Redux store provider.
 */
export function renderWithProviders(
  ui: React.ReactElement,
  extendedRenderOptions: ExtendedRenderOptions = {}
) {
  const {
    preloadedState = {},
    store = setupStore(preloadedState), // Automatically create a store instance if no store was passed in
    ...renderOptions
  } = extendedRenderOptions;

  const Wrapper = ({ children }: PropsWithChildren) => (
    <Provider store={store}>{children}</Provider>
  );

  // Return an object with the store and all of RTL's query functions
  return {
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}
