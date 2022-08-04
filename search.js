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
    "red orange triangles pattern black tessellation cool",
    "orange red triangle pattern gradient pink",
    "whale blue white cool ocean water sea cute",
    "mushrooms pink white red cute pattern",
    "pattern tessellation purple blue hexagon shapes outline",
    "snowy grass frost trees pine tall mist white green forest clouds",
    "lake valley trees cliff rocks green blue farms rolling hills",
    "sunset water beach sand shallow golden yellow waves reflection",
    "beach shoreline water sea ocean waves foam sand blue white yellow",
    "beach shoreline water sea ocean waves foam sand blue white yellow gravel",
    "grass lawn green hedges bushes backyard",
    "green lawn grass flowers hedge bush trees",
    "mountain snow cliff rock boulder trees glacier",
    "mountain snow cliff rock boulder trees glacier",
    "mountain valleys hills grass fog mist clouds rocky scree",
    "skiing snow ice trees mountain range glacier ridge",
    "hill grass trees dark sunset glow mountain night",
    "hill dirt rocks slope sunset sunrise glow stony",
    "hill grass glow sunset dusk mountain top",
    "day hill rocks dirt grass green peak boulder pile",
    "beach marshes estuary seaweed sand rocks water ocean sea",
    "water sun grass edge shoreline estuary yellow dark",
    "snow water lake mountain hills grass reflection sky",
    "sunset snow hills water reflection grass land",
    "fjord water reflection snow grass sky horizon",
    "snow water edge grass iceberg arctic river sky white",
    "yellow snow iceberg water cold river sunset",
    "beach sand water ocean sea daytime waves foam shallow",
    "waves water ocean sunset night sea",
    "waves ocean water sea yellow orange horizon beach",
    "waves ocean water sea blue horizon beach",
    "orange yellow triangles gradient",
    "gradient yellow pink blue purple wiggly lines",
    "shards blue pink purple gradient shattered",
    "tree cherry blue pink leaves wood",
    "green dots black grid circles gradient",
    "lightbulb glowing dark wire yellow black",
    "black stars grey silver gradient",
    "rose flower colour gradient red orange green petals pink",
    "kiwifruit green seeds pink brown fruit slice",
    "timer countdown clock watch zero",
    "orange yellow shards cracked gradient",
    "blue purple waves lines wiggles",
    "blue purple waves lines wiggles blurry",
    "bark trees moss trunk nature leaves forest green",
    "path trees moss leaves forest plants green",
    "green focus droplet water branch leaves stem leaf",
    "moss macro close grass green leaves",
    "moss macro close grass green leaves",
    "trunk brown sky leaves pine forest trees moss",
    "rimu leaves tree green nature forest",
    "floor leaves dead rock sticks grey brown",
    "leaf hanging water droplet focus tree green",
    "ferns leaves leaf green nature",
    "focus moss trees forest ground",
    "bark moss macro pine forest tree brown green",
    "forest trees green brown trunks moss",
    "river ferns forest rocks sticks green",
    "river waterfalls ferns moss trees plants rocks",
    "river rapids bush plants rocks",
    "river plants sticks trees rapids water",
    "river rapids bush trees rocks water plants",
    "river plants sticks trees rapids water",
    "pumice rock beach shoreline water river focus",
    "river geothermal rocks water stream white brown",
    "trunk focus river rapids trees plants rocks mist",
    "trunk focus river rapids trees plants rocks mist hills",
    "trunk moss hanging focus river water rapids trees bush",
    "trunk focus river water rapids trees bush",
    "fern dead green brown focus plants bush",
    "moss macro close grass green leaves",
    "river rapids bush plants rocks hills mist",
    "moss focus river plants shrubs trees green",
    "green brown moss plant shrub log trunk",
    "macro green moss plant shrub log trunk",
    "rocks sand grey focus beach water pebbles",
    "pumice stone rock sand beach grey focus",
    "beach sand water shoreline rocks cliff trees plants garey green river",
    "water river beach shoreline rocks cliff plants shrubs",
    "cliff moss grey green river shoreline trees plants water",
    "beach plants trees trunk beach green water river shoreline edge",
    "rocks pebbles boulders sand tussock shrubs plants trees river water",
    "trunks trees bush path dirt moss grass sticks green brown",
    "brown green moss grass leaves roots sticks trees path",
    "path tussock plants green",
    "punga trees ferns river waterfall rocks forest",
    "arrow orange green trunk bark trees moss ferns forest",
    "river rocks moss sticks green water stream",
    "river rocks moss sticks green water stream",
    "branch log trunk wood rocks broken stick brown",
    "path tussock plants green ferns dirt green moss",
    "mushrooms plants macro moss green plants bush",
    "river water stream waves shoreline bush trees plants green",
    "trunk brown sky leaves forest trees green grey",
    "path trees moss leaves forest plants green trunks",
    "rocks pebbles shards mud dirt ground",
    "green river trees hills valley green mist rapids",
    "hills valley green mist sky grey plants trees forest",
    "river bend rocks plants trees valley water",
    "skull deer dead trunk plants white green",
    "mushrooms log trunk path dirt tussock green ferns moss",
    "waterfall moss ferns water stream rocks",
    "waterfall moss ferns water stream rocks",
    "oranges slices fruit orange citrus juice",
    "bricks brown wall stone",
    "pebbles stones rocks grey green plant sprout"
]
let wallpaper_dict = {
    "scenery":   [4, 5, 6, 7, 8, 9, 10, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119],
    "abstract":  [1, 2, 3, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
    "light":     [2, 3, 4, 5, 7, 8, 11, 12, 13, 16, 20, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 36, 37, 39, 41, 42, 43, 44, 46, 48, 51, 55, 56, 58, 63, 66, 67, 68, 79, 80, 81, 82, 83, 88, 89, 92, 93, 94, 95, 98, 105, 109, 112, 115, 121],
    "dark":      [1, 6, 10, 14, 15, 17, 19, 21, 33, 34, 45, 47, 53, 54, 57, 122],
    "colourful": [2, 7, 8, 9, 11, 12, 13, 16, 17, 18, 20, 24, 28, 34, 40, 45, 48, 49, 50, 52, 55, 58, 59, 60, 64, 65, 70, 71, 87, 91, 101, 103, 106, 107, 108, 118, 120]
}



let matching_wallpapers = [];
//get all parameters from the url
const the_url = window.location.search;
const url_parameters = new URLSearchParams(the_url);

//get the search terms
const search_terms = url_parameters.get('search').toLowerCase().split(" ")






for (let i = 0; i < search_terms.length; i++) {
    for (let j = 0; j < wallpaper_info.length; j++) {
        if(wallpaper_info[j].includes(search_terms[i])){
            if (matching_wallpapers.length < 1){
                //if the list is empty add the first wallpaper
                matching_wallpapers.push([1, j+1])
            } else{
                //loop through matching wallpapers and check if is already here
                let modification = false
                for(let p = 0; p < matching_wallpapers.length; p++){
                    if(matching_wallpapers[p][1] === j+1){
                        //increase the count if a wallpaper already exists
                        matching_wallpapers[p][0] ++
                        modification = true
                    }
                }
                if (modification === false){
                    // if the wallpaper doesnt exist yet add it
                    matching_wallpapers.push([1, j+1])
                }
            }
        }
    }
}





//no search results
if (matching_wallpapers.length === 0){
    no_match = document.getElementById("no_match")
    search_item = url_parameters.get("search")
    if(search_item.trim().length < 15){
        no_match.innerHTML = "Your search for <b>'" + search_item.trim() + "'</b> didn't match any results"
    } else {
        no_match.innerHTML = "Your search for <b>'" + search_item.substring(0, 15).trim() + "...'</b> didn't match any results"
    }
} else {
    document.querySelector(".no_results").remove()
}










//randomize the list
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
shuffle(matching_wallpapers)


//sort list by number of matches
const a = matching_wallpapers;
a.sort(sortFunction);

function sortFunction(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}
matching_wallpapers = a.reverse()


num_rows = Math.ceil(matching_wallpapers.length / 3)


for(let i = num_rows; i > 0; i--) {
    let row = document.createElement("div")
    row.className = "image_row"
    for (let j = 0; j < 3; j++) {
        let image_box = document.createElement("div")
        image_box.className = "image_box"
        let image_append = document.createElement("img")
        image_append.className = "main_images"

        let image_num = matching_wallpapers[0]
        matching_wallpapers.splice(0,1)
        image_num = image_num[1]
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








//resolution
let height = window.screen.height
let width = window.screen.width
let resolution = "ERROR"
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
let close_button = document.querySelector(".close_pop")
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













