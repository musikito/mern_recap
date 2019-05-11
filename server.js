const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"));

app.get('/', (req, res) => res.send('Hello World!'));


app.get("/api", function(req,res){
   // res.send("Api")
    const userName = req.query.username;
    const userId = req.query.id;
    const message = req.query.msg;

    const reply = `${userName} with id ${userId} is saying ${message}`;
     //console.log(username);
     res.send(reply);

});

app.get("/showprofile/:username", function(req,res){
    const user = req.params.username;
    console.log(user);
    res.send("profile is working " + user);


});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

