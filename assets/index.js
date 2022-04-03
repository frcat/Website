// fetch status
fetch("https://canary.discord.com/api/guilds/957380894186946623/widget.json")
  .then(response => response.json())
  .then(data => user(data.members[0].status));

// work with status
function user(status) {
        if (status == "online") {
            document.getElementById("pfp").style = "border: 5px solid #3BA55D";
        } else if (status == "idle") {
            document.getElementById("pfp").style = "border: 5px solid #FAA81A";
        } else if ((status == "dnd")) {
            document.getElementById("pfp").style = "border: 5px solid #ED4245";
        }

}
// Visits
var r = new XMLHttpRequest();
r.addEventListener("load", function () {
    document.querySelector("#stats").innerText = "Unique Visits: " + JSON.parse(this.responseText).count_unique + "\nTotal Visits: " + JSON.parse(this.responseText).count;
});
r.open("GET", "https://frcat.goatcounter.com/counter//.json");
r.send();
