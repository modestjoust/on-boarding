import React from 'react';

var StepFive = React.createClass({
    handleStepChange: function(event) {
        var nextCompState = this.props.compState;
        if (event.target.id === 'nextButton') {
            nextCompState += 1;
        } else {
            nextCompState -= 1;
        }
        this.props.handleStepChange(nextCompState);
    },
    render: function() {
        var learnList = this.props.willLearn.map(function(language) {
            return language += ' '
        })
        var teachList = this.props.willTeach.map(function(language) {
            return language += ' '
        })
        return (
            <div>
                <div>Verify details:</div>
                <p>Username: {this.props.username}</p>
                <p>Learning: {learnList}</p>
                <p>Teaching: {teachList}</p>
                <input type='submit' value='Previous' id='backButton' onClick={this.handleStepChange}/>
                <input type='submit' value='Next' id='nextButton' onClick={this.handleStepChange}/>
            </div>
        )
    }
})

export default StepFive;
