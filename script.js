function startGame() {
  document.getElementById("menu").style.display = "none";
  document.getElementById("game").style.display = "block";
}

function openOptions() {
  alert("Options belum tersedia.");
}

function quitGame() {
  alert("Terima kasih telah bermain. Sampai jumpa!");
  // Tidak bisa menutup tab browser dari JavaScript secara langsung.
}

// Reload saat rotasi agar layout menyesuaikan
window.addEventListener("orientationchange", () => {
  location.reload();
});
