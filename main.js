function saludar(){
    let nombre = prompt ("ingrese su nombre")
    alert ("Hola " + nombre)
}

saludar()


let clave = true

do{
    let clavebancaria = prompt ("ingrese su calve de cuatro digitos")
    if(clavebancaria === null){
        break
    }


    if(clavebancaria == "1234"){
    alert ("genial, ahora ya podes retirar dinero")
    clave = false
    } else{
        alert("esa no es tu clave bancaria")
        console.error("no has podido ingresar")
    }

}while(clave)