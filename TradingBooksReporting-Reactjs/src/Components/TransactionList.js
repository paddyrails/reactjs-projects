import React from 'react';

const TransactionList = ({ transactions }) => {

  return (

      <table>
          <th>Type</th>
          <th>Value</th>
          <th>Date</th>
          <th>Status</th>
          {transactions.map(transaction => {
            return(
              <tr>
                  <td>{transaction.transaction_type}</td>
                  <td>{new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD'
                    }).format(transaction.transaction_value)}</td>
                  <td>{transaction.transaction_date}</td>
                  <td>{transaction.status}</td>
              </tr>
            );
          })}
    </table>
  );
}

export default TransactionList;
