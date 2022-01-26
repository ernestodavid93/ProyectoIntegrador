const btn = document.querySelector('button')
const inputs = document.querySelector('form')

btn.addEventListener('click', () => {
    const nombre = (inputs.elements["nombre"].value).trim()
    const correo = (inputs.elements["correo"].value).trim()
    const mensaje = (inputs.elements["mensaje"].value.trim())
    const telefono = (inputs.elements["telefono"].value).trim()
    if (!nombre.length > 0 || !correo.length > 0 || !mensaje.length > 0 || !telefono.length > 0) {
        alert("Todos los campos son obligatorios")
        return
    }
    Email.send({
        Host: "smtp.mailtrap.io",
        Username: "673d97073f1823",
        Password: "fb47750c93b34c",
        To: "youreamil@gmail.com",
        From: correo,
        Subject: "Contactanos",
        Body: mensaje + "<br>" + nombre + "<br>" + telefono
    }).then(mensaje => alert("Mensaje enviado con éxito"))
})