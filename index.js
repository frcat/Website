// sub to lanyard ws
lanyard({
    userId: "811770910624579584",
    socket: true,
    onPresenceUpdate: user // presenceData
})
// work with ws
function user(base){
    if (base.data.activities.find(act => act.type == 1).url) {
        document.getElementById("profilePicture").href = base.data.activities.find(act => act.type == 1).url
    } else {
        return base.data.discord_status
    }
}
// Visits
var r = new XMLHttpRequest();
r.addEventListener("load", function () {
    document.querySelector("#stats").innerText = "Unique Visits: " + JSON.parse(this.responseText).count_unique + "\nTotal Visits: " + JSON.parse(this.responseText).count;
});
r.open("GET", "https://frcat.goatcounter.com/counter/" + encodeURIComponent(location.pathname) + ".json");
r.send();
