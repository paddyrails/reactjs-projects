import React from 'react';
import { Link } from 'react-router-dom';

class IssueFilter extends React.Component{
  constructor(){
    super();
  }

  clearFilter =(e) =>{
    e.preventDefault();
    console.log(this.props);
    this.props.setFilter({});
  }

  setFilterOpen = (e) => {
    e.preventDefault();
    this.props.setFilter({status:'Open'});
  }

  setFilterAssigned = (e) => {
    e.preventDefault();
    this.props.setFilter({status:'Assigned'});
  }

  render(){
    const Separator = () => <span> | </span>
    return(
      <div>
        <a href="#" onClick={this.clearFilter}>All Issues</a>
        <Separator/>
        <a href="#" onClick={this.setFilterOpen}>Open Issues</a>
        <Separator/>
        <a href="#" onClick={this.setFilterAssigned}>Assigned</a>
      </div>
    )
  }
}

export default IssueFilter;


// <Link to="/issues">All Issues</Link>
// <Separator/>
// <Link to={{ pathname: '/issues', query: {status: 'Open'} }}>Open Issues</Link>
// <Separator/>
// <Link to="/issues?status=Assigned">Assigned Issues</Link>
