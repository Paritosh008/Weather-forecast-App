//const { response } = require("express")
const weatherform = document.querySelector('form')
const search = document.querySelector('input')
const responseOne = document.querySelector('#response1')
const responseTwo = document.querySelector('#response2')


weatherform.addEventListener('submit',(e)=>{
e.preventDefault()
const location = search.value
responseOne.textContent='Loading..'
responseTwo.textContent=''

fetch(`/weather?address=${location}`).then((response)=>{
    response.json().then((data) => {
        if(data.error){
            responseOne.textContent=data.error
        }

        else{
            responseOne.textContent="Location: " + data.location
            responseTwo.textContent ="Forecast: " +  data.forecast
        }
    })

})
})