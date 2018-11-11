export const receiveBooks = (books) => ({
  type: 'RECEIVE_BOOKS',
  books
});

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}


export const fetchTradingBooks = () => {
  return fetch("http://localhost:8090/books")
    .then(handleErrors)
    .then(response => response.json())
    .then(books => {
      return receiveBooks(books);
    })
    .catch(error => console.log(error));
};

export const updateCurrentBook = (book) => ({
  type : 'UPDATE_CURRENTBOOK',
  book
});

export const updateCurrentBookList = (tradingbooks) => ({
  type : 'UPDATE_CURRENTBOOKLIST',
  tradingbooks
});

export const receivePortfolios = (portfolios) => ({
  type: 'RECEIVE_PORTFOLIOS',
  portfolios
});

export const fetchPortfolios = (idtradingbook) => {
  console.log("fetch portfolio for " + idtradingbook);
  return fetch(`http://localhost:8090/portfolios/${idtradingbook}`)
    .then(handleErrors)
    .then(response => response.json())
    .then(portfolios => {
      return receivePortfolios(portfolios);
    })
    .catch(error => console.log(error));
};

export const receiveTransactions = (transactions) => ({
  type: 'RECEIVE_TRANSACTIONS',
  transactions
});

export const fetchTransactions = (idtradingbook) => {
  return fetch(`http://localhost:8090/transactions/${idtradingbook}`)
    .then(handleErrors)
    .then(response => response.json())
    .then(transactions => {
      return receiveTransactions(transactions);
    })
    .catch(error => console.log(error));
};
