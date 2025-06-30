
function selectGlyph(glyph) {
  document.getElementById("glyph-output").innerHTML =
    "Selected Glyph: " + glyph;
}

const glyphOutput = document.getElementById('glyph-output');

const glyphDescriptions = {
  "🌊": "Dopamine (Meaning): The molecular and synaptic substrate.",
  "❤️": "Rules (Law): The cellular, axonal, and ethical boundaries.",
  "🔁": "Game (Sociology): Ganglionic relay and recursive systems.",
  "🐬": "Equilibrium (Politics): Hippocampal networks and institutional stability.",
  "📡": "Illusion (Religion): The insular cortex, gradient, and the sacred."
};

function selectGlyph(glyph) {
  glyphOutput.textContent = glyphDescriptions[glyph] || "Unknown glyph";
}
