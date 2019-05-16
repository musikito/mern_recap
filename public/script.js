function getUserInfo(){
   const input = document.getElementById("userName").value;

   //console.log(input);
   axios.get("/showprofile/" + input)
   .then(response =>{
       console.log("using axios", response.data);
   })
}// getUserInfo()