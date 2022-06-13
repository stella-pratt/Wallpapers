height = window.screen.height
width = window.screen.width
if(height > width) {
    resolution = "Mobile"
} else if(height > 1080 || width > 1920) {
    resolution = "4K"
} else {
    resolution = "HD"
}
document.getElementById("resolution_text").innerHTML = "Recommended Resolution: " + resolution