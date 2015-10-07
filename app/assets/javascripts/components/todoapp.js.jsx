var TodoApp = React.createClass({
    getInitialState: function(){
        return {items: []};
    },
      removeItem: function(){
      console.log(this.props.x)
    },

    updateItems: function(item){
        this.setState({items: this.state.items.concat([item])});
    },
    render: function(){
        return (
            <div>
                <TodoList items={this.state.items}/>
                <TodoForm onFormSubmit={this.updateItems}/>
            </div>
        );
    }
});






