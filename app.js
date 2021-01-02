const express= require('express');
var bodyParser = require('body-parser');
app.use(bodyParser.json);
const app=express();
app.get('/user?name=reham',(req,res)=>{
    res.json({use:"reham"});
//res.end("hello");
})
app.get('/api/users', function(req, res) {
    var user_id = req.param('id');
    var token = req.param('token');
    var geo = req.param('geo');

    res.send(user_id + ' ' + token + ' ' + geo);
});
app.post('/user',(req,res)=>{
    const dats =req.body;
    res.json({"message":"hello","name":"reham"})
   // res.end("hello");
    })
    app.post('/api/users', function(req, res) {
        var user_id = req.body.id;
        var token = req.body.token;
        var geo = req.body.geo;
    
        res.send(user_id + ' ' + token + ' ' + geo);
    });
app.listen(3000,()=>{
    console.log('server running on port 3000 ')
})