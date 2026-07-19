let div = document.querySelector("#test")
div.addEventListener("click", () => {


    if (div.style.width == "100vw" && div.style.height == "100vh") {
        div.style.width = "100px";
        div.style.height = "100px"
        div.style.borderRadius = "50%"
        div.innerHTML="😁"
    } else {
        div.style.width = "100vw";
        div.style.height = "100vh"
        div.style.borderRadius = "0%"
        div.innerHTML="😀"
    }


})