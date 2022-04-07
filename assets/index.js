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
// Refresh Func
function refresh() {
    status();
}
// Init
refresh()
