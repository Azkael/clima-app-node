const axios = require('axios');

const getLugarLatLng = async (city) => {
    const encodedUrl = encodeURI(city);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: {'X-RapidAPI-Key': '0614906158mshc8df8cc8f165468p110ed2jsn5bd99e54c6c5'}
    })

    const resp = await instance.get();

    if( resp.data.Results.length === 0){
        throw new Error(`No hay resultado para ${city}`)
    }

    const data = resp.data.Results[0];
    const direction = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {
        direction,
        lat,
        lon
    }
   
}

module.exports = {
    getLugarLatLng
}


