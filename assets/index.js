'use strict';
const whitelistedUsers = [
    // set the users you want to display
    '811770910624579584',
];

window.onload = () => {
    function loadStatus() {
        const lanyardSocket = new WebSocket('wss://frcat.aspy.dev/socket'); //change this to the lanyard server or self host lanyard.
        lanyardSocket.onopen = () => {
            lanyardSocket.send(
                JSON.stringify({
                    op: 2,
                    d: { subscribe_to_ids: whitelistedUsers },
                }),
            );
        };
        lanyardSocket.onmessage = async (message) => {
            const { d } = await JSON.parse(message.data);
            for (const rawUserData of Object.values(d)) {
                const userData = rawUserData?.discord_user;
                if (!userData) continue;
                const UserObject = {
                    username: `${userData.username}#${userData.discriminator}`,
                    status: rawUserData.discord_status,
                };
                lanyardSocket.close();
                if (userData.avatar?.startsWith('a_')) {
                    UserObject.avatar = `https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}.gif`;
                } else {
                    UserObject.avatar = `https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}.png`;
                }
                document.getElementById("text").innerText = UserObject.username
                document.getElementById('userAvatar').src = UserObject.avatar;
                console.log(UserObject.status);
                if (UserObject.status == 'online') {
                    document.getElementById('userAvatar').style =
                        'border: 5px solid #3BA55D';
                } else if (UserObject.status == 'idle') {
                    document.getElementById('userAvatar').style =
                        'border: 5px solid #FAA81A';
                } else if (UserObject.status == 'dnd') {
                    document.getElementById('userAvatar').style =
                        'border: 5px solid #ED4245';
                }
            }
        };
    }
    const myContextMenu = new window.VanillaContextMenu({
        scope: document.body,
        customThemeClass: 'contextMenuTheme',
        menuItems: [
            {
                label: 'Refresh Status',
                callback: refresh,
            },
        ],
        preventCloseOnClick: false,
    });
    // Refresh Func
    function refresh() {
        loadStatus();
    }
    // Init
    refresh();
    // Theme
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
if (darkThemeMq.matches) {} else {
  document.getElementById("theme").href = "assets/index-light.css";
}
};
// Twitch Player
  var options = {
    channel: "afrenchcat",
    width: 1920,
    height: 1080,
  };
  const player = new Twitch.Player("twitch", options);
