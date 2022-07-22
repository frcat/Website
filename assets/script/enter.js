window.onload = function () {
    document.body.style.opacity = 1;
};
function clickd() {
    document.body.style.opacity = 0;
    setTimeout(function () {
        document.getElementsByTagName("center")[0].remove();
        document.getElementsByTagName("main")[0].innerHTML = window._html
        document.getElementsByTagName("link")[1].href = "assets/style/output.css";
        document.body.classList.value = "bg-discord-500 font-opensans"
        enter()
        document.body.style.opacity = 1;
    }, 2000);
}