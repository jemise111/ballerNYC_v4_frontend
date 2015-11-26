'use strict';

import BaseAPI from '../apis/BaseAPI';
import config from '../utils/config';

export default class CourtsAPI extends BaseAPI {

  static getCourts(borough, page) { 
    var query = {};
    if (borough) { query.borough = borough; }
    if (page) {
      query.limit = config.courts.pageSize;
      query.skip = config.courts.pageSize * (page-1);
    }

    return this.fetch({
      url: '/courts',
      method: 'GET',
      query
    });
  }

  static searchCourts(address) {
    return this.fetch({
      url: '/search',
      method: 'GET',
      query: {
        address
      }
    }); 
  }

}