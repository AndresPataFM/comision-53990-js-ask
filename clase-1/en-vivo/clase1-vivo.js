// // Ingreso de datos
// // prompt(" ingrese codigo")
// // confirm(" si o no")

// // Salida de datos
// // alert(" funciona")
// // alrt(" no funciona") //error alrt no esta definido
// // console.log("hola")

// // comentario en linea
// /* 
// comentario bloque
// */


// let estado = "conectado"
// const usuario = "Andrés"
// const dni = 46867676
// var noMeUses = "soy fea"

// console.log("variable usuario:",usuario)

// console.log("variable estado:",estado)
// console.log("mi existencia es un error:", noMeUses)

// // reasigno
// console.log("reasigno")
// estado = "offline"

// // const no permite reasignar
// // dni = 3387846778
// console.log("variable estado:",estado)

// // re declarar se rompe todo
// // let estado = "conectado"

// // Var es un pecado
// // var noMeUses = "de verdad no"
// // console.log("mi existencia es un error:", noMeUses)

// /* 
// sarasa
// */

// console.log("Ejemplo de porque calcular con flotantes puede causar errores:", "1.2-1=", 1.2-1) // esperaría que de 0.2"

// const quote = 'Juan dijo - "hola"'
// const quote2 = "Juan dijo - 'hola'"

// const mensajeUsuario = `Bienvenido al mi página ${usuario}`
// const mensajeUsuario2 = "Bienvenido al mi página " + usuario
// console.log(mensajeUsuario2)

// // alert(mensajeUsuario)

// let noLoDefino
// console.log(noLoDefino)

// console.log("typeof usuario", typeof usuario)

// // const mensaje = prompt("dejenos un saludo")
// // console.log("mensaje", mensaje)

// // const confirmar = confirm("si o no")
// // console.log("confirm", confirmar)

// const nombreVariable = true
// let camelCase
// let PascalCase
// let snake_case
// let Snake_capitalizada
// let kebab-case // el - es un operador, no apra nombres
// let con espacio
// porQueFunciono = 123
// var porQueFunciono //hace esto
// console.log(porQueFunciono)

// Conversion vs Coherción

// Conversion
// const soyUnString = "5487"
// const convertirANumero = Number(soyUnString)
// console.log(typeof soyUnString, soyUnString)
// console.log(typeof convertirANumero, convertirANumero)
// // const soyBooleano = Boolean("soy un texto")
// // const soyBooleano = Boolean("")
// // const soyBooleano = Boolean("true")
// // const soyBooleano = Boolean("false")
// // const soyBooleano = Boolean(123)
// // const soyBooleano = Boolean(1)
// const soyBooleano = Boolean(0)
// console.log("soyBooleano", soyBooleano)
// console.log(true, Number(true))
// console.log(false, Number(false))

// console.log(1246, String(1246))

// Coherción
// console.log(typeof ("hola " + true), "hola " + true)
// console.log("hola" + 123)
// console.log("54" + 123)
// console.log("hola" - "chau")
// console.log("hola" - "la")
// console.log("hola" - "hola")
// console.log(Number("hola") - Number("hola"))
// console.log(NaN - NaN)
// console.log("54" - "23")
// console.log(54 - 23)
// console.log("100"-25)
// console.log("7"-true)
// console.log("hola" - 10)
// console.log("hola" + 10)
// console.log(Number("hola")-10)
// console.log(NaN-10) // cualquier operaciíon matemática con NaN es NaN



// cambiar tipo
// Que se pueda no significa que este bien (como la existencia de var)
let ayuda = "hola"
console.log("hola", typeof ayuda)
ayuda = true
console.log("hola", typeof ayuda)


//  https://www.fileformat.info/info/charset/UTF-16/list.htm

const contrasenia = "qwerty"