import React from 'react';

class IssueAdd extends React.Component{
  constructor(props){
    super(props);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let form = document.forms.issueAdd;
    this.props.createIssue({
      owner: form.owner.value,
      title: form.title.value,
      status: 'New',
      create: new Date('2018-06-18'),
    });
    //clear form
    form.owner.value =""; form.title.value = "";
  }

  render(){
    return(
      <div>
        <form name="issueAdd" onSubmit={this.handleSubmit}>
          <input type="text" name="owner" Placeholder="Owner" />
          <input type="text" name="title" Placeholder="Title" />
          <button>Add</button>
        </form>
      </div>
    )
  }
}

export default IssueAdd;
