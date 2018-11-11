import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import mainReducer from './reducers';

const configureStore = () => {
  return createStore(
    mainReducer,
    {initialtradingbooks:[],tradingbooks:[], currentBook:0, portfolios:[], transactions:[]},
    applyMiddleware(reduxPromise)
  )
};

export default configureStore;
