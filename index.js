const pictures = [
    "slider1.png",
    "slider2.jpg",
    "slider3.jpg",
    "slider4.jpg",
    "slider5.jpg",
    "slider6.jpg",
    "slider7.png",
    "slider8.jpg",
    "slider9.jpg",
    "slider10.jpg",
    "slider11.jpg"
]

const buttonsEl = document.querySelectorAll(".icon-left, .icon-right")
const imageEl = document.querySelector(".image-container")

let i = 0

buttonsEl.forEach (function(button) {
    button.addEventListener("click", function (e) {
        if (button.classList.contains("icon-left")){
            i--
            if (i < 0) {
                i = pictures.length - 1
                //or i = pictures.length
            }
            imageEl.style.background = `url(images/${pictures[i]}) no-repeat center/contain`
           
        }
        if (button.classList.contains("icon-right")){
            i++
            if (i > pictures.length -1 ) {
                // or (i > pictures.lenght)
                i = 0
            }
            imageEl.style.background = `url(images/${pictures[i]}) no-repeat center/contain`
        }
    })
})