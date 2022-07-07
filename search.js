let wallpaper_dict = {
    "scenery": [4, 5, 6, 7, 8, 9, 10, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    "abstract": [1, 2, 3, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    "light": [2, 3, 4, 5, 7, 8, 11, 12, 13, 16, 20, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 36, 37, 39, 41, 42, 43, 44, 46],
    "dark": [1, 6, 10, 14, 15, 17, 19, 21, 33, 34, 45, 47],
    "colourful": [2, 7, 8, 9, 11, 12, 13, 16, 17, 18, 20, 24, 28, 34, 40, 45]
}
let wallpaper_info = [
    "black deer illuminated glowing lime green dark antlers moose elk",
    "sun glowing spikey spots yellow red orange white balls",
    "green turquoise spots see-through blue white dotty spotty",
    "mountains sunset trees mist cliffs clouds yellow shadow",
    "mountains lake reflection grass hills meadow snow blue sky",
    "ice hill mountain northen lights lake cold snow rocks",
    "hay straw yellow gold grass dead farm field",
    "hay straw yellow gold grass dead farm field trees",
    "sunset colours flowers meadow grass hills greens grasses",
    "beach stony sand water ocean waves sunset blue gray sea stones",
    "rainbow gradient blue gay pride colour",
    "purple spots glowing white gradient",
    "beach sand water flower imprint pattern blue yellow",
    "pattern black white gray shapes gradient tetrahedron",
    "blue arrow black gradient triangles down",
    "leaves leaf blue pink pastel pattern",
    "red orange triangle pattern black tessellation cool",
    "orange red triangle pattern gradient ",
    "whale blue white cool ocean water sea cute",
    "mushrooms pink white red cute pattern",
    "pattern tessellation purple blue hexagon shapes outline",
    "snowy grass frost trees pine tall mist white green forest clouds",
    "lake valley trees cliff rocks green blue farms rolling hills",
    "sunset water beach sand shallow golden yellow waves reflection",
    "beach shoreline water sea ocean waves foam sand blue white yellow",
    "beach shoreline water sea ocean waves foam sand blue white yellow gravel",
    "grass lawn green hedges bushes backyard light",
    "green lawn grass flowers hedge bush trees",
    "mountain snow cliff rock boulder trees glacier",
    "mountain snow cliff rock boulder trees glacier",
    "mountain valleys hills grass "
]






matching_wallpapers = []
//get all parameters from the url
const the_url = window.location.search;
const url_parameters = new URLSearchParams(the_url);

//get the search terms
const search_terms = url_parameters.get('search').toLowerCase().split(" ")

for (let i = 0; i < search_terms.length; i++) {
    for (let j = 0; j < wallpaper_info.length; j++) {
        if(wallpaper_info[j].includes(search_terms[i])){
            if(!matching_wallpapers.includes(j+1)) {
                matching_wallpapers.push(j + 1)
            }
        }
    }
}
console.log(matching_wallpapers)


//fix
//calculate the number of rows needed


num_rows = Math.ceil(matching_wallpapers.length / 3)


for(let i = num_rows; i > 0; i--) {
    let row = document.createElement("div")
    row.className = "image_row"
    for (let j = 0; j < 3; j++) {
        let image_box = document.createElement("div")
        image_box.className = "image_box"
        let image_append = document.createElement("img")
        image_append.className = "main_images"
        //get random image and remove it from the list
        let image_num = matching_wallpapers[Math.floor(Math.random() * matching_wallpapers.length)]
        matching_wallpapers.splice(matching_wallpapers.indexOf(image_num), 1)

        //make the source for the image
        image_source = "images/Final%20images/thumbnail/" + image_num + ".jpg"
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
        let parent_image = button_clicked.closest(".image_box")
        parent_image = parent_image.querySelector(".main_images")
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













