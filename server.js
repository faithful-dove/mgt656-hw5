var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Helo MGT-656!');
})

app.get('/nickname', function(request, response){
    response.send('faithful-dove');
})

;

app.listen(process.env.PORT || 4000);