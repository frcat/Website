// Links
fetch("assets/links.json")
    .then(res => res.json())
    .then(data => {
        data.forEach(link => {
            document.getElementById("links").innerHTML += document.getElementById("link").innerHTML
            document.getElementById("href").href = link.href
            document.getElementById("icon").classList.add(link.icon)
            document.getElementById("href").id = link.icon
            document.getElementById("icon").id = link.icon
        }
        )
    }
    )
// Discord
fetch("https://canary.discord.com/api/guilds/966332825492160542/widget.json" + new Date().valueOf()).then(res => res.json()).then(data => {
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
