import React from 'react';
import LanguageButton from './LanguageButton.js'


var LanguageTable = React.createClass({
    handleLanguageSelect: function(language) {
        var language = language
        this.props.handleLanguageSelect(language)
    },
    populateTableRow: function(startIndex, languageArray) {
        let tableRow = [];
        for (var i = startIndex; i < startIndex + 3; i++) {
            tableRow.push(<LanguageButton language={languageArray[i-1]}
                            languages={this.props.languages}
                            learning={this.props.learning}
                            handleLanguageSelect={this.handleLanguageSelect}/>)
        }
        return (<tr>{tableRow}</tr>)
    },
    render: function() {
        let languageArray = [];
        let languageTable = [];
        var tdCounter = 0;
        //get 'length' of languages
        for (var key in this.props.languages) {
            languageArray.push(this.props.languages[key])
            tdCounter++

            //console.log(this.props.languages[key].name)// + 'pushed in row ' + tdCounter/3 + ', column ' + tdCounter%3)
        }
        //console.log(tdCounter)

        for (var i = 1; i < tdCounter; i += 3) {
            languageTable.push(this.populateTableRow(i, languageArray))
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
