const mainReducer = (state, action) => {
  switch (action.type) {
    case 'RECEIVE_BOOKS':
      return {
        ...state,
        initialtradingbooks: action.books,
        tradingbooks: action.books,
        currentBook: action.books[0]
      };
    case 'RECEIVE_PORTFOLIOS':
      return {
        ...state,
        portfolios: action.portfolios
      };
    case 'RECEIVE_TRANSACTIONS':
      return {
        ...state,
        transactions: action.transactions
      };
    case 'UPDATE_CURRENTBOOK':
      return{
        ...state,
        currentBook: action.book
      };
    case 'UPDATE_CURRENTBOOKLIST':
      return{
        ...state,
        tradingbooks: action.tradingbooks
      };
    default:
      return state;

  }
};

export default mainReducer;
