'use strict';

import config from '../utils/config';

function formatQuery (obj) {
  return Object.keys(obj)
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`)
    .join('&')
}

function generateQuery (query) {
  return {
    ...(query || {})
  };
}

function generateData (method, headers, auth, body) {
  var data = {
    method: method || 'GET',
    headers: {
      ...(headers || {}),
      'Authorization': auth,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  };

  if (body) {
    data.body = JSON.stringify(body);
  }

  return data;
}

function checkStatus (response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var response = JSON.parse(response._bodyText);
    throw response;
  }
}

function parseJSON (response) {
  return response.json();
}

export default class BaseAPI {

  static fetch ({url, query, method, headers, body}) {
    var qs = formatQuery(generateQuery(query));
    var data = generateData(method, headers, this.auth, body);
    url = `${config.api.baseUrl}${url}?${qs}`;
    return fetch(url, data)
      .then(checkStatus)
      .then(parseJSON)
  }

}