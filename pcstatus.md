<script>
fetch("https://is-online.french-cat.repl.co/")
    .then((response) => {
        return response.text();
    })
    .then((resp) => {
        ooo(resp);
    });
function ooo(e) {
    if (e == 200) {
        document.getElementById("value").innerText = "PC: On";
    }
}
</script>
# PC Status

#  <div id="value">PC: Off</div>

# RAM: 16.0 GB

# Processor: Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz   2.59 GHz

# GPU: NVIDIA GeForce GTX 1650

# Built In Storage:<a href="https://documents.westerndigital.com/content/dam/doc-library/en_us/assets/public/western-digital/product/internal-drives/pc-sn720-ssd/data-sheet-pc-sn720-compute.pdf"> WDC PC SN720 SDAPNTW-512G-1101</a>

# Game Storage: <a href="https://www.westerndigital.com/products/external-drives/wd-black-d30-game-drive-usb-3-2-ssd#WDBATL0020BBK-WESN"> WD_BLACK™ D30 Game Drive SSD</a>

# Keyboard: <a href="https://rkgamingstore.com/collections/rk-keyboard/products/rk71-keyboard-white-brown-switch"> RK71 Royal Kludge</a>

# Mic: <a href="https://www.bluemic.com/en-us/products/yeti-nano/"> Yeti Nano</a>