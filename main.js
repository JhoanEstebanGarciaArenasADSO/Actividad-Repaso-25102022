addEventListener("DOMContentLoaded", (e) => {

    let myform = document.querySelector("#numeros");
    let h= document.querySelector("h2")
    let acum = 0

    myform.addEventListener("submit", (e) => {
    e.preventDefault()
    let datainput = Object.fromEntries(new FormData(e.target));
    

    let N = Number(datainput.N)
    let acum = 0

    for (let i = 1 ; i <= N/2 ; ++i) {

        if(N % i == 0){

            acum += i
        
        if (acum != 0 && acum == N){
        h.innerHTML= "Si es perfecto"}

        else{
        h.innerHTML= "No es perfecto"}
        }
    }

    })

})