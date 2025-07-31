// ==== Navigasi Menu Utama ====

function startGame() {
  document.getElementById("menu").style.display = "none";
  document.getElementById("character-selection").style.display = "block";
}

function openOptions() {
  alert("Options belum tersedia.");
}

function quitGame() {
  alert("Terima kasih telah bermain. Sampai jumpa!");
}

function backToMenu() {
  document.getElementById("character-selection").style.display = "none";
  document.getElementById("menu").style.display = "block";
}

function backToCharacterSelect() {
  document.getElementById("name-input").style.display = "none";
  document.getElementById("character-selection").style.display = "block";
}


// ==== Pemilihan Karakter ====

let selectedCharacter = null;

function selectCharacter(gender) {
  selectedCharacter = gender;
  document.getElementById("character-selection").style.display = "none";
  document.getElementById("name-input").style.display = "block";
}


// ==== Konfirmasi Nama dan Masuk Game ====

function confirmName() {
  const name = document.getElementById("character-name").value.trim();
  if (name === "") {
    alert("Silakan masukkan nama karakter terlebih dahulu.");
    return;
  }

  alert(`Karakter "${name}" (${selectedCharacter === 'male' ? 'Laki-laki' : 'Perempuan'}) dipilih!`);

  document.getElementById("name-input").style.display = "none";
  document.getElementById("game").style.display = "block";

  updateStatusBars(); // Tampilkan status bar saat game dimulai
}


// ==== Status Bar Update ====

function updateStatusBars() {
  // Nilai default awal
  const maxHealth = 100;
  const maxMana = 20;
  const armour = 0;

  // Atur lebar bar
  document.getElementById("health-bar").style.width = "100%";
  document.getElementById("mana-bar").style.width = "100%";
  document.getElementById("armour-bar").style.width = "0%";

  // Tampilkan angka
  document.getElementById("health-text").textContent = `${maxHealth} / ${maxHealth}`;
  document.getElementById("mana-text").textContent = `${maxMana} / ${maxMana}`;
  document.getElementById("armour-text").textContent = armour;
}


// ==== Deteksi Orientasi Tanpa Reload ====

function checkOrientation() {
  const warning = document.getElementById("orientation-warning");
  const gameContent = document.getElementById("game-content");

  if (window.innerHeight > window.innerWidth) {
    // Mode potrait: tampilkan peringatan
    warning.style.display = "flex";
    gameContent.style.display = "none";
  } else {
    // Mode landscape: tampilkan game
    warning.style.display = "none";
    gameContent.style.display = "block";
  }
}

window.addEventListener("load", checkOrientation);
window.addEventListener("resize", checkOrientation);
