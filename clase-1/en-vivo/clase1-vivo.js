// Ingreso de datos
// prompt(" ingrese codigo")
// confirm(" si o no")

// Salida de datos
// alert(" funciona")
// alrt(" no funciona") //error alrt no esta definido
// console.log("hola")

// comentario en linea
/* 
comentario bloque
*/


let estado = "conectado"
const usuario = "Andrés"
const dni = 46867676
var noMeUses = "soy fea"

console.log("variable usuario:",usuario)

console.log("variable estado:",estado)
console.log("mi existencia es un error:", noMeUses)

// reasigno
console.log("reasigno")
estado = "offline"

// const no permite reasignar
// dni = 3387846778
console.log("variable estado:",estado)

// re declarar se rompe todo
// let estado = "conectado"

// Var es un pecado
// var noMeUses = "de verdad no"
// console.log("mi existencia es un error:", noMeUses)

/* 
sarasa
*/

console.log("Ejemplo de porque calcular con flotantes puede causar errores:", "1.2-1=", 1.2-1) // esperaría que de 0.2"

const quote = 'Juan dijo - "hola"'
const quote2 = "Juan dijo - 'hola'"

const mensajeUsuario = `Bienvenido al mi página ${usuario}`
const mensajeUsuario2 = "Bienvenido al mi página " + usuario
console.log(mensajeUsuario2)

// alert(mensajeUsuario)

let noLoDefino
console.log(noLoDefino)

console.log("typeof usuario", typeof usuario)

// const mensaje = prompt("dejenos un saludo")
// console.log("mensaje", mensaje)

// const confirmar = confirm("si o no")
// console.log("confirm", confirmar)