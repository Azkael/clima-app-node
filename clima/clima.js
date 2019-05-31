const axios = require('axios');

const getClima = async (lat,lon) => {
    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=959b23a3e11f258b6363e0867620f965&units=metric`);

    return resp.data.main.temp
}


module.exports = {
    getClima
}