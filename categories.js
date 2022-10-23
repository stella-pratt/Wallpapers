let wallpaper_dict = {
    "scenery":   [4, 5, 6, 7, 8, 9, 10, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 123, 135, 136, 138, 159, 160, 161, 162],
    "abstract":  [1, 2, 3, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 155, 157, 158],
    "light":     [2, 3, 4, 5, 7, 8, 11, 12, 13, 16, 20, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 36, 37, 39, 41, 42, 43, 44, 46, 48, 51, 55, 56, 58, 63, 66, 67, 68, 79, 80, 81, 82, 83, 88, 89, 92, 93, 94, 95, 98, 105, 109, 112, 115, 121, 124, 130, 131, 132, 134, 138, 139, 144, 145, 154, 155],
    "dark":      [1, 6, 10, 14, 15, 17, 19, 21, 33, 34, 45, 47, 53, 54, 57, 122, 126, 127, 128, 129, 140, 141, 142, 143, 147, 162],
    "colourful": [2, 7, 8, 9, 11, 12, 13, 16, 17, 18, 20, 24, 28, 34, 40, 45, 48, 49, 50, 52, 55, 58, 59, 60, 64, 65, 70, 71, 87, 91, 101, 103, 106, 107, 108, 118, 120, 124, 125, 133, 137, 139, 140, 141, 142, 143, 146, 147, 148, 149, 150, 151, 152, 153, 156, 157, 158, 160, 161]
}



//make function for loading four rows
function load_rows() {
    if(num_rows >= 1){
        let load_loop = 4
        if(num_rows <= 4){
            load_loop = num_rows
        }
        for(let i = 0; i < load_loop; i++){
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
if (url_parameters.has("category")) {
    document.querySelector(".category_previews").remove()
    //get the current page's category
    page_category = url_parameters.get('category').toLowerCase()

    //change title of page to category
    document.title = page_category.charAt(0).toUpperCase() + page_category.slice(1) + " - Wallpapers"

    //calculate the number of rows needed
    num_rows = Math.ceil((wallpaper_dict[page_category].length)/3)
    load_rows()
} else {
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
    document.querySelector(".load_more").remove()
}






top_btn = document.querySelector(".back2top");
top_arrow = top_btn.getElementsByTagName("img")[0];

function open_scroll() {
    top_btn.style.height = "50px"
    top_arrow.style.height = "23px"
}
function close_scroll() {
    top_btn.style.height = "0"
    top_arrow.style.height = "0"
}

window.addEventListener("scroll", function (){
    if (window.scrollY === 0){
        close_scroll()
    } else {
        open_scroll()
    }
})






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













