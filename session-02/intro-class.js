import React from 'react';

export default class MyCounter extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            counterNumber: 0
        };

    }

    increaseNumber() {

        // this.state.counterNumber = 4; WRONG!
        
        this.setState({
            counterNumber: this.state.counterNumber + 1
        });

        // this.setState((currentState, props) => {
        //     return {
        //         counterNumber: currentState.counterNumber + 1
        //     }
        // });

        // this.setState({ counterNumber: this.state.counterNumber + 1}, () => {

        // });


    }

    render() {

        const doubleOfCounter = this.state.counterNumber * 2;

        return <div>
            <p>My Counter Is: { this.state.counterNumber } and its double is { doubleOfCounter }</p>
            <button type="button" onClick={this.increaseNumber}>
                Increase Number
            </button>
        </div>
    
    }

}
