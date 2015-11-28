'use strict';

import React from 'react';

export default class SignUpForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hasText: {
                'name': false,
                'hours': false
            },
            value: {},
            error: {}
        };
    }

    onInputChange(inputKey, e) {
        var hasTextState = this.state.hasText;
        var valueState = this.state.value;
        valueState[inputKey] = e.target.value;
        if (e.target.value.length && !this.state.hasText[inputKey]) {
            hasTextState[inputKey] = true;
            this.setState({
                hasText: hasTextState,
                value: valueState
            });
        } else if (!e.target.value.length && this.state.hasText[inputKey]) {
            hasTextState[inputKey] = false;
            this.setState({
                hasText: hasTextState,
                value: valueState
            });
        } else {
            this.setState({
                value: valueState
            });
        }
    }

    onSignUpSubmit(e) {
        e.preventDefault();
        var errorState = {};
        Object.keys(this.state.hasText).map( k => {
            if (!this.state.value[k] || !this.state.value[k].length) {
                errorState[k] = true;
            }
        });

        if (Object.keys(errorState).length) {
            this.setState({error: errorState});
        } else {
            this.props.onSignUp(this.state.value);
        }
    }

    getLabelClass(inputKey) {
        if (this.state.hasText[inputKey]) {
            return 'hasText';
        } else if (this.state.error[inputKey]) {
            return 'required';
        }
    }

    render() {
        return (
            <div className="sign-up-form-wrapper">
                <h3>Sign Up To Play</h3>
                <form onSubmit={this.onSignUpSubmit.bind(this)}>
                    <div className="input-wrapper">
                        <label
                            htmlFor="name"
                            className={this.getLabelClass('name')}
                        >
                            Name
                        </label>
                        <input
                            name="name"
                            type="text"
                            onChange={this.onInputChange.bind(this, 'name')}
                        />
                    </div>

                    <div className="input-wrapper">
                        <label
                            htmlFor="hours"
                            className={this.getLabelClass('hours')}
                        >
                            How long? (hours)
                        </label>
                        <input
                            name="hours"
                            type="number"
                            onChange={this.onInputChange.bind(this, 'hours')}
                            min="0"
                            max="6"
                        />                    
                    </div>
                    <button className="submit-button" type="submit">
                        Start ballin <i className="material-icons send-icon">send</i>
                    </button>
                </form>
            </div>
        );
    }
}