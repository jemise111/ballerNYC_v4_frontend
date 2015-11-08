import React from 'react';

const SelectorButton = React.createClass({

  setClasses() {
    const activeClassName = this.props.isActive ? 'active' : 'inactive';
    return 'selector-button ' + activeClassName;
  },

  render() {
    const props = this.props;
    const className = this.setClasses();
    return (
      <li onClick={props.setSelected.bind(null, props.text)} className={className}>
        <button className="btn btn-default">{props.text}</button>
      </li>
    );
  }

});

module.exports = SelectorButton;
