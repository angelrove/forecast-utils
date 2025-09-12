[**@angelrove/forecast-utils**](../../README.md)

***

[@angelrove/forecast-utils](../../modules.md) / [index](../README.md) / timeFromLocation

# Function: timeFromLocation()

> **timeFromLocation**(`apiKey`, `lat`, `lng`): `Promise`\<`any`\>

Defined in: [geolocation/timeFromLocation.js:25](https://github.com/angelrove/forecast-utils/blob/24fb242ac959e4d78950a4cc0b4469220f80b468/src/geolocation/timeFromLocation.js#L25)

Get local time from a given location (lat, lng) using 'GoogleMaps TimeZone' API.

## Parameters

### apiKey

`string`

GoogleMaps API key.

### lat

`number`

### lng

`number`

## Returns

`Promise`\<`any`\>

An object containing the local time and timezone information:

## Throws

If the API request fails or returns an error status.
