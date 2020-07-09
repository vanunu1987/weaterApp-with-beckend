const BASE = '/forcast'
const forcastService = require('../services/forcastService')
const {checkForAuth} = require('../middleware/authJwt')

const forcastRaoute = (app) => {

    app.get(`${BASE}`,checkForAuth, (req,res) => {
        const data = req.query
        forcastService.getForcast(data, (err, data) =>{
            if (err) {
               return res.sendStatus(err.status)
            }
            return res.send(data)
        })
    })
   
}

module.exports = forcastRaoute