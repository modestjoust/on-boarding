import React from 'react';

var LanguageButton = React.createClass({
    getInitialState: function() {
        return {
            isHovered: false
        }
    },
    handleIsHovered: function(event) {
        console.log('hovering');
        this.setState({isHovered: true})
    },
    handleNotHovered: function(event) {
        console.log('not hovering');
        this.setState({isHovered: false})
    },
    handleLanguageSelect: function(event) {
        var language = event.target.title.toLowerCase().replace(" ", "")
        var languageKey = this.props.languageKey
        //this.props.handleLanguageSelect(language)
        this.props.handleLanguageSelect(languageKey)
    },
    render: function() {
        var cx = React.addons.classSet;
        //var languageKey = this.props.language.name.toLowerCase().replace(" ", "")
        //var classes = cx({
        //    'languageButton': true,
        //    'isHovered': this.state.isHovered
        //})
        if (this.props.learning) {
            var classes = cx({
                'languageButton': true,
                'isSelected': this.props.isSelected,
                'isHovered': this.state.isHovered
            })
        }
        else {
            var classes = cx({
                'languageButton': true,
                'isSelected': this.props.isSelected,
                'isHovered': this.state.isHovered
            })
        }

        var content = this.props.language//.name

        if (this.props.learning) {
            return (
                <td className={classes} title={this.props.language}
                isSelected={false} onClick={this.handleLanguageSelect}
                onMouseEnter={this.handleIsHovered} onMouseLeave={this.handleNotHovered}>
                    {content}
                </td>
            );
        }
        else {
            return (
                <td className={classes} title={this.props.language}
                isSelected={false} onClick={this.handleLanguageSelect}
                onMouseEnter={this.handleIsHovered} onMouseLeave={this.handleNotHovered}>
                    {content}
                </td>
            );
        }
    }
})

export default LanguageButton;
