/**
 * Get the current geolocation of the device with the browser.
 *
 * @returns {Promise<{latitude: number, longitude: number}>}
 * @throws {Error} If geolocation is not supported or permission is denied.
 */
export default async function geolocation(): Promise<{
  latitude: number;
  longitude: number;
}> {
  const geolocOptions = {
    enableHighAccuracy: false,
    // Aumentamos a 30s porque algunos navegadores incluyen el tiempo de respuesta del usuario
    // en el diálogo de permisos dentro de este contador.
    timeout: 30 * 1000,
    // 5 minutos de caché es razonable para aplicaciones de clima.
    maximumAge: 5 * 60 * 1000, // Permite usar una ubicación cacheada de hasta 5 minutos
  };

  try {
    const data = await new Promise<GeolocationPosition>((resolve, reject) => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          resolve,
          reject,
          geolocOptions,
        );
      } else {
        reject(new Error("Geolocation is not supported"));
      }
    });

    return {
      latitude: data.coords.latitude,
      longitude: data.coords.longitude,
    };
  } catch (error) {
    const geolocError = error as GeolocationPositionError;

    console.error("Geolocation Error:", geolocError);

    if (geolocError.code === geolocError.PERMISSION_DENIED) {
      throw new Error("Geolocation: permission denied");
    }
    if (geolocError.code === geolocError.POSITION_UNAVAILABLE) {
      throw new Error("Geolocation: position unavailable");
    }
    if (geolocError.code === geolocError.TIMEOUT) {
      throw new Error("Geolocation: timeout");
    }
    throw new Error("Geolocation: unknown error");
  }
}
