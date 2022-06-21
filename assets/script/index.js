"use strict";
const form = document.querySelector("form");
const textbox = document.querySelector('input[type="text"]');
const messageContainer = document.querySelector("#message-container");
const submitMessage = document.querySelector('button[type="submit"]');
const showDown = new showdown.Converter();
const addMessage = (pfp, name, msg, time, id) => {
    const messageElement = document.createElement("div");
    messageElement.innerHTML = `
    <div class="flex w-full group-scope justify-start hover:bg-discord-600 text-white text-sm py-2 mb-1">
        <div class="mx-3">
            <img class="rounded-full w-12" src="${pfp}">
        </div>
        <div class="w-11/12 flex flex-col justify-start gap-0">
            <div class="pr-4 break-words" id="${id || "usr-msg"}">
                <strong>${name}</strong> <span class="text-[0.6rem] text-discord-100">Today at ${time}</span>
                <br>${msg}
            </div>
        </div>
    </div>
    `;
    messageContainer.appendChild(messageElement);
    messageElement.scrollIntoView({behavior: "smooth"})
};

form.onsubmit = (event) => {
    event.preventDefault();
    addMessage("assets/img/user.svg", "User", textbox.value, now())
    textbox.value = ""
};

function now() {
    return new Date().toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true
    })
}
const socialMsg = (icon, link) => {
    document.getElementById("links").innerHTML += `<a href="${link}"><i class="${icon}">&nbsp;</i></a>`
}

fetch("assets/util/links.json")
    .then((res) => res.json())
    .then((data) => {
        data.forEach((link) => {
            socialMsg(link.icon, link.href)
        });
    });

addMessage("https://github.com/French-Cat.png", "FRCat", "", now(), "links")
