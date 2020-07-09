const axiosService = require('./axiosService')
const {config} = require ('../config/config ')
const API_KEY = config['forcast-api-key']


const getForcast = (data, callback) => {
    const urls = {
        getLocKey: `locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${data.key}`,
        get5DaysForecast: `forecasts/v1/daily/5day/${data.key}?apikey=${API_KEY}&metric=true`,
        getCurrentForecast: `currentconditions/v1/${data.key}?apikey=${API_KEY}`
    }
    axiosService.forecastAxios
    .get(urls[data.type])
    .then(data => callback(undefined, JSON.stringify(data.data)))
    .catch(err => {
        console.log('forcast err ',err);
        return callback(err, undefined)
    })
}


module.exports = {
    getForcast
}