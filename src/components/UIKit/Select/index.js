import React from 'react';
import shortid from 'shortid';

export class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  onChange = (e) => {
    this.setState({ value: e.target.value });
    this.props.onChange(e.target.value);
  }

  getOptions() {
    const { options } = this.props;
    return options && options.map((item) =>
      <option key={shortid.generate()} value={item}>{item}</option>
    );
  }

  render() {
    const {
      name
    } = this.props;
    return (
      <select value={this.state.value} name={name} onChange={this.onChange} className="">
        {this.getOptions()}
      </select>
    );
  }
}

export default Select;
