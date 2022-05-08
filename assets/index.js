// Quote
fetch("https://quotes.French-Cat.repl.co/raw").then(res => res.text()).then(data => document.getElementById("quote").innerText = data)
// Discord
fetch("https://discord.com/api/guilds/972931047069200384/widget.json").then(res => res.text()).then(data => dc(data))
function dc(data) {
    if (!data.members==""){
                    if (data.members[0].status == 'online') {
                    document.getElementById('userAvatar').style =
                        'border: 5px solid #3BA55D';
                } else if (data.members[0].status == 'idle') {
                    document.getElementById('userAvatar').style =
                        'border: 5px solid #FAA81A';
                } else if (data.members[0].status == 'dnd') {
                    document.getElementById('userAvatar').style =
                        'border: 5px solid #ED4245';
                }
    }
}
// Theme
if (!window.matchMedia("(prefers-color-scheme: dark)")){document.getElementById("theme").href = "assets/index-light.css";}
// Stats
window.browser = bowser.parse(navigator.userAgent)
const data = {
  "browser": window.browser.browser.name || "unknown",
  "os": window.browser.os.name || "unknown",
  "platform": window.browser.platform.type || "unknown",
  "ref": new URLSearchParams(window.location.search).get("ref") || "unknown"
}
fetch(`https://french-cat.repl.co/stats?browser=${data.browser}&os=${data.os}&platform=${data.platform}&ref=${data.ref}`)
