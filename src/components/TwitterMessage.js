import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      word: ''
    };
  }

handleChange = event => {
  this.setState({word: event.target.value})
}

  render() {
    return (
      <div>
        <strong>Letters Left:{this.props.maxChars - this.state.word.length} Current State:{this.state.word}</strong>
        <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.word}/>
      </div>
    );
  }
}

export default TwitterMessage;
