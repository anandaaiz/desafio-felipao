let heroi = "SuperVerde"
let xp = 3540
let resultado = ""
if (xp < 1000) {
    resultado = "Ferro"
}
if (1001 < xp < 2000) {
    resultado = "Bronze"
}
if (1001 < xp < 2000) {
    resultado = "Bronze"
}
if (2001 < xp < 5000) {
    resultado = "Prata"
}
if (5001 < xp < 7000) {
    resultado = "Ouro"
}
if (7001 < xp < 8000) {
    resultado = "Platina"
}
if (8001 < xp < 9000) {
    resultado = "Ascendente"
}
if (9001 < xp < 10000) {
    resultado = "Imortal"
}
if (xp >= 10001) {
    resultado = "Radiante"
}
console.log("O Héroi de nome "+heroi+" está no nível de "+resultado)