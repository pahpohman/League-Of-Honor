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
  
  // Lanjut ke game
  document.getElementById("name-input").style.display = "none";
  document.getElementById("game").style.display = "block";

  // Bisa lanjut ke distribusi stat atau gameplay
}

// Reload jika perangkat dirotasi
window.addEventListener("orientationchange", () => {
  location.reload();
});

