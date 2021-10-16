function sendMessage() {
  let req = new XMLHttpRequest();
  req.open("POST", "https://canary.discord.com/api/webhooks/898794864190291968/Lr8kAOZipOeiEuVNKNf0Msa1DDKFgwWE3IJQXJcAhWAChBsld4JVP_er-Zy4V3KUXxN7");
  req.setRequestHeader("Content-Type", "application/json");
  let params = {
    username: document.getElementById("name").value,
    avatar_url: document.getElementById("ava_url").value,
    content: "Message:\n" + document.getElementById("msg").value + "\n\nNote:\n" + document.getElementById("note").value
  };
  req.send(JSON.stringify(params));
}




let open = false;
function toggleModal() {
  if(open) {
    open = !open;
    document.getElementById("messageModal").classList.add("hide");
    document.getElementById("profile").classList.remove("hide");
  } else {
    open = !open;
    document.getElementById("messageModal").classList.remove("hide");
    document.getElementById("profile").classList.add("hide");
  }
}