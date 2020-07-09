const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const db = require('./models')
const forcastRoute = require('./routes/forecastRoute')
const usersRaoute = require('./routes/usersRoute')
const app = express()

app.use(cors({
    origin: ['http://localhost:3001'],
    credentials: true // enable set cookie
  }));

app.use(bodyParser.json({limit: '50mb'}))  
app.use(cookieParser())
const port = process.env.PORT || 3003;

db.sequelize.sync()
.then(
  app.listen( port, ()=>{
     console.log(`server is running on port ${port}`);
 })
)
.catch(err=>console.log(err))


forcastRoute(app)
usersRaoute(app)