let height = window.screen.height
let width = window.screen.widths
if(height > width) {
    resolution = "Mobile"
} else if(height > 1080 || width > 1920) {
    resolution = "4K"
} else {
    resolution = "FHD"
}


document.querySelector(".resolution_text").innerHTML = "Recommended Resolution: " + resolution





if(navigator.platform.charAt(0) === "M"){
    document.querySelector(".os").innerHTML = "You are on Mac"
} else if(navigator.platform.charAt(0) === "i"){
    document.querySelector(".os").innerHTML = "You are on ios"
} else if(navigator.platform.charAt(0) === "L"){
    document.querySelector(".os").innerHTML = "You are on android"
} else {
    document.querySelector(".os").innerHTML = "You are on windows"
}
