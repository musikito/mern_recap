# Express Intro - cohort 7

## Setting up your computer

* Install VS code
* Install git. (Use default for everything)
* Follow this link to set it up your local git with [GitHub](https://help.github.com/en/articles/set-up-git)
* Set up VS code terminal to use git bash:
* File > Preferences > Settings
* Search for Shell: Windows
* Replace the path under the shell: windows option to the path of where you installed git bash (by default it is C:\Program      Files\Git\bin\bash.exe)
* Download and install node version 10

## Setting up your project

* Create project directory
* mkdir myexpressapp && cd myexpressapp

## Create README.md
* echo "express app" >> README.md

### Setting up node
* npm init

### Setting up git and make first commit
* git init
* git add -A
* git commit -m “first commit”


## Setting up your server

### Creating a server file
* Touch server.js
* Type console.log(“server running”) inside server.js
* To run your server file, type“node server” in your terminal
* You should see the text “server running” showing up in your terminal

## Install express:
* npm i express
* Check your package.json file, it should have express under dependences

Getting boilerplate sample from [expressjs](http://expressjs.com/) 
* Getting Started > Hello World:
```javascript
const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
```

Copy this boilerplate code above into your server.js file



When you type “node server”, you should see “Example app listening on port 3000!” if you are running this locally.<br/> 
If you are on c9, you will need to change your port to 8080 in the code.

A better way to run your server file is using npm. To do that, you can add a script in your package.json file. Add a new script under “test” called “dev”, and set it’s value to “node server.js”. Remember to add a common at the end of the previous line so this is in proper json format:
```json
"scripts": {
   "test": "echo \"Error: no test specified\" && exit 1",
   "dev": "node server.js"
 }
```
Now you can run your server by entering “npm run dev” in your terminal
Once you have your server running, you can open up your browser and type in “localhost:3000” in the address bar ( use preview > preview running application if you are on c9). And you should see the “Hello World” message showing on the page.

## Using nodemon to monitor for file changes

* npm i nodemon

Add it to the scripts in package.json
```json
"scripts": {
   "test": "echo \"Error: no test specified\" && exit 1",
   "dev": "nodemon server.js"
 }
```
## Create a test route
Add the following code in server.js after your first route
```javascript
app.get('/api', function (req, res) {
 res.send("API route working");
})
```
## Getting a query from browser
```javascript
app.get('/api', function (req, res) {
 const userName = req.query.username;
 console.log(userName);
 res.send("API route working");
})
```
Then if you go to your browser and type in the following in the address bar, you will send in a query to your server with the query username=yourname
http://localhost:3000/api?username=yourname


## Making multiple queries
* Change the api route to the following
```javascript
app.get('/api', function (req, res) {
 const userName = req.query.username;
 const userId = req.query.id;
 const message = req.query.message;
 console.log(userName);
 const reply = `${userName} with id of ${userId} is saying ${message}`
 res.send(reply);
})
```
Now to make multiple queries to the server, type the following in your browser address bar:<br/>
http://localhost:3000/api?username=jason&id=1234&message=Hello%20World%20!
queries always start with a question mark “?”
different queries are separated by the “&” symbol


## Using parameters
Add a new route called showprofile that accepts a parameter called username
```javascript
app.get("/showprofile/:username", function (req, res) {
 const user = req.params.username;
 console.log(user);

 res.send("show profile working");
})
```
To send a parameter, you type in the value after the route in the browser without using a key:<br/>
http://localhost:3000/userprofile/jason<br/>
then you should see “jason” being console logged in the terminal running your server.


## To create a front end web page

### To create a public folder:
* Terminate your server by pressing ctrl + c
* mkdir public touch index.html script.js style.css
cd public

#### Open index.html
If you are using VS code make sure on the bottom right corner, it says HTML next to the smiley face, NOT Django HTML. <br/>
This way you can use shortcuts such as ! + Tab
Use ! + Tap to create a boilerplate on the page

Give your page a title and a header,  then connect your script.js and style.css files to your html page:
```html
<!DOCTYPE html>
<html lang="en">

<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <meta http-equiv="X-UA-Compatible" content="ie=edge">
 <title>My express app</title>
 <script src="script.js"></script>
 <link rel="stylesheet" href="style.css">
</head>

<body>
 <h2>My Express App</h2>
</body>

</html>
```
To preview your page on the browser you can just open the index.html file on the browser like opening any other files on your computer -- by double clicking on it in your file explorer

When you are previewing it this way, you are just viewing the file locally, it is not being served by the server. You can check this by looking at the address bar, where it should show the path of the file locally on your computer.

Now we actually want our server to be able to serve it through our localhost:3000 address, so when we deploy it in the future, it will be served from whatever address that the server is serving from.

To do that, we can use the express.static() method to serve our public folder’s content. 
In server.js, add this as the first route (make sure it is above the old root  “/” route):
```javascript
const express = require('express')
const app = express()
const port = 3000

app.use('/', express.static("public"));

app.get('/', function (req, res) {
 res.send('Hello World!')
})
```

By default, express will serve the index.html of the folder that you specify, so you do not have to point it to that file.

Now you can run your server again:
* npm run dev

And go to localhost:3000<br/>
You should see your index.html page being served there. Showing the header<br/>

 **“My Express App”**

 __To be Continued...__

