
function getUserInfo(){
   
    const input = document.getElementById("userName").value;
    
    
   //console.log(input);
   axios.get("/showprofile/" + input)
   .then(response =>{
       console.log("using axios", response.data);
   });

}// getUserInfo()


function handleSubmit(){
    const userName = document.getElementById("user-name").value;
    const userId = document.getElementById("userId").value;
    const message = document.getElementById("message").value;

    const payload = {
        userName,
        userId,
        message
    }
    axios.post("/api/",payload)
    .then(response =>{
        console.log(response.data);
    })
    console.log(userName,userId,message);


}


//document.getElementById('postInputForm').addEventListener('submit', performPostRequest);
function performPostRequest(e) {
  var resultElement = document.getElementById('postResult');
  var todoTitle = document.getElementById('todoTitle').value;
  resultElement.innerHTML = '';
  
  axios.post("/api/", {
    userId: 123,
    name: todoTitle,
    msg: "Hola"
  })
  .then(function (response) {
    resultElement.innerHTML = successHTMLOutput(response);
  })
  .catch(function (error) {
    resultElement.innerHTML = errorHTMLOutput(error);
  });
  
  e.preventDefault();
}


function successHTMLOutput(response) {
    return  '<h4>Result</h4>' + 
            '<h5>Status:</h5> ' + 
            '<pre>' + response.status + ' ' + response.statusText + '</pre>' +
            '<h5>Headers:</h5>' + 
            '<pre>' + JSON.stringify(response.headers, null, '\t') + '</pre>' + 
            '<h5>Data:</h5>' + 
            '<pre>' + JSON.stringify(response.data, null, '\t') + '</pre>'; 
  }

async function makePostRequest() {

    let res = await axios.post('https://jsonplaceholder.typicode.com/posts');

    console.log(`Status code: ${res.status}`);
    console.log(`Status text: ${res.statusText}`);
    console.log(`Request method: ${res.request.method}`);
    console.log(`Path: ${res.request.path}`);

    console.log(`Date: ${res.headers.date}`);
    console.log(`Data: ${res.data}`);
}