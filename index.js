// sub to lanyard ws
lanyard({
    userId: "94490510688792576",
    socket: true,
    onPresenceUpdate: user, // presenceData
});
// work with ws
function user(base) {
    if (isLive(base)) {
        live(base);
    } else {
        statusborder(base);
    }
    function liveborder(base) {
        document.getElementById("profilePicture").href = base.activities.find((act) => act.type == 1).url;
        document.getElementById("pfp").style = "border: 5px solid #593695";
    }
    function statusborder(base) {
        console.log(base)
        const status = base.discord_status;
        if (status == "online") {
            document.getElementById("pfp").style = "border: 5px solid #3BA55D";
        } else if (status == "idle") {
            document.getElementById("pfp").style = "border: 5px solid #FAA81A";
        } else if ((status == "dnd")) {
            document.getElementById("pfp").style = "border: 5px solid #ED4245";
        } else {
            document.getElementById("pfp").style = "border: 5px solid #747F8D";
        }
    }
    function isLive(base) {
        if (base.activities.find((act) => act.type == 1)) {
            return true;
        } else {
            return false;
        }
    }
}
// Visits
var r = new XMLHttpRequest();
r.addEventListener("load", function () {
    document.querySelector("#stats").innerText = "Unique Visits: " + JSON.parse(this.responseText).count_unique + "\nTotal Visits: " + JSON.parse(this.responseText).count;
});
r.open("GET", "https://gc.frcat.workers.dev/json");
r.send();
