const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var Client = require('node-rest-client').Client;

var client = new Client();

const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json());


app.post('/getLocations',(req,res)=>{
  const typedWord = req.body.city;

  client.get("https://maps.googleapis.com/maps/api/place/textsearch/json?query="+typedWord+"top+sights&key=AIzaSyCxfRGtb34e2OzW3Ww1Wc417mgeaE2YSbo", function (data, response) {
    // parsed response body as js object
    res.json({msg:true,data:data})
    // console.log(data);  
});
})


app.listen(3001,()=>{
  console.log('listening to port 3001')
})
