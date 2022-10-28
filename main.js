addEventListener("DOMContentLoaded", (e) => {

    let hor = document.querySelector("#hora")
    let form = document.querySelector("#horas")
    let pago = 5208.33
    let cont= 0
    let acum = 0
    let cuerp = document.querySelector("#cuerpo")
    let suel = 0
    let nam =document.querySelector("#name")
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let dataInput = Object.fromEntries(new FormData(e.target));
    if ( cont <2) {
        let nomina = dataInput.hora*pago
        cont+=1
        acum+= nomina
        cuerp.insertAdjacentHTML("beforeend", `
        <tr>
        <td>${dataInput.nombre}</td>
        <td>${dataInput.hora}</td>
        <td>${dataInput.hora*pago}</td>
        </tr>
        `)
    }
    else {
        cuerp.insertAdjacentHTML("beforeend", `
        <tr>
            <td colspan="3">"La nomina es "${acum}</td>
        </tr>
        `)
        }
    hor.value = ""
    nam.value = ""
    
})

})