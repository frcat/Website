fetch(window.location.href.replace("https://frcat.win/blog/", "https://frcat.win/blog/posts/") + ".md")
    .then((resp) => resp.text())
    .then((data) => {
        document.body.innerHTML = '<center><a href="." style="font-size:150%">🔙</a>' + new showdown.Converter().makeHtml(data) + "</center>";
        twemoji.parse(document);
    });
