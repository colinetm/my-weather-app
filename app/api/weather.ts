import axios from 'axios';

export default async function weather() {
    // On récupère la clé depuis les variables d'environnement
    const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

    try {
        const response = await axios.get('https://api.openweathermap.org/data/3.0/onecall', {
            params: {
                lat: 48.893217,
                lon: 2.287864,
                exclude: 'current,hourly,minutely,alerts',
                lang: 'fr',
                units: 'metric',
                appid: apiKey // Utilisation de la variable
            }
        });
        return response;
    } catch (error) {
        console.error("Erreur lors de l'appel API :", error);
        throw error; // Il est souvent préférable de renvoyer l'erreur pour la gérer dans l'UI
    }
}
