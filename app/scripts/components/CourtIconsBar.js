import React from 'react';

const CourtIconsBar = React.createClass({

  render() {
    const props = this.props;
    return(
      <ul className="icons-bar list-inline list-unstyled">
        <li>{props.numCourts}<i className="fa fa-dribbble"></i></li>
        <li>{props.numLikes}<i className="fa fa-thumbs-o-up"></i></li>
      </ul>
    );
  }

});

module.exports = CourtIconsBar;
