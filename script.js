const obtenerInformacionDepartamento = () => {
    let inputTexto = document.getElementById("input_departamento");
    let valor = inputTexto.value.trim();
    if(valor) {
        peticionApi(valor);
    } else {
        alert("Por favor ingrese un departamento válido");
    }
}

const peticionApi = (departamento) => {
    const baseURL = 'https://api-colombia.com/api/v1/';
    const endpoint = `Department`;
    const url = `${baseURL}${endpoint}`;

    axios.get(url)
    .then(res => buscarDepartamento(res.data, departamento))
    .catch(error => console.log(error));
}

const buscarDepartamento = (data, nombreDepartamento) => {
    let departamentoEncontrado = data.find( depto => depto.name.toLowerCase() === nombreDepartamento.toLowerCase());

    if (departamentoEncontrado) {
        printData(departamentoEncontrado);
    } else {
        alert ("Departamento no encontrado");
    }
}

const printData = (departamento) => {
    let respuesta = document.getElementById("mostrar_informacion");
    respuesta.innerHTML = `
    <h2> Información de ${departamento.name}</h2>
    <p><strong>Descripción: </strong> ${departamento.description}</p>
    <p><strong>Capital: </strong> ${departamento.cityCapital.name}</p>
    <p><strong>Población: </strong> ${departamento.population}</p>
    <p><strong>Superficie: </strong> ${departamento.surface} km²</p>
    `; 
}