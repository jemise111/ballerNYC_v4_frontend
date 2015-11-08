import React from 'react';
import CourtContainer from './CourtContainer';

var CourtsContainer = React.createClass({

  getInitialState() {
    return {};
  },

  render() {
    const state = this.state;
    const props = this.props;

    var createCourt = function(court, id) {
      return (
        <CourtContainer
          data={court}
          key={id}
        />
      );
    };

    return (
      <div className="courts-container">
        <h1 className="selector-header">Courts In {props.selected}</h1>
        {this.props.courts.map(createCourt)}
      </div>
    );
  }

});

module.exports = CourtsContainer;
