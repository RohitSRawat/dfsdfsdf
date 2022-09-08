const express = require('express')
const bodyParser = require('body-parser')
require('./db/moongose')
const userRouter = require('./routers/product')
const app = express()
const cors = require('cors');
var cookieParser = require('cookie-parser')
var multer = require('multer');
var upload = multer();
const path = require('path')

app.use(bodyParser.json())

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.urlencoded({extended: true}))
app.use(express.static('C:/Users/Ar Bros/Documents/ordering/Fresh Mart Clone/public/'))


const port = process.env.PORT||8080
app.use(cookieParser())

const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:201
}

app.use(cors(corsOptions));
app.use(userRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})