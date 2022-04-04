// Status
function status() {
    fetch("https://canary.discord.com/api/guilds/957380894186946623/widget.json")
        .then((response) => response.json())
        .then((data) => {
            const status = data.members[0].status;
            if (status == "online") {
                document.getElementById("pfp").style = "border: 5px solid #3BA55D";
            } else if (status == "idle") {
                document.getElementById("pfp").style = "border: 5px solid #FAA81A";
            } else if (status == "dnd") {
                document.getElementById("pfp").style = "border: 5px solid #ED4245";
            }
        });
}
// Context menu
const myContextMenu = new window.VanillaContextMenu({
    scope: document.body,
    menuItems: [
        {
            label: "Refresh Status",
            callback: refresh,
            preventCloseOnClick: false,
        },
    ],
    preventCloseOnClick: true,
});
// Titles
function titles() {
    fetch("https://api.statify.live/youtube/UCh--dzF5q_VM5HCrRJN1t2w")
        .then((response) => response.json())
        .then((data) => {
            document.getElementById("youtube").title = data;
        });
    fetch("https://api.statify.live/discord/Grauj95zDw")
        .then((response) => response.json())
        .then((data) => {
            document.getElementById("discord").title = data;
        });
    fetch("https://api.statify.live/twitch/aFrenchCat")
        .then((response) => response.json())
        .then((data) => {
            document.getElementById("twitch").title = data;
        });
    fetch("https://api.statify.live/twitter/Fr3nch_C4t")
        .then((response) => response.json())
        .then((data) => {
            document.getElementById("twitter").title = data;
        });
}
// Refresh Func
function refresh() {
    status();
    titles();
}
// Init
refresh()
