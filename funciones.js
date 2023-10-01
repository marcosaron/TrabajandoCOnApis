const boton = document.getElementById("boton");
const pronostico = document.getElementById("pronostico");
const APIkey = "d98356f3bf53255011ee875e6eb0167d";



boton.addEventListener("click", async () => {
    const ciudad = document.getElementById("input").value;
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${APIkey}`;
    const devuelve = await fetchData(URL);
    console.log(devuelve);
    pronostico.innerHTML = ` 
    <h4>Temperatura actual: </h4>
        <p id="temoActual"> ${kelvin (devuelve.main.temp)} ºC</p>
    `;

});

function kelvin (temp){
    let celsius = temp - 273;
    return Math.round(celsius * 10)/10;
}

async function fetchData(url) {
    try {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        throw new Error("Error al obtener los datos");
    }
    } catch (error) {
    console.error("Error al cargar el archivo JSON:", error);
    }
}




