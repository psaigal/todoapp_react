var TodoListItem = React.createClass({
  render: function(){
    return (
      <div>
      <li><p>{this.props.children}</p>
          <DeleteButton description={this.props.children}/>
      </li>
      </div>
    );
  }
});





