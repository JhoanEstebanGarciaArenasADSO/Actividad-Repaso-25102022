addEventListener("DOMContentLoaded", (e) => {

    let vendedores = document.querySelector("#vendedores");
    let tabla = document.querySelector('tbody')

    vendedores.addEventListener("submit", (e) => {
    e.preventDefault()
    let datainput = Object.fromEntries(new FormData(e.target));
    let nombre= datainput.nombre
    let venta1= Number(datainput.Venta1)
    let venta2= Number(datainput.Venta2)
    let venta3= Number(datainput.Venta3)
    let sueldo= 500000

    let comision= Number((venta1 + venta2 + venta3) * 0.1)

    let sueldoTotal= comision + sueldo

    tabla.insertAdjacentHTML("beforeend", 
            `<tr>
                <td>${nombre}</td>
                <td>${comision}</td>
                <td>${sueldoTotal}</td>
            </tr>`
    )

    })

})