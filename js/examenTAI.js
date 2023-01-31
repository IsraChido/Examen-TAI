fetch("servicio.json")
    .then(respuesta => respuesta.json())
    .then(datos => {
        const ganancias = document.getElementById("p");
        let tGanancias = 0;
        datos.forEach(item => {
            let ganancia = (item.preciovta*item.preciocompra)*item.cantidad;
            tGanancias += ganancia;
            if(item.idcliente%2==0){   
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
        p.innerHTML = "<p>Ganancias totales: " + tGanancias + "</p>"; 
    });