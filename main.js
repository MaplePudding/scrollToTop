function scrollToTop() {            
    let lenToTop = document.documentElement.scrollTop;
    let speed = Math.floor(lenToTop / 10) > 30 ? Math.floor(lenToTop / 10) : 15;
    document.documentElement.scrollTop = document.documentElement.scrollTop - speed;
}

function checkScrollTop(timer){
    if(document.documentElement.scrollTop === 0){
        clearInterval(timer)
    }
}

window.onload = function () {
    let button = document.getElementById("scrollToTop");

    button.onclick = function () {
        let timer = setInterval(
            () => {
                scrollToTop();
                checkScrollTop(timer);
            }, 10)
    }
}