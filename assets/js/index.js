feather.replace();document.getElementById("am").style = "display:none";
if (window.document.documentMode) {
  document.body.style = "display:none;";
  alert("Upgrade your browser bozo ffs");
  window.location.replace("https://www.aspy.dev/internal/IE.html");
}

const amenu = document.getElementById("am");

function am() {
  if (amenu.style.display == "none") {
    amenu.style = "display: block;"
  } else if (amenu.style.display == "block") {
    amenu.style = "display: none;"
  }
}

function terms_change(checkbox){
const cid = checkbox.id
    if(checkbox.checked) {
      if (cid == "lt") {
        localStorage.setItem("lt", 'true');
        amu("+", cid)
      }else if (cid == "ut") {
        localStorage.setItem("ut", 'true');
        amu("+", cid)
      }else if (cid == "ct") {
        localStorage.setItem("ct", 'true');
        amu("+", cid)
      }else if (cid == "df") {
        localStorage.setItem("df", 'true');
        amu("+", cid)
      }
    } else if (cid == "lt") {
      localStorage.setItem("lt", 'false');
        amu("-", cid)
      }else if (cid == "ut") {
      localStorage.setItem("ut", 'false');
        amu("-", cid)
      }else if (cid == "ct") {
      localStorage.setItem("ct", 'false');
        amu("-", cid)
      }else if (cid == "df") {
      localStorage.setItem("df", 'false');
        amu("-", cid)
      }
}

function amu(v1, v2) {
  if (v1 == "+") {
    document.body.classList.add(v2)
  } else if (v1 == "-") {
    document.body.classList.remove(v2)
  }
}

if(localStorage.getItem("lt") == null) {
  localStorage.setItem("lt", 'false');
}
if(localStorage.getItem("ut") == null) {
  localStorage.setItem("ut", 'false');
}
if(localStorage.getItem("ct") == null) {
  localStorage.setItem("ct", 'false');
}
if(localStorage.getItem("df") == null) {
  localStorage.setItem("df", 'false');
}

if(localStorage.getItem("lt") == "true") {
  amu("+", "lt");
  document.getElementById("lt").checked = true;
}
if(localStorage.getItem("ut") == "true") {
  amu("+", "ut");
  document.getElementById("ut").checked = true;
}
if(localStorage.getItem("ct") == "true") {
  amu("+", "ct");
  document.getElementById("ct").checked = true;
}
if(localStorage.getItem("df") == "true") {
  amu("+", "df");
  document.getElementById("df").checked = true;
}
