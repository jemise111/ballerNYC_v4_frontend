export default {
  staticMap: {
    baseUrl: 'https://maps.googleapis.com/maps/api/staticmap',
    params: {
      key: 'AIzaSyCs-xgVqfOSufY5xeRhXmgtQPp3EDCAgUU',
      size: '300x200',
      maptype: 'hybrid',
      zoom: '18'
    }
  },
  googleMap: {
    baseUrl: 'http://maps.google.com/maps/?q='
  }, 
  api: {
    // baseUrl: 'http://localhost:8080'
    baseUrl: '/api'
  },
  courts: {
    boroughs: ['Manhattan', 'Brooklyn', 'Bronx', 'Queens', 'Staten Island'],
    pageSize: 20
  }
};