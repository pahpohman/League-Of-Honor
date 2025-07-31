function newGame() {
  alert("New Game dimulai!");
  document.getElementById("menu").style.display = "none";
  document.getElementById("game").style.display = "block";
}

function loadGame() {
  alert("Load Game belum tersedia.");
}

function openSettings() {
  alert("Settings belum tersedia.");
}

function openOptions() {
  alert("Options belum tersedia.");
}

<script>
window.addEventListener("orientationchange", () => {
  location.reload(); // muat ulang agar layout menyesuaikan
});
</script>

/* Overlay peringatan orientasi */
#orientation-warning {
  display: none;
  position: fixed;
  z-index: 9999;
  background: black;
  color: white;
  font-size: 20px;
  text-align: center;
  width: 100vw;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
}

/* Sembunyikan game saat portrait */
@media only screen and (orientation: portrait) {
  #orientation-warning {
    display: flex;
  }

  #game-content {
    display: none;
  }
}
