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

function selectCharacter(className) {
  alert("Kamu memilih: " + className);
}

let availablePoints = 6;
const stats = {
  strength: 0,
  agility: 0,
  intelligence: 0,
  luck: 0,
  armour: 0,
};

function selectCharacter(character) {
  console.log("Karakter dipilih:", character);
  document.getElementById("character-selection").style.display = "none";
  document.getElementById("stat-distribution").style.display = "block";
  document.getElementById("character-name").value = character.charAt(0).toUpperCase() + character.slice(1);
}

function adjustStat(stat, change) {
  if (change === 1 && availablePoints === 0) return;
  if (change === -1 && stats[stat] === 0) return;

  stats[stat] += change;
  availablePoints -= change;

  document.getElementById(stat).textContent = stats[stat];
  document.getElementById("points-left").textContent = availablePoints;
}

function confirmStats() {
  const name = document.getElementById("character-name").value;
  console.log("Nama karakter:", name);
  console.log("Stat akhir:", stats);
  alert(`Karakter ${name} telah disiapkan!\n\nStats:\n${Object.entries(stats).map(([k, v]) => `${k}: ${v}`).join('\n')}`);
  // Bisa lanjut ke tahap berikutnya di sini
}

function toggleInfo() {
  const box = document.getElementById("info-box");
  box.style.display = box.style.display === "none" ? "block" : "none";
}
