const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const port = 3000;


//using body parser
app.use(bodyParser.json());

app.use(express.static("public"));

app.get('/', (req, res) => res.send('Hello World!'));

//to hold the data coming from the post request
//and payload
var data = [];

app.post("/api/", function(req,res){
   // res.send("Api")
    const userName = req.body.userName;
    const userId = req.body.userId;
    const message = req.body.message;

    const tempData = {
        userName,
        userId,
        message
    }
 data.push(tempData);
    const reply = `${userName} with id ${userId} is saying ${message}`;
     console.log(tempData);
     res.send(tempData);

});









app.get("/showprofile/:username", function(req,res){
    const user = req.params.username;
    console.log(user);
    res.send("profile is working " + user);


});


app.listen(port, () => console.log(`Server listening on port ${port}!`))

