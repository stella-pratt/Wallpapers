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



top_btn = document.querySelector(".back2top");
top_arrow = top_btn.getElementsByTagName("img")[0];

function open_scroll() {
    top_btn.style.opacity = "1"
}
function close_scroll() {
    top_btn.style.opacity = "0"
}

window.addEventListener("scroll", function (){
    if (window.scrollY === 0){
        close_scroll()
    } else {
        open_scroll()
    }
})





let os = "Windows"

if(navigator.platform.charAt(0) === "M"){
    os = "MacOS"
} else if(navigator.platform.charAt(0) === "i"){
    os = "iOS"
} else if(navigator.platform.charAt(0) === "L"){
    os = "Android"
}



document.querySelector(".detected_os").innerHTML = "Your os was detected as " + os + ". To change this, click the dropdown below."






