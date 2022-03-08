// var btnTranslate = document.querySelector("button");
// var textInput = document.querySelector("text-input");
// var output = document.querySelector("output");
// var text = textInput
// var serverURL = "https://api.funtranslations.com/translate/"

// function translatedText (){
//     return serverURL + "?" + "text=" + textInput.value
// }

// btnTranslate.addEventListener("click" , function clickHandler (){
//     fetch (translatedText())
//     .then (function responseHandler(response) { return responseHandler.json}  )
//     .then (function log(json) { output.innerText = json} ) })

var btnTranslate = document.querySelector("button");
var txtInput = document.querySelector("#text-input");
var output = document.querySelector("#output"); 

var translationURL = "https://api.funtranslations.com/translate/yoda.json"
 
 function getTranslationURL (text){
     return translationURL + "?" + "text=" + text
 }
var text = txtInput.value ; 

btnTranslate.addEventListener("click" , function clickEventHandler() {
    fetch (getTranslationURL(text))
    .then (function responseHandler(response) { return responseHandler.json}  )
    .then (function log(json) { output.innerText = json} ) })


