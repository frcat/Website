(function iconScroll(image) {
    const link = document.querySelector("link[rel='icon']");
    link.href = image;
    document.getElementsByTagName("head")[0].appendChild(link);
    setTimeout(function () {
        const image1 = "https://on-demand-svg.french-cat.repl.co/4";
        const image2 = "https://on-demand-svg.french-cat.repl.co/0";
        if (image === image1) {
            iconScroll(image2);
        } else if (image === image2) {
            iconScroll(image1);
        } else {
            iconScroll(image1);
        }
    }, 1000);
})("https://github.com/French-Cat.png");

(function titleScroll(text) {
    document.title = text;
    setTimeout(function () {
        titleScroll(text.substr(1) + text.substr(0, 1));
    }, 250);
})("404 - Not Found - ");
