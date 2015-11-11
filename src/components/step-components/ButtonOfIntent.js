import React from "react";

var ButtonOfIntent = React.createClass({
    getInitialState: function(){
        return {
            isHovered: false
        }
    },
    handleClick: function(evt) {
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
    },
    render: function() {
        var cx = React.addons.classSet;
        var classes = cx({
            'button-of-intent': true,
            'isSelected': this.props.isSelected,
            'isHovered': this.state.isHovered
        })
        var content = this.props.title
        return (
            <div className={classes} title={this.props.title}
            isSelected={this.props.isSelected} onClick={this.handleClick}
            onMouseEnter={this.handleIsHovered} onMouseLeave={this.handleNotHovered}>
                {content}
            </div>
        );
    }
})

export default ButtonOfIntent;
