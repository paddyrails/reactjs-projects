import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Glyphicon } from 'react-bootstrap';
// IssueRow.propTypes = {
//   issue_id: React.PropTypes.number.isRequired,
//   issue_title: React.PropTypes.string
// };
const IssueRow = ({issue, onDeleteClick}) =>{

  const onDeleteClick1 = (e) =>{
    e.preventDefault();
    onDeleteClick(issue)
  }

  return(
    <tr>
      <td><Link to={`/issues/${issue.id}`}>{issue.id}</Link></td>
      <td>{issue.status}</td>
      <td>{issue.owner}</td>
      <td>{issue.created ? issue.created.toDateString() : ''}</td>
      <td>{issue.effort}</td>
      <td>{issue.completionDate ? issue.completionDate.toDateString() : ''}</td>
      <td>{issue.title}</td>
      <td>
      
      <Button bsSize="xsmall" onClick={onDeleteClick1}><Glyphicon glyph="trash" /></Button>
      </td>

    </tr>
  )
}

export default IssueRow;
