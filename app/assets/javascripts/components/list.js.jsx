var TodoList = React.createClass({

  render: function() {
    var createItem = function(description) {
      return (
        <TodoListItem>{description}</TodoListItem>
      );
    };
    return <ul><p>{this.props.items.map(createItem)}</p></ul>;
  }
});
