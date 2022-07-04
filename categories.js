let wallpaper_dict = {
    "scenery": [4, 5, 6, 7, 8, 9, 10],
    "abstract": [1, 2, 3],
    "light": [2, 3, 4, 5, 7, 8],
    "dark": [1, 6, 10],
    "colourful": [2, 7, 8, 9]
}


//get all parameters from the url
const the_url = window.location.search;
const url_parameters = new URLSearchParams(the_url);

//get the current page's category
const page_category = url_parameters.get('category').toLowerCase()

//change title of page to category
document.title = page_category.charAt(0).toUpperCase() + page_category.slice(1)


console.log(length(wallpaper_dict[page_category]))

//not working
let rows = Math.floor( length[wallpaper_dict[page_category]]/3)
console.log(rows)






//resolution
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



//pop_up
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













