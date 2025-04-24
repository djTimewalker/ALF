// let a
// console.log(a)

// a = 3.14
// console.log(a)

// a = "Porsche"
// console.log(a)

// let a = 25
// console.log(a)

// const b

// const b = "jeg må ha en verdi"
// console.log(b)

// const c = 25
// console.log(c)

// oppretter en ny variabel med navnet 'a', og setter verdien til å være 10.
// siden variabelen opprettes med nøkkelordet 'let' kan verdien endres senere.
// let a = 10;

// {
    // oppretter enda en variabel med samme navn som over! Hvorfor er det lov?
    // let a = 20;
    // ber programmet om å skrive ut verdien av variabel a til console (i utviklerverktøyet -> F12).
    // console.log(a, "fra innerst")
// }

// ber programmet om å skrive ut verdien av variabel a til console (i utviklerverktøyet -> F12).
// console.log(a)

function hentVerdier() {
    const header = document.getElementById("header").innerText
    const plorem = document.getElementById("p-lorem").innerText
    const textbox = document.querySelector("input[type=text]").value
    const textarea = document.getElementById("textarea").value
    const select = document.getElementById("options").value
    const colorpicker = document.getElementById("colorpicker").value
    const datepicker = document.getElementById("datepicker").value
    console.log(header, plorem, textbox, textarea, select, colorpicker, datepicker)

    document.getElementById("output").innerHTML = `
    <p>Dette ble hentet ut da du trykket på knappen:</p>
    <p>En overskrift som er: ${header}</p>
    <p>En p-tag med innholdet: ${plorem}</p>
    <p>En tekstboks hvor du hadde lagt inn overskriften: ${textbox}</p>
    <p>En tekstboks hvor du hadde lagt inn innholdet: ${textarea}</p>
    <p>En nedtrekksmeny med 4 valg hvor du valgte årstiden: ${select}</p>
    <p>En fargevelger hvor du valgte fargen: ${colorpicker}</p>
    <p>En datovelger hvor du valgte datoen: ${datepicker}</p>
    `

}