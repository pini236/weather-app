export const apiEndpoints = {
  baseUrl: { primaryEndpoint: 'https://dataservice.accuweather.com' },
  cities: { primaryEndpoint: 'locations', secondaryEndpoint: 'cities', thirdEndpoint: 'autocomplete' },
  cityWeather: { primaryEndpoint: 'currentconditions' },
  daysWeather:{primaryEndpoint: 'forecasts', secondaryEndpoint: 'daily', thirdEndpoint: '5day'}
}
