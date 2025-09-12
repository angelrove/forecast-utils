/**
 * Get the current geolocation of the device with the browser.
 *
 * @returns {Promise<{latitude: number, longitude: number}>}
 * @throws {Error} If geolocation is not supported or permission is denied.
 */
export default async function geolocation(): Promise<{latitude: number, longitude: number}> {
  const geolocOptions = {
    enableHighAccuracy: true,
    timeout: 6 * 1000,
    maximumAge: 0,
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
    console.error(error);

    /* @ts-expect-error */
    if (error.code === error.PERMISSION_DENIED) {
      throw new Error("Geolocation: permission denied");
    }
    /* @ts-expect-error */
    if (error.code === error.POSITION_UNAVAILABLE) {
      throw new Error("Geolocation: position unavailable");
    }
    /* @ts-expect-error */
    if (error.code === error.TIMEOUT) {
      throw new Error("Geolocation: timeout");
    }
    throw new Error("Geolocation: unknown error");
  }
}
