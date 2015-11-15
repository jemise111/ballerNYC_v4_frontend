export default {
  map: {
    baseUrl: 'https://maps.googleapis.com/maps/api/staticmap',
    params: {
      key: 'AIzaSyCs-xgVqfOSufY5xeRhXmgtQPp3EDCAgUU',
      size: '300x200',
      maptype: 'hybrid',
      zoom: '18'
    }
  },  
  api: {
    baseUrl: '/api'
  },
  courts: {
    boroughs: ['Manhattan', 'Brooklyn', 'Bronx', 'Queens', 'Staten Island'],
    pageSize: 20
  }
};