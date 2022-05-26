const box = document.querySelectorAll('.box')

window.addEventListener('scroll',checkBox)
function checkBox(){
    const triggerBottom = window.innerHeight / 5 * 4
    box.forEach(boxes => {
        const boxesTop = boxes.getBoundingClientRect().top
        if(boxesTop < triggerBottom){
            boxes.classList.add('show')
        }else{
            boxes.classList.remove('show')
        }
    })
}