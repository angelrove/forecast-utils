[**@angelrove/forecast-utils**](../../README.md)

***

[@angelrove/forecast-utils](../../README.md) / [index](../README.md) / timeFromLocation

# Function: timeFromLocation()

> **timeFromLocation**(`apiKey`, `lat`, `lng`): `Promise`\<`any`\>

Defined in: [geolocation/timeFromLocation.js:25](https://github.com/angelrove/forecast-utils/blob/c8671c08665caf44781ca994161c6a147044eefe/src/geolocation/timeFromLocation.js#L25)

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
