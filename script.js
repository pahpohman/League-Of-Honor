// Tombol Play di menu utama
function startGame() {
  document.getElementById("menu").style.display = "none";
  document.getElementById("character-selection").style.display = "block";
}

// Pilih opsi "Options"
function openOptions() {
  alert("Options belum tersedia.");
}

// Tombol Quit
function quitGame() {
  alert("Terima kasih telah bermain. Sampai jumpa!");
}

// Kembali dari karakter ke menu
function backToMenu() {
  document.getElementById("character-selection").style.display = "none";
  document.getElementById("menu").style.display = "block";
}

// Kembali dari input nama ke pilihan karakter
function backToCharacterSelect() {
  document.getElementById("name-input").style.display = "none";
  document.getElementById("character-selection").style.display = "block";
}

// Simpan pilihan karakter dan lanjut ke input nama
let selectedCharacter = null;

function selectCharacter(gender) {
  selectedCharacter = gender;
  document.getElementById("character-selection").style.display = "none";
  document.getElementById("name-input").style.display = "block";
}

// Setelah nama diketik dan tekan lanjut
function confirmName() {
  const name = document.getElementById("character-name").value.trim();
  if (name === "") {
    alert("Silakan masukkan nama karakter terlebih dahulu.");
    return;
  }

  alert(`Karakter "${name}" (${selectedCharacter === 'male' ? 'Laki-laki' : 'Perempuan'}) dipilih!`);
  
  document.getElementById("name-input").style.display = "none";
  document.getElementById("game").style.display = "block";

  // Bisa lanjut ke distribusi stat atau gameplay
  updateStatusBars(); // Menampilkan bar status saat game dimulai
}

// Fungsi untuk memantau orientasi (tanpa reload)
function checkOrientation() {
  const warning = document.getElementById("orientation-warning");
  const gameContent = document.getElementById("game-content");

  if (window.innerHeight > window.innerWidth) {
    // Potrait
    warning.style.display = "flex";
    gameContent.style.display = "none";
  } else {
    // Landscape
    warning.style.display = "none";
    gameContent.style.display = "block";
  }
}

window.addEventListener("load", checkOrientation);
window.addEventListener("resize", checkOrientation);
