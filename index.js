let wallpaper_dict = {
    "scenery":   [4, 5, 6, 7, 8, 9, 10, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 123, 135, 136, 138, 159, 160, 161, 162],
    "abstract":  [1, 2, 3, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 155, 157, 158],
    "light":     [2, 3, 4, 5, 7, 8, 11, 12, 13, 16, 20, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 36, 37, 39, 41, 42, 43, 44, 46, 48, 51, 55, 56, 58, 63, 66, 67, 68, 79, 80, 81, 82, 83, 88, 89, 92, 93, 94, 95, 98, 105, 109, 112, 115, 121, 124, 130, 131, 132, 134, 138, 139, 144, 145, 154, 155],
    "dark":      [1, 6, 10, 14, 15, 17, 19, 21, 33, 34, 45, 47, 53, 54, 57, 122, 126, 127, 128, 129, 140, 141, 142, 143, 147, 162],
    "colourful": [2, 7, 8, 9, 11, 12, 13, 16, 17, 18, 20, 24, 28, 34, 40, 45, 48, 49, 50, 52, 55, 58, 59, 60, 64, 65, 70, 71, 87, 91, 101, 103, 106, 107, 108, 118, 120, 124, 125, 133, 137, 139, 140, 141, 142, 143, 146, 147, 148, 149, 150, 151, 152, 153, 156, 157, 158, 160, 161]
}
num_wallpapers = 163


//set the carousel wallpapers
let slide_papers = document.querySelectorAll(".carousel_paper")
slide_papers.forEach((slide_paper) =>{
    slide_paper.src = "images/Final%20images/FHD/" + ((Math.floor(Math.random() * 162))+1) + ".jpg"
})






let homepage_category = document.querySelectorAll(".homepage_category")

homepage_category.forEach((category_parent) =>{
    let category_name = category_parent.querySelector(".category_name").getElementsByTagName("a")[0];
    let image_wrapper = category_parent.querySelectorAll(".image_wrapper")
    let category = category_name.innerHTML.toLowerCase()
    image_wrapper.forEach((wrapper) =>{
        let real_image = wrapper.querySelector(".page_image")
        let insert_image = wallpaper_dict[category][Math.floor(Math.random()*wallpaper_dict[category].length)]
        wallpaper_dict[category].splice(wallpaper_dict[category].indexOf(insert_image), 1)
        real_image.src = "images/Final%20images/thumbnail/" + insert_image + ".jpg"
    })
})













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


top_btn = document.querySelector(".back2top");
top_arrow = top_btn.getElementsByTagName("img")[0];

window.addEventListener("scroll", function (){
    if (window.scrollY === 0){
        top_btn.style.height = "0"
        top_arrow.style.height = "0"
    } else {
        top_btn.style.height = "50px"
        top_arrow.style.height = "23px"
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













