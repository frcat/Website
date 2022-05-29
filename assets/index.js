// Discord
fetch(["https://discord.com/api/guilds/972931047069200384/widget.json?","https://ptb.discord.com/api/guilds/972931047069200384/widget.json?","https://canary.discord.com/api/guilds/972931047069200384/widget.json?"][Math.floor(Math.random()*["https://discord.com/api/guilds/972931047069200384/widget.json?","https://ptb.discord.com/api/guilds/972931047069200384/widget.json?","https://canary.discord.com/api/guilds/972931047069200384/widget.json?"].length)] + new Date().valueOf()).then(res => res.json()).then(data => {
    if (!data.members.length == 0) {
        document.getElementById('userAvatar').src = data.members[0].avatar_url+"?size=1024";
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
