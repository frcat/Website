const widget = ["https://discord.com/api/guilds/972931047069200384/widget.json?", "https://ptb.discord.com/api/guilds/972931047069200384/widget.json?", "https://canary.discord.com/api/guilds/972931047069200384/widget.json?"]
// Links
fetch("assets/links.json")
    .then(res => res.json())
    .then(data => {
        data.forEach(ldata => {
            document.getElementById("links").innerHTML += document.getElementById("link").innerHTML
            document.getElementById("href").href = ldata.href
            document.getElementById("icon").classList.add(ldata.icon)
            document.getElementById("href").id = ldata.icon
            document.getElementById("icon").id = ldata.icon
        }
        )
    }
    )
// Discord
fetch(widget[Math.floor(Math.random() * widget.length)] + new Date().valueOf()).then(res => res.json()).then(data => {
    if (!data.members.length == 0) {
        document.getElementById('userAvatar').src = data.members[0].avatar_url + "?size=1024";
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
    } else {
        document.getElementById('userAvatar').src = "https://github.com/French-Cat.png";
    }
})
// Quote
fetch("https://quotes.French-Cat.repl.co/raw").then(res => res.text()).then(quote => document.getElementById("quote").innerText = quote)