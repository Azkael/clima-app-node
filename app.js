const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direction: {
        alias: 'd',
        description: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const getInfo = async(direction) => {
    try {
        const coords =  await lugar.getLugarLatLng(direction);
        const temp =  await clima.getClima(coords.lat, coords.lon);
        return `La temperatura de ${coords.direction} es de ${temp} grados centigrados`;

    } catch (error) {
        console.log(`No se pudo determinar el clima de ${direction}`)                        
    }
}

getInfo(argv.direction)
    .then(console.log)
    .catch(console.log)