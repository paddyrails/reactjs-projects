import React from 'react';

const PortfolioList = ({ portfolios }) => {
  return (

      <table>
          <th>Portfolio Name</th>
          <th>Description</th>
          <th>Managed By</th>
          {portfolios.map(portfolio => {
            return(
              <tr>
                  <td>{portfolio.name}</td>
                  <td>{portfolio.description}</td>
                  <td>{portfolio.managedbyuser}</td>
              </tr>
            );
          })}
    </table>
  );
}

export default PortfolioList;
