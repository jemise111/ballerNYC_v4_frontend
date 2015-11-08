import React from 'react';
import SelectorButton from './SelectorButton';

const SelectorContainer = React.createClass({

  getInitialState() {
    return {
      selected: this.props.defaultSelected
    }
  },

  render() {
    const state = this.state;
    const props = this.props;

    const createSelector = function(selectorText, id) {
      var isActive = false;
      if (props.selected === selectorText) { isActive = true; }
      return (
        <SelectorButton
          isActive={isActive}
          setSelected={props.setSelected}
          text={selectorText}
          key={id}
        />
      );
    };

    return (
      <ul className="selector-container list-inline list-unstyled">
        {this.props.selectors.map(createSelector)}
      </ul>
    );
  }

});

module.exports = SelectorContainer;
