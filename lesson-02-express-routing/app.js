let express = require('express')

let app = new express()

app.get('/',(req,res) => {
    console.log('route /')
})

app.get('/about',(req,res) => {
    console.log('get request for /about')
    res.status(200).send('hello world! i\'m Sam')
})

app.get('/user', function () {
    console.log('page user request')
})

app.listen(8000, function() {
  console.log('app started at http://localhost:8000')
})