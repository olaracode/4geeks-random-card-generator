let cartas = [2,3,4,5,6,7,8,9,10, "J", "Q", "K", "A"]
let pintas = ["♦","♥","♠","♣"]

const generateRandomCard = () => {
    let cartaRandom = Math.floor(Math.random() * (cartas.length - 1))
    let pintaRandom = Math.floor(Math.random() * (pintas.length - 1))
    let numeroCarta = cartas[cartaRandom]
    let nuevaPinta = pintas[pintaRandom]
    let color = ""
    console.log(pintaRandom)
    if(pintaRandom === 0 || pintaRandom === 1){
        color = "red"
    } else {
        color = "black"
    }
    console.log(color)
    let contenedorNumero = document.getElementById("numeroCarta")
    let contenedorPinta = document.querySelectorAll("#tipoCarta")
    console.log(contenedorPinta)
    for(let i = 0; i<contenedorPinta.length; i++){
        contenedorPinta[i].innerHTML = nuevaPinta
        contenedorPinta[i].style.color = color
        contenedorPinta[i].style.fontSize = "18"
        if(i == 1){
            contenedorPinta[i].style.transform = "rotate(180deg)"
        }
    }    

    contenedorNumero.innerHTML = numeroCarta
    contenedorNumero.style.color = color
}

window.onload = generateRandomCard
