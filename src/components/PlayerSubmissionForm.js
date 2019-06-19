import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);
    this.field1 = React.createRef();
    this.field2 = React.createRef();
    this.field3 = React.createRef();
    this.field4 = React.createRef();
    this.field5 = React.createRef();
    this.field6 = React.createRef();
  }

  onFormSubmit = (event) => {
    console.log("hello")
    event.preventDefault();

    const newSubmission = {
      field1: this.field1.current.value,
      field2: this.field2.current.value,
      field3: this.field3.current.value,
      field4: this.field4.current.value,
      field5: this.field5.current.value,
      field6: this.field6.current.value,
    }

    this.field1.current.value = '';
    this.field2.current.value = '';
    this.field3.current.value = '';
    this.field4.current.value = '';
    this.field5.current.value = '';
    this.field6.current.value = '';

    this.props.playerSubmissionCallback(newSubmission);
  }

  // onFieldChange = (event) => {
  //   this.setState({
  //     [event.target.name]: event.target.value,
  //   });
  // }

  render() {

    return (
      <div className="PlayerSubmissionForm">
        <h3>Player Submission Form for Player #{this.props.playerNumber}</h3>

        <form className="PlayerSubmissionForm__form" onSubmit={this.onFormSubmit}>

          <div className="PlayerSubmissionForm__poem-inputs">
            The
            <input
              placeholder="adjective"
              //name="field1"
              //onChange={this.onFieldChange}
              ref={this.field1}
              type="text" />
            <input
              placeholder="noun"
              //name="field2"
              ref={this.field2}
              type="text" />
            <input
              placeholder="adverb"
              //name="field3"
              ref={this.field3}
              type="text" />
            <input
              placeholder="verb"
              //name="field4"
              ref={this.field4}
              type="text" />
            the
            <input
              placeholder="adjective"
              //name="field5"
              ref={this.field5}
              type="text" />
            <input
              placeholder="noun"
              //name="field6"
              ref={this.field6}
              type="text" />.

          </div>

          <div className="PlayerSubmissionForm__submit">
            <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
          </div>
        </form>
      </div>
    );
  }
}

export default PlayerSubmissionForm;
