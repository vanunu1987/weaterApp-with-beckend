const Axios = require('axios')


const forecastAxios = Axios.create({
    baseURL:'https://dataservice.accuweather.com/'
})

forecastAxios.interceptors.response.use(res => res,(error)=> {
return Promise.reject({status: error.response.status, statusText:error.response.statusText})
})

module.exports = {
    forecastAxios
}