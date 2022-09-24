const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurrying, 30)

function blurrying(){
    load++

    if (load > 99){
        clearInterval(int)
        
    }


    loadText.innerText = '${load}%'

}