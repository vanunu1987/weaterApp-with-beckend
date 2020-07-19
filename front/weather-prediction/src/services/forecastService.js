

import * as axiosService from './axiosService'


const getLocKey = async (key) => {
    let res = await axiosService.forecastAxios
    .get('/forcast',{params:{key, type:'getLocKey'}},{
        withCredentials: true
      })
    return res.data
}
const get5DaysForecast = async (key) => {
    let res = await axiosService.forecastAxios
    .get('/forcast',{params:{key, type:'get5DaysForecast'}},{
        withCredentials: true
      })
    return res.data
}
const getCurrentForecast = async (key) => {
    let res = await axiosService.forecastAxios
    .get('/forcast',{params:{key, type:'getCurrentForecast'}},{
        withCredentials: true
      })
    return res.data[0]
}

const getCityObj = cityArr =>{
  return  cityArr.map(obj=>{
        return{
            'key': obj.Key,
            'city': obj.LocalizedName,
            'country': obj.Country.LocalizedName
        }
    })
}


export default {
    getLocKey,
    get5DaysForecast,
    getCurrentForecast,
    getCityObj
}