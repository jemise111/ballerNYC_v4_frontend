import React from 'react';
import config from '../utils/config';

const CourtStaticImage = React.createClass({
//https://maps.googleapis.com/maps/api/staticmap?size=100x150&center=40.7687,-73.9498&zoom=18&maptype=satellite&scale=2

  render() {
    return (
      <img
        className="court-static-image"
        src={this.buildImageSrc()}
      />
    );
  },

  /*
   * Helpers
   */

  buildImageSrc() {
    const qs = this.buildQueryString();
    return config.map.baseUrl + '?' + qs
  },

  buildQueryString() {
    var params = [];
    for (let k in config.map.params) {
      params.push(k + '=' + config.map.params[k]);
    }
    params.push('center=' + this.props.lat + ',' + this.props.lon);
    return params.join('&');
  }

});

module.exports = CourtStaticImage;
