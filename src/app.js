// app.js

// frases
const frases = [
  "No controles los eventos externos, controla como re4accionas ante ellos.",
  "La felicidad no depende de lo que tienes, sino de cómo piensas.",
  "La vida es breve: vive con virtud y no te pierdas en lo trivial.",
  "Lo que perturba tu mente no son las cosas, sino los juicios que haces sobre ellas.",
  "Cada día es una oportunidad para mejorar, no para lamentar."
];

// selecciona una frase atleatoria
const fraseAtleatoria = frases[Math.floor(Math.random() * frases.length)];

// Insertar frase en el id "frases"
document.getElementById("frases").textContent = fraseAtleatoria;
