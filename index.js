// sub to lanyard ws
lanyard({
    userId: "811770910624579584",
    socket: true,
    onPresenceUpdate: user, // presenceData
});
// work with ws
function user(base) {
    if (isLive(base)) {
        liveborder(base);
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
// Alert
alert("Hello there, I am not sure how much longer I can do this..\nI have disabled my Twitch and don't think ill be streaming anymore.\nAnd im sorry. Ill try to be active in Cora's server (I have replaced the discord link)")
