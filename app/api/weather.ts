import axios from 'axios'



export default async function weather(){
    try {
        const response = await axios.get('https://api.openweathermap.org/data/3.0/onecall?lat=48.893217&lon=2.287864&exclude=current,hourly,minutely,alerts&lang=fr&units=metric&appid=ApiKey')
        return response
    } catch (error) {
        console.log(error)
    }
}
