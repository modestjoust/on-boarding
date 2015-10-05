import React from 'react';
import LanguageButton from './LanguageButton.js'


var LanguageTable = React.createClass({
    handleLanguageSelect: function(languageKey) {
        var languageKey = languageKey
        this.props.handleLanguageSelect(languageKey)
    },
    populateTableRow: function(startIndex) {
        let tableRow = [];
        for (var i = startIndex; i < startIndex + 3; i++) {
            tableRow.push(<LanguageButton language={this.props.languages[i]}
                            languageKey={i}
                            languages={this.props.languages}
                            isSelected={this.props.languagesSelected[i]}
                            learning={this.props.learning}
                            handleLanguageSelect={this.handleLanguageSelect}/>)
        }
        return (<tr>{tableRow}</tr>)
    },
    render: function() {
        //let languageArray = [];
        let languageTable = [];
        //var tdCounter = 0;
        //get 'length' of languages
        var numberLanguages = this.props.languages.length
        var rowsNeeded = Math.ceil(numberLanguages / 3)

/*
        for (var key in this.props.languages) {
            languageArray.push(this.props.languages[key])
            tdCounter++

            //console.log(this.props.languages[key].name)// + 'pushed in row ' + tdCounter/3 + ', column ' + tdCounter%3)
        }
*/
        //console.log(tdCounter)

        for (var row = 0; row < rowsNeeded; row += 1) {
            languageTable.push(this.populateTableRow(row*3))
        }

        return (
            <div className='languageTableWrapper'>

                <table className='languageTable'>
                    {languageTable}
                </table>

            </div>
        )
    }
})

export default LanguageTable;
