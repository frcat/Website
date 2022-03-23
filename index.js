// PFP Status from discord
fetch("https://api.lanyard.rest/v1/users/811770910624579584")
    .then((response) => response.json())
    .then((data) => status(data.data.discord_status));
function status(status) {
    if (status == "online") {
        document.getElementById("pfp").style = "border: 5px solid #3BA55D";
    } else if (status == "idle") {
        document.getElementById("pfp").style = "border: 5px solid #FAA81A";
    } else if ((status = "dnd")) {
        document.getElementById("pfp").style = "border: 5px solid #ED4245";
    } else {
        document.getElementById("pfp").style = "border: 5px solid #747F8D";
    }
}
// Visits
var r = new XMLHttpRequest();
r.addEventListener("load", function () {
    document.querySelector("#stats").innerText = "Unique Visits: " + JSON.parse(this.responseText).count_unique + "\nTotal Visits: " + JSON.parse(this.responseText).count;
});
r.open("GET", "https://frcat.goatcounter.com/counter/" + encodeURIComponent(location.pathname) + ".json");
r.send();
