import React from 'react';
import IssueRow from './IssueRow';

const IssueTable = ({issues, onDeleteClick}) => {

    const onDeleteClick1 = (issue) =>{      
      onDeleteClick(issue)
    }


    const issueRows = issues.map(issue => <IssueRow key={issue.id} issue={issue} onDeleteClick={onDeleteClick1} />)
    return(
      <table className="bordered-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Status</th>
            <th>Owner</th>
            <th>Created</th>
            <th>Effort</th>
            <th>Completion Date</th>
            <th>Title</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {issueRows}
        </tbody>
      </table>
    )
  }


export default IssueTable;
