fetch("https://frcat.win/blog/posts/index.json")
    .then((response) => response.json())
    .then((data) => {
        data.forEach(build);
    });

function build(data) {
    document.getElementById("cont").innerHTML += document.getElementById("post").innerHTML;
    const title = document.getElementById("title");
    const desc = document.getElementById("desc");
    const link = document.getElementById("link");

    title.innerText = data.Title;
    desc.innerText = data.Desc;
    link.href = "https://frcat.win/blog/" + data.id;
    title.id = data.id;
    desc.id = data.id;
    link.id = data.id;
}
