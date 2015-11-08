import React from 'react';
import CourtStaticImage from './CourtStaticImage';
import CourtIconsBar from './CourtIconsBar';

const CourtContainer = React.createClass({

  render() {
    const courtData = this.props.data;
    return(
      <div className="court-container">
        {this.getFavoritedIcon()}
        <h2>{courtData.Name}</h2>
        <CourtStaticImage
          lat={courtData.lat}
          lon={courtData.lon}
        />
        <h3>{courtData.Location}</h3>
        <CourtIconsBar
          numCourts={this.cleanNumCourts(courtData.Num_of_Courts)}
          numLikes={'0'}
        />
      </div>
    );
  },

  /*
   * Helpers
   */

  cleanNumCourts(num) {
    return num === '' ? 0 : num;
  },

  getFavoritedIcon() {
    // when favoriting is supported
    // if (this.props.data.favorited) {
    if (false) {
      return <i className="fa fa-2 fa-star"></i>;
    } else {
      return <i className="fa fa-2 fa-star-o"></i>;
    }
  }

});

module.exports = CourtContainer;
