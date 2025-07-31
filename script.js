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

function backToMenu() {
  document.getElementById("character-selection").style.display = "none";
  document.getElementById("menu").style.display = "block";
}

function selectCharacter(gender) {
  alert("Kamu memilih karakter: " + (gender === 'male' ? "Laki-laki" : "Perempuan"));
  // Lanjut ke tahap berikutnya nanti
}
