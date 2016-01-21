import React from 'react';

var LanguageButton = React.createClass({
    getInitialState: function() {
        return {
            isHovered: false
        }
    },
    handleIsHovered: function(event) {
        this.setState({isHovered: true})
    },
    handleNotHovered: function(event) {
        this.setState({isHovered: false})
    },
    handleLanguageSelect: function(event) {
        var languageKey = this.props.languageKey
        this.props.handleLanguageSelect(languageKey)
    },
    render: function() {
        var content = this.props.language

        return (
          <td title={this.props.language}
              isSelected={false} onClick={this.handleLanguageSelect}
              onMouseEnter={this.handleIsHovered} onMouseLeave={this.handleNotHovered}>
            {content}
          </td>
        );
    }
})

export default LanguageButton;
