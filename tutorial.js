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



let os = "windows"

if(navigator.platform.charAt(0) === "M"){
    os = "mac"
} else if(navigator.platform.charAt(0) === "i"){
    os = "iphone"
} else if(navigator.platform.charAt(0) === "L"){
    os = "android"
}