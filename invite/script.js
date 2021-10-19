var invite = window.location.href
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
var invite = params.inv

document.getElementById("error").innerHTML += "It seems you have not been redirected. Please click <a href='https://discord.gg/" + invite + "'></a>"

window.location.replace("https://discord.gg/" + invite)
