import React from 'react';
import TradingBook from './TradingBook';
import PortfolioList from './PortfolioList';
import TransactionList from './TransactionList';
import * as actions from '../actions.js';
import configureStore from '../store';


class TradingBookList extends React.Component{
  constructor(props) {
    super(props);
    this.store = configureStore();
    this.state = this.store.getState();
  }

  selectBook = (book) => {
    this.store.dispatch(actions.fetchPortfolios(book.idtradingbook));
    this.store.dispatch(actions.updateCurrentBook(book));
    this.store.dispatch(actions.fetchTransactions(book.idtradingbook));
  }

  componentDidMount(){
    this.unsubscribe = this.store.subscribe(()=>{
      this.setState(this.store.getState());
    });
    this.store.dispatch(actions.fetchTradingBooks());
  }

  componentWillUnmount(){
    this.unsubscribe();    
  }

  filterList = (event) => {
    let updatedList = this.state.initialtradingbooks;
    updatedList = updatedList.filter(function(book){
      return book.name.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });

    this.store.dispatch(actions.updateCurrentBookList(updatedList));
  }


  render() {
    return (
      <React.Fragment>
        <table width="100%" margin="0px">
        <tbody>
        <tr>
          <td width="20%">
              <form>
                <fieldset className="form-group">
                  <input type="text" className="form-control form-control-lg" placeholder="Search" onChange={this.filterList}/>
                </fieldset>
              </form>
          </td>
          <td width="40%" valign="top">
            <h2>{this.state.currentBook.name}</h2>
          </td>
          <td width="40%" valign="top"></td>
        </tr>
        <tr>
          <td width="20%">
            <div class="bar">
              <ul className="trading-book-list">
                {this.state.tradingbooks.map(book => {
                  return (
                    <TradingBook key={book.idtradingbook}
                                 book = {book}
                                 handleSelect = {this.selectBook} />
                  );
                })}
              </ul>
            </div>
          </td>
          <td width="40%" valign="top">
            <div class="Portfolio">
              <PortfolioList portfolios={this.state.portfolios} />
            </div>
          </td>
          <td width="40%" valign="top">
            <div class="Transactions">
            <TransactionList transactions={this.state.transactions} />
          </div>
          </td>
        </tr>
        </tbody>
      </table>
      </React.Fragment>
    );
  }
}

export default TradingBookList;
