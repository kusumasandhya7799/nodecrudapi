// importing expressjs
//express js for creating server and api to get,post,put and delete

const  express = require('express')
//body Paersers for getting the data through the urls
const bodyParser = require('body-parser')
const { request } = require('express')
//const app controls the entire app with express finctional constructor
const app = express()
//wee are saying express.js that to use body parser url encoded to be true
app.use(bodyParser.urlencoded({extended:true}))

//create route with creating the quote
app.post('/quotes',(req,res)=>{
    res.send(req.body)
})

app.get('/',(req,res)=>{
        res.sendFile(__dirname + './index.html')
})
 const PORT=5000

 app.listen(PORT,()=>{
     console.log(`server running at port ${PORT}`)
 })