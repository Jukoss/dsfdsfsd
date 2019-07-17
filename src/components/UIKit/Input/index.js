import React from 'react';

import './_index.scss';

export class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.value || '' };
  }
  onChange = (e) => {
    this.setState({ value: e.target.value });
    this.props.onChange(e.target.value);
  }
  render() {
    const {
      name, placeholder
    } = this.props;
    return (
      <input
        type="text"
        value={this.state.value}
        name={name}
        onChange={this.onChange}
        placeholder={placeholder}
      />
    );
  }
}


export default Input;
