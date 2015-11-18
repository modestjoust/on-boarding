import React from "react";

var ButtonOfIntent = React.createClass({
  render: function() {
      var content = this.props.title
      return (
          <div title={this.props.title}
          isSelected={this.props.isSelected} onClick={this.handleClick}
          onMouseEnter={this.handleIsHovered} onMouseLeave={this.handleNotHovered}>
              {content}
          </div>
      );
  },
  getInitialState: function(){
    return {
      isHovered: false
    }
  },
  handleClick: function(event) {
    var intent = event.target.title;
    this.props.handleClick(intent)
  },
  handleIsHovered: function(event) {
    console.log('hovering');
    this.setState({isHovered: true})
  },
  handleNotHovered: function(event) {
    console.log('not hovering');
    this.setState({isHovered: false})
  }
})

export default ButtonOfIntent;
