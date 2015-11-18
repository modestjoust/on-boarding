import React from 'react';
import LanguageButton from './LanguageButton.js'
import _ from 'lodash'


var LanguageTable = React.createClass({
    handleLanguageSelect: function(languageKey) {
        var languageKey = languageKey
        this.props.handleLanguageSelect(languageKey)
    },
    checkIfLanguageSelected: function(language) {
        if (this.props.learning) {
            return _.includes(this.props.willLearn, language)
        } else {
            return _.includes(this.props.willTeach, language)
        }
    },
    populateTableRow: function(startIndex) {
        let tableRow = [];
        for (var i = startIndex; i < startIndex + 3; i++) {
            tableRow.push(<LanguageButton language={this.props.languages[i]}
                            languageKey={i}
                            key={i}
                            languages={this.props.languages}
                            isSelected={this.checkIfLanguageSelected(this.props.languages[i])}
                            learning={this.props.learning}
                            handleLanguageSelect={this.handleLanguageSelect}/>)
        }
        return (<tr key={startIndex}>{tableRow}</tr>)
    },
    render: function() {
        let languageTable = [];
        var numberLanguages = this.props.languages.length
        var rowsNeeded = Math.ceil(numberLanguages / 3)

        for (var row = 0; row < rowsNeeded; row += 1) {
            languageTable.push(this.populateTableRow(row*3))
        }

        return (
            <div className='languageTableWrapper'>
              <table className='languageTable'>
                <tbody>
                    {languageTable}
                </tbody>
              </table>
            </div>
        )
    }
})

export default LanguageTable;
