

let friut = [ "Apple",  "Orange",  "Apple", "Orange", "Apple"]
let appleshelf = document.querySelector("#apple-shelf")
let orangeshelf = document.querySelector("#orange-shelf")
  
 function sortFruit(){
    for (let i = 0 ; i < friut.length; i++){
        if (friut[i] === "Apple"){
            appleshelf.textContent += "Apple"
        } else if (friut[i] === "Orange"){
            orangeshelf.textContent += "Orange"
        }
    }

 }

 sortFruit()