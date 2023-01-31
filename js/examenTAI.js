fetch("servicio.json")
    .then(respuesta => respuesta.json())
    .then(datos => {
        const tabla = document.getElementById("servicio");
        datos.forEach(item => {
            if(item.idcliente%2==0){   
                let ganancia = (item.preciovta*item.preciocompra)*item.cantidad;
                servicio.innerHTML += `
                <tr id="a">
                <td>${item.codigo}</td>
                <td>${item.idcliente}</td>
                <td>${item.descripcion}</td>
                <td>${item.cantidad}</td>
                <td>${item.preciovta}</td>
                <td>${item.preciocompra}</td>
                <td>${ganancia}</td>
                </tr>
                `;
            } else {
                let ganancia = (item.preciovta*item.preciocompra)*item.cantidad;
                servicio.innerHTML += `
                <tr>
                <td>${item.codigo}</td>
                <td>${item.idcliente}</td>
                <td>${item.descripcion}</td>
                <td>${item.cantidad}</td>
                <td>${item.preciovta}</td>
                <td>${item.preciocompra}</td>
                <td>${ganancia}</td>
                </tr>
                `;
            }
        });
    });