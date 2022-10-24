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



let dropdown = document.querySelector(".os_dropdown")
let detect_font = window.getComputedStyle(document.querySelector(".detected_os")).fontSize
dropdown.style.fontSize = detect_font


let os = "Windows"

if(navigator.platform.charAt(0) === "M"){
    os = "macOS"
} else if(navigator.platform.charAt(0) === "i"){
    os = "iOS"
} else if(navigator.platform.charAt(0) === "L"){
    os = "Android"
}

dropdown.value = os

function change_os() {
    os = dropdown.value
    document.querySelectorAll(".os_instruction").forEach(os_instruction => {
        if (os_instruction.classList[0] === os){
            os_instruction.style.display = "block"
        } else {
            os_instruction.style.display = "none"
        }
    })
}

change_os()







