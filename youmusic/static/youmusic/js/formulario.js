const formulario = document.querySelector(".formulario");

formulario.reset()


const datos = {

    nombre: '',
    apellido: '',
    correo: '',
    contraseña: '',
    contraseña2: '',
    mensaje: ''

}

function leerTexto(e) {

    datos[e.target.id] = e.target.value

}

function validarCorreo(correo) {

    const expReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    return expReg.test(correo)

}

function validarContraseña(contraseña) {
    const expReg = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/

    return expReg.test(contraseña)
}

function agregarInput(input, textarea = null) {

    if (input != null) {
        input.addEventListener("input", leerTexto)
        return true
    }

    if (textarea != null) {
        textarea.addEventListener("change", leerTexto)
        return true
    }

    return false

}

const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const correo = document.getElementById("correo")
const contraseña = document.getElementById("contraseña")
const contraseña2 = document.getElementById("contraseña2")
const mensaje = document.getElementById("mensaje")

const nombreExist = agregarInput(nombre)
const apellidoExist = agregarInput(apellido)
const correoExist = agregarInput(correo)
const contraseñaExist = agregarInput(contraseña)
const contraseña2Exist = agregarInput(contraseña2)
const mensajeExist = agregarInput(null, mensaje)

// Jquery

$(document).ready(function () {
    $(".boton").click(function () {

        try {

            let { nombre, apellido, correo, contraseña, contraseña2, mensaje } = datos

            if (nombreExist && apellidoExist) {

                if (nombre == "" ||  nombre.length < 3) {

                    $(".error-nombre").fadeIn()
                    return false

                } else {

                    $(".error-nombre").fadeOut()

                    if (apellido == "" || apellido.length < 3) {

                        $(".error-apellido").fadeIn()
                        return false
    
                    } else {
                        $(".error-apellido").fadeOut()

                        if (correo == "" || !validarCorreo(correo)) {

                            $(".error-correo").fadeIn()
                            return false
        
                        } else {
        
                            $(".error-correo").fadeOut()
        
                            if (contraseña == "" || !validarContraseña(contraseña)) {
                                
                                $(".error-contraseña").fadeIn()
                                return false
        
                            } else {
        
                                $(".error-contraseña").fadeOut()
        
                                if (contraseña2 != contraseña) {
        
                                    $(".error-contraseña2").fadeIn()
                                    return false
        
                                } else {
        
                                    $(".error-contraseña2").fadeOut()
        
                                }
                            }
                        }
                    }
                }


            } else {
                if (correo == ""  && correoExist || !validarCorreo(correo)) {

                    $(".error-correo").fadeIn()
                    return false

                } else {

                    $(".error-correo").fadeOut()

                    if (mensajeExist) {
                        if (mensaje == "" || mensaje.length < 5) {


                            $(".error-mensaje").fadeIn()
                            return false
    
                        } else {
    
                            $(".error-mensaje").fadeOut()
                            
                        }
                    }

                    if (contraseña == "" & contraseñaExist || !validarContraseña(contraseña) && contraseñaExist) {
                        
                        $(".error-contraseña").fadeIn()
                        return false

                    } else {

                        $(".error-contraseña").fadeOut()

                    }

                    
                }
            }

            formulario.reset()

        } catch (error) {
            console.log(error)
        }
    })
})