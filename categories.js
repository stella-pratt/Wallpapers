let wallpaper_dict = {
    "scenery":   [4, 5, 6, 7, 8, 9, 10, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    "abstract":  [1, 2, 3, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
    "light":     [2, 3, 4, 5, 7, 8, 11, 12, 13, 16, 20, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 36, 37, 39, 41, 42, 43, 44, 46, 48, 51, 55, 56, 58],
    "dark":      [1, 6, 10, 14, 15, 17, 19, 21, 33, 34, 45, 47, 53, 54, 57],
    "colourful": [2, 7, 8, 9, 11, 12, 13, 16, 17, 18, 20, 24, 28, 34, 40, 45, 48, 49, 50, 52, 55, 58, 59, 60]
}

//make function for loading four rows
function load_rows() {
    if(num_rows >= 1){
        for(let i = 0; i < 4; i++){
            let row = document.createElement("div")
            row.className = "image_row"
            for (let j = 0; j < 3; j++) {
                let image_box = document.createElement("div")
                image_box.className = "image_box"

                let image_append = document.createElement("img")
                image_append.className = "main_images"
                //get random image and remove it from the list
                let image_num = wallpaper_dict[page_category][Math.floor(Math.random()*wallpaper_dict[page_category].length)]
                wallpaper_dict[page_category].splice(wallpaper_dict[page_category].indexOf(image_num), 1)

                //make the source for the image
                let image_source = "images/Final%20images/thumbnail/" + image_num + ".jpg"
                if (!image_source.includes("undefined")) {
                    image_append.src = image_source
                    image_box.appendChild(image_append)
                    let download = document.createElement("div")
                    download.className = "download"
                    let download_image = document.createElement("img")
                    download_image.src = "images/download.png"
                    download_image.alt = "download"
                    download_image.className = "download_image"
                    download.appendChild(download_image)

                    image_box.appendChild(download)
                }
                row.appendChild(image_box)
            }
            document.querySelector(".categories_main").appendChild(row)
        }
        num_rows -= 4
        if(num_rows <= 0){
            document.querySelector(".load_more").remove()
        }
    }
    refresh_download()
}




//get all parameters from the url
const the_url = window.location.search;
const url_parameters = new URLSearchParams(the_url);

//get the current page's category
const page_category = url_parameters.get('category').toLowerCase()

//change title of page to category
document.title = page_category.charAt(0).toUpperCase() + page_category.slice(1)

//calculate the number of rows needed
let num_rows = Math.floor((wallpaper_dict[page_category].length)/3)
load_rows()










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
function refresh_download() {
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
            let parent_image = button_clicked.closest(".image_box")
            parent_image = parent_image.querySelector(".main_images")
            document.querySelector(".disp_image").src = parent_image.src
            document.querySelector("#fourK").href = parent_image.src.replace("/thumbnail/", "/4K/")
            document.querySelector("#fhd").href = parent_image.src.replace("/thumbnail/", "/FHD/")
            document.querySelector("#mobile").href = parent_image.src.replace("/thumbnail/", "/mobile/")
        })
    })
    let close_button = document.querySelector(".close_pop")
    close_button.addEventListener("click", close_pop_up)
    document.addEventListener("keydown", function (pressed_key){
        if(pop_up_open === true && pressed_key.code === "Escape"){
            close_pop_up()
        }
    })
}




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













