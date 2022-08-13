import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../modules';

export const renderWithRedux = (component) => {
  const store = configureStore({ reducer: rootReducer });
  const reduxComponent = <Provider store={store}>{component}</Provider>;

  return render(reduxComponent);
};
