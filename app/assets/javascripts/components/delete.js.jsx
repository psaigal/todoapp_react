var DeleteButton = React.createClass({

  onClick: function(e){
    e.preventdefault();
    {this.props.removeItem};

  },
    render: function(){
      return <button onClick={this.removeItem}> delete </button>;
    }
});



// NOT COMPLETE
