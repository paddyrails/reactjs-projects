import React from 'react';
import IssueTable from './IssueTable';
import IssueFilter from './IssueFilter';
import IssueAdd from './IssueAdd';
import {
  withRouter
} from 'react-router-dom'



const issues = [
  {
    id: 1, status: 'open', owner:'Ravan',
    created: new Date('2016-08-15'), effort: 5, completionDate: undefined,
    title: 'Error in console when clicking Add'
  },
  {
    id: 2, status: 'open', owner:'George',
    created: new Date('2016-05-12'), effort: 6, completionDate: new Date('2016-06-18'),
    title: 'Missing bottom border'
  }
]

class IssueList extends React.Component{
  constructor(props){
    super(props);
    this.state = { issues: []};
    //this.createTestIssue = this.createTestIssue.bind(this);
    setTimeout(this.createTestIssue.bind(this), 2000);
  }

  componentDidMount(){
    this.loadData();
  }
  componentDidUpdate(prevprops){
    const oldQuery = prevprops.location.query;
    const newQuery = this.props.location.query;
    console.log(newQuery);
  }
  loadData(){
    setTimeout(()=>{
      this.setState({issues:issues});
    }, 500);
  }

  createIssue = (newIssue) => {
    const newIssues = this.state.issues.slice();
    newIssue.id = this.state.issues.length + 1;
    newIssues.push(newIssue);
    this.setState({issues: newIssues});
  }

  DeleteIssue = (issue) => {
    let newIssues = this.state.issues.slice();
    newIssues = newIssues.filter(newIssue => newIssue.id !== issue.id)
    this.setState({issues: newIssues});
  }

  createTestIssue = () => {
    this.createIssue({
      status:'New', owner:'Peter', created: new Date('2018-06-18'),
      title:'completionDate should be optional'
    })
  }

  setFilter = (query) => {
    console.log(query);
    console.log(this.props);
    if(query.status == undefined){
        this.props.history.push(this.props.location.pathname)
    }else{
      this.props.history.push(this.props.location.pathname + "?status=" + query.status)
    }

  }

  render(){
    return(
      <div>
        <h1>Issue Tracker</h1>
        <IssueFilter setFilter={this.setFilter}/>
        <hr/>
        <IssueTable issues={this.state.issues} onDeleteClick={this.DeleteIssue} />
        //<button onClick={this.createTestIssue}>Add</button>

        <hr/>
        <IssueAdd createIssue={this.createIssue}/>
      </div>
    )
  }
}

export default withRouter(IssueList);
