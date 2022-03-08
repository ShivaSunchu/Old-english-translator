
var btnTranslate = document.querySelector("button");
var txtInput = document.querySelector("#text-input");
var output = document.querySelector("#output"); 

var translationURL = "https://api.funtranslations.com/translate/yoda.json"
 

function errorHandler (error){
    console.log("Error occured" + error);
     alert("Our server is down, please try again after a while.");
 }

 function getTranslationURL (text){
     return translationURL + "?" + "text=" + text
 }
var text = txtInput.value ; 

btnTranslate.addEventListener("click" , function clickEventHandler() {
    fetch (getTranslationURL(text))
    .then (function responseHandler(response) { return responseHandler.json}  )
    .then (function log(json) { output.innerText = json} ) 
    .catch(errorHandler)

})


