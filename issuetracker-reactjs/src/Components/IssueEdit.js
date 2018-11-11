import React from 'react';
import { Link } from 'react-router-dom';

class IssueEdit extends React.Component{
  render(){
    return(
      <React.Fragment>
        <div>Place Holder to edit issue {this.props.match.params.id}</div>
        <Link to="/issues"> Back to issue list! </Link>
      </React.Fragment>
    );
  }
}

// IssueEdit.propTypes = {
//   params : React.PropTypes.object.isRequired,
// };

export default IssueEdit;
