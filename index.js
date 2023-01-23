import Dog from './Dog.js'
import dogData from './data.js'
let currentDogIndex = 0
let currentDog = new Dog(dogData[currentDogIndex])
let endMessage = "thankyou"


function getNewDog(){
   
    currentDog = new Dog(dogData[currentDogIndex < dogData.length-1? currentDogIndex+=1:
    currentDogIndex = 0 ])
    render(currentDog.getDogHtml())
   
}
 
 let hasBeenLiked = false
 let hasBeenSwipped = false

function heartLiked(){
        if(!hasBeenLiked){
            document.getElementById('accepted').style.display = 'inline'  
        } 
    setTimeout(()=>{
         document.getElementById('accepted').style.display = 'none'
         document.getElementById('rejected').style.display = 'none'
       document.getElementById('display-dog').innerHTML = currentDog.getDogHtml() 
    },1500)
    getNewDog()
 }



function crossNoped(){
    if(!hasBeenSwipped){
            document.getElementById('rejected').style.display = 'inline'  
        } 
    setTimeout(()=>{
         document.getElementById('accepted').style.display = 'none'
         document.getElementById('rejected').style.display = 'none'
       document.getElementById('display-dog').innerHTML = currentDog.getDogHtml() 
    },1500)
       //document.getElementById('rejected').style.display = 'inline'
     //document.getElementById('accepted').style.display = 'none'
     getNewDog()
}

function render(){
       setTimeout(()=>{ 
       document.getElementById('display-dog').innerHTML = currentDog.getDogHtml() 
    },2000)
    //document.getElementById('display-dog').innerHTML = currentDog.getDogHtml()
    /*setTimeout(()=>{
         document.getElementById('accepted').style.display = 'none'
         document.getElementById('rejected').style.display = 'none'
       document.getElementById('display-dog').innerHTML = currentDog.getDogHtml() 
    },1500)*/
    
}
 
document.getElementById('cross-icon').addEventListener('click',crossNoped)
document.getElementById('heart-icon').addEventListener('click',heartLiked)
render()
const displayDogel = document.getElementById('display-dog')
console.log(displayDogel)

    
    

















