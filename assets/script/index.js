"use strict";

fetch("assets/util/links.json")
    .then((res) => res.json())
    .then((data) => {
        window._data = data
    });

fetch("frame.html")
    .then((res) => res.text())
    .then((data) => {
        window._html = data
    });

function enter() {
    const form = document.querySelector("form");
    const textbox = document.querySelector('input[type="text"]');
    const messageContainer = document.querySelector("#message-container");
    const addMessage = (pfp, name, msg, time, id) => {
        const messageElement = document.createElement("div");
        messageElement.innerHTML = `
    <div class="flex w-full group-scope justify-start hover:bg-discord-600 text-white text-sm py-2 mb-1">
        <div class="mx-3">
            <img alt="profile picture" class="rounded-full w-12" src="${pfp}" width="48" height="48">
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
        messageElement.scrollIntoView({ behavior: "smooth" })
    };

    form.onsubmit = (event) => {
        event.preventDefault();
        if (textbox.value == "") return;
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
        document.getElementById("links").innerHTML += `<a href="${link}">${icon}</a><br><br>`
    }
    addMessage("assets/img/pfp.webp", "FRCat", "", now(), "links")
    _data.forEach((link) => {
        socialMsg(link.icon, link.href)
    });
}