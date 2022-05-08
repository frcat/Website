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
  "browser": browser.browser.name || "?",
  "os": browser.os.name || "?",
  "platform": browser.platform.type || "?",
  "ref": new URLSearchParams(window.location.search).get("ref") || "?"
}
