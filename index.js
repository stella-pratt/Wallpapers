let height = window.screen.height
let width = window.screen.width
if(height > width) {
    resolution = "Mobile"
} else if(height > 1080 || width > 1920) {
    resolution = "4K"
} else {
    resolution = "FHD"
}
document.getElementById("resolution_text").innerHTML = "Recommended Resolution: " + resolution



/* carousel */


// make the bottom button of current slide darker


// Select all slides
const slides = document.querySelectorAll(".slide");

// loop through slides and set each slides translateX
slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${(indx * 100)}%)`;
});

// select next slide button
const nextSlide = document.querySelector(".btn-next");

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

// add event listener and navigation functionality
nextSlide.addEventListener("click", function (){
    // check if current slide is the first and reset current slide to last
    if (curSlide === maxSlide) {
        curSlide = 0;
    } else {
        curSlide++;
    }
    //   move slide by 100%
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
});

// select prev slide button
const prevSlide = document.querySelector(".btn-prev");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
    // check if current slide is the first and reset current slide to last
    if (curSlide === 0) {
        curSlide = maxSlide;
    } else {
        curSlide--;
    }
    //   move slide by 100%
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
});

//  buttons on bottom of slides

const btn1 = document.getElementById("slide_btn-0");
btn1.addEventListener("click", function (){
    curSlide = 0
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
})



const total_slides = 5
for (let num = 0; num < total_slides; num ++) {
    eval("bttn" + num + "=document.getElementById('slide_btn-' + num)")
    eval("bttn" + num).addEventListener("click", function (){
        curSlide = num
        slides.forEach((slide, indx) => {
            slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
        });
    })
}









let scroll_amount = 0
let pop_up_open = false

document.querySelectorAll(".download").forEach(button_clicked => {
    button_clicked.addEventListener("click", function (){
        const pop_up = document.querySelector(".pop_up")
        pop_up.style.display = "flex";
        document.querySelector(".background_shade").style.display = "block";
        scroll_amount += document.documentElement.scrollTop
        document.body.style.top = -(scroll_amount) + "px"
        document.body.style.position = "fixed"
        document.body.style.overflowY = "scroll"
        pop_up_open = true
        let parent_image = button_clicked.closest(".image_wrapper")
        parent_image = parent_image.querySelector(".page_image")
        document.querySelector(".disp_image").src = parent_image.src
        document.querySelector("#fourK").href = parent_image.src.replace("/thumbnail/", "/4K/")
        document.querySelector("#fhd").href = parent_image.src.replace("/thumbnail/", "/FHD/")
        document.querySelector("#mobile").href = parent_image.src.replace("/thumbnail/", "/mobile/")
    })
})


close_button = document.querySelector(".close_pop")
close_button.addEventListener("click", close_pop_up)


document.addEventListener("keydown", function (pressed_key){
    if(pop_up_open === true && pressed_key.code === "Escape"){
        close_pop_up()
    }
})







function close_pop_up() {
    pop_up_open = false
    const pop_up = document.querySelector(".pop_up")
    pop_up.style.display = "none";
    document.querySelector(".background_shade").style.display = "none";
    document.body.style.position = "static"
    document.body.style.overflowY = "auto"
    window.scrollTo(0, scroll_amount)
    scroll_amount = 0

}










