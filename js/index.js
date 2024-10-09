function cargarContactos() {
    var divContacto = document.getElementById('contacto');
    fetch("https://www.raydelto.org/agenda.php").then(function (listado) {
        return listado.json();
    }).then(function (listado) {
        console.log(listado);
        var contacto = listado[0];
        divContacto.innerHTML = contacto.nombre + " " + contacto.apellido + " " + contacto.telefono;
    });
}

function enviarContacto() {
    const url = 'https://www.raydelto.org/agenda.php';
    const data = {
        nombre: 'MiNombre',
        apellido: 'MiApellido',
        telefono: 'MiTelefono'
    };

    fetch(url, {
        method: 'POST',
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(result => {
            console.log('Success:', result);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}



// HTTP
// HTTPS